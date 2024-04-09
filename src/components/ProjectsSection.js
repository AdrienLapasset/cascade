import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { styled, keyframes } from "styled-components";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../sanity/lib/client";
import { textApparitionAnim, textDisparitionAnim } from "@/styles/theme";

const projectIntro = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(90px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
  }
`;

const StyledContainer = styled.section`
  opacity: 0;
  animation: ${projectIntro} 0.2s 2.2s forwards;
  grid-row-gap: 0 !important;
  grid-column: 1 / 7;
  margin: 0 !important;
  .project-info {
    grid-column: 1 / 3;
    position: sticky;
    top: 170px;
    height: fit-content;
    .info {
      opacity: ${({ $isInfoTransition }) => ($isInfoTransition ? 1 : 0)};
      animation: ${({ $isInfoTransition }) =>
          $isInfoTransition ? textDisparitionAnim : textApparitionAnim}
        0.2s forwards;
      &.title {
        font-weight: 900;
        margin-bottom: 15px;
      }
      &.category {
        margin-bottom: 15px;
        animation-delay: 0.05s;
      }
    }
    .info,
    .mask {
      line-height: 30px;
    }
    ul {
      .mask {
        &:nth-child(1) {
          .info {
            animation-delay: 0.1s;
          }
        }
        &:nth-child(2) {
          .info {
            animation-delay: 0.15s;
          }
        }
        &:nth-child(3) {
          .info {
            animation-delay: 0.2s;
          }
        }
        &:nth-child(4) {
          .info {
            animation-delay: 0.25s;
          }
        }
        &:nth-child(5) {
          .info {
            animation-delay: 0.3s;
          }
        }
        &:nth-child(6) {
          .info {
            animation-delay: 0.35s;
          }
        }
      }
    }
  }
  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    grid-column: 3 / 7;
  }
`;

const StyledProjectVisuals = styled.a`
  position: relative;
  &:hover {
    cursor: pointer;
    video {
      transform: translateY(0px);
    }
  }
  img {
    height: auto;
    width: 100%;
    aspect-ratio: 1.66;
  }
  .mask {
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    position: absolute;
  }
  video {
    width: 100%;
    transform: translateY(-101%);
    transition: transform 0.2s;
  }
`;

export default function ProjectsSection({ projects }) {
  const projectRefs = useRef([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [displayedProject, setDisplayedProject] = useState(null);
  const [isInfoTransition, setIsInfoTransition] = useState(false);

  useEffect(() => {
    if (currentProject !== null) {
      setIsInfoTransition(true);
      setTimeout(() => {
        setDisplayedProject(currentProject);
        setIsInfoTransition(false);
      }, 200 + currentProject.services.length * 100);
    } else {
      setIsInfoTransition(true);
    }
  }, [currentProject]);

  return (
    <StyledContainer className="grid" $isInfoTransition={isInfoTransition}>
      {displayedProject !== null && (
        <div className="project-info" key={displayedProject.title}>
          <div className="mask">
            <h2 className="info title">{displayedProject.title}</h2>
          </div>
          <div className="mask">
            <p className="info category">{displayedProject.category}</p>
          </div>
          <ul>
            {displayedProject.services.map((service, i) => (
              <li className="mask" key={i}>
                <p className="info service">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="projects-container">
        {projects.map((project, index) => {
          const { title, image, url, videoUrl } = project;
          const imageProps = useNextSanityImage(client, image);
          const videoRef = useRef(null);

          const handleMouseEnter = () => {
            videoRef.current.play();
          };
          const handleMouseLeave = () => {
            videoRef.current.pause();
          };

          return (
            <StyledProjectVisuals
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              onMouseEnter={() => {
                handleMouseEnter();
                setCurrentProject(projects[index]);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
                setCurrentProject(null);
              }}
            >
              <Image {...imageProps} alt={title} />
              <div className="mask">
                <video ref={videoRef} preload="auto" playsInline loop muted>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </StyledProjectVisuals>
          );
        })}
      </div>
    </StyledContainer>
  );
}
