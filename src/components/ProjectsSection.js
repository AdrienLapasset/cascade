import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../sanity/lib/client";
import { textApparitionAnim, fadeIn } from "@/styles/theme";
import { ThemeContext } from "styled-components";

const StyledContainer = styled.section`
  opacity: 0;
  animation: ${fadeIn} 0.4s 1s forwards;
  .project-info {
    grid-column: 1 / 3;
    position: sticky;
    top: 120px;
    height: fit-content;
    animation: ${textApparitionAnim} 0.4s forwards;
  }
  .category {
    margin: 10px 0 15px;
  }
`;

const StyledProjectVisuals = styled.a`
  grid-column: 3 / 7;
  position: relative;
  margin-bottom: 180px;
  img {
    height: auto;
    width: 100%;
  }
  video {
    height: auto;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }
  video.show {
    opacity: 1;
    visibility: visible;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default function ProjectsSection({ projects, changeColors }) {
  const theme = useContext(ThemeContext);

  const projectRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const headersHeight = 700;

  useEffect(() => {
    const handleScroll = () => {
      const newCurrentIndex = projectRefs.current.findIndex((ref) => {
        const rect = ref.getBoundingClientRect();
        console.log("top: ", rect.top, " bottom: ", rect.bottom);
        return rect.top < headersHeight && rect.bottom >= headersHeight;
      });
      if (currentIndex === 0 && newCurrentIndex === -1) {
        changeColors(theme.color.white, theme.color.black);
      }
      if (
        (currentIndex === 0 && newCurrentIndex !== -1) ||
        (currentIndex !== 0 && newCurrentIndex !== -1)
      ) {
        setCurrentIndex(newCurrentIndex);
        changeColors(
          projects[newCurrentIndex].image.dominantColor,
          theme.color.white
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <StyledContainer className="grid">
      <div className="project-info" key={currentProject.title}>
        <p className="title">{currentProject.title}</p>
        <p className="category">{currentProject.category}</p>
        <div className="services">
          {currentProject.services.map((service, i) => (
            <p key={i}>{service}</p>
          ))}
        </div>
      </div>
      {projects.map((project, index) => {
        const { title, image, url, videoUrl } = project;
        const imageProps = useNextSanityImage(client, image);
        const [isHovered, setIsHovered] = useState(false);
        return (
          <StyledProjectVisuals
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              // changeColors(theme.color.white, theme.color.black);
              setIsHovered(false);
            }}
          >
            <Image {...imageProps} alt={title} sizes="100vw" />
            <video
              preload="true"
              playsInline
              autoPlay
              loop
              muted
              className={isHovered ? "show" : ""}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </StyledProjectVisuals>
        );
      })}
    </StyledContainer>
  );
}
