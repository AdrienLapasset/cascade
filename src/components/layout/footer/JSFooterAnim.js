import styled, { css } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import theme from "@/styles/theme";

const StyledContainer = styled.footer`
  padding-bottom: 30px;
  height: calc(100vh - ${theme.headerHeight}px);
  margin: 0 !important;
  grid-column: 1/7;
  grid-row: 1/1;

  aside {
    grid-row: 1/2;
    background-color: ${({ $colors }) => $colors.fontColor};
    &:nth-child(1) {
      grid-column: 1 / 2;

      ${({ $progressInPercent, $noAnimation }) =>
        $noAnimation
          ? css`
              width: 44%;
              height: calc(13vh - ${theme.headerHeight + 30}px);
              min-height: 5px;
            `
          : css`
              width: ${$progressInPercent * 0.44}%;
              min-height: 5px;
              height: calc(
                ${$progressInPercent * 0.13}vh - ${theme.headerHeight + 30}px
              );
            `}
    }
    &:nth-child(2) {
      grid-column: 2 / 3;
      ${({ $progressInPercent, $noAnimation }) =>
        $noAnimation
          ? css`
              width: 56%;
              height: calc(36vh - ${theme.headerHeight + 30}px);
            `
          : css`
              width: ${$progressInPercent * 0.56}%;
              min-height: 5px;

              height: calc(
                ${$progressInPercent * 0.36}vh - ${theme.headerHeight + 30}px
              );
            `}
    }
    &:nth-child(3) {
      grid-column: 3 / 4;
      ${({ $progressInPercent, $noAnimation }) =>
        $noAnimation
          ? css`
              width: 67%;
              height: calc(72vh - ${theme.headerHeight + 30}px);
            `
          : css`
              width: ${$progressInPercent * 0.67}%;
              min-height: 5px;

              height: calc(
                ${$progressInPercent * 0.72}vh - ${theme.headerHeight + 30}px
              );
            `}
    }
    &:nth-child(4) {
      grid-column: 4 / 5;
      ${({ $progressInPercent, $noAnimation }) =>
        $noAnimation
          ? css`
              width: 78%;
              height: calc(90vh - ${theme.headerHeight + 30}px);
            `
          : css`
              width: ${$progressInPercent * 0.78}%;
              min-height: 5px;

              height: calc(
                ${$progressInPercent * 0.9}vh - ${theme.headerHeight + 30}px
              );
            `}
    }
    &:nth-child(5) {
      grid-column: 5 / 6;
      ${({ $progressInPercent, $noAnimation }) =>
        $noAnimation
          ? css`
              width: 89%;
              height: calc(99vh - ${theme.headerHeight + 30}px);
            `
          : css`
              width: ${$progressInPercent * 0.89}%;
              min-height: 5px;

              height: calc(
                ${$progressInPercent * 0.99}vh - ${theme.headerHeight + 30}px
              );
            `}
    }
    &:nth-child(6) {
      grid-column: 6 / 7;
      ${({ $progressInPercent, $noAnimation }) =>
        $noAnimation
          ? css`
              width: 100%;
              height: calc(100vh - ${theme.headerHeight + 30}px);
            `
          : css`
              width: ${$progressInPercent}%;
              min-height: 5px;

              height: calc(
                ${$progressInPercent}vh - ${theme.headerHeight + 30}px
              );
            `}
    }
  }
  div {
    grid-row: 1/2;
    align-self: self-end;
    color: ${({ $colors }) => $colors.fontColor};
    a {
      display: block;
      margin-top: 15px;
    }
    &:nth-of-type(1) {
      grid-column: 1 / 2;
    }
    &:nth-of-type(2) {
      grid-column: 2 / 3;
    }
    &:nth-of-type(3) {
      grid-column: 3 / 4;
    }
  }
`;

export default function Footer({ colors, noAnimation }) {
  const [progressInPercent, setProgressInPercent] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      setProgressInPercent(
        Math.round(
          ((window.innerHeight - top) /
            (window.innerHeight - theme.headerHeight)) *
            100
        )
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledContainer
      className="grid"
      ref={ref}
      $progressInPercent={progressInPercent}
      $colors={colors}
      $noAnimation={noAnimation}
    >
      <aside></aside>
      <aside></aside>
      <aside></aside>
      <aside></aside>
      <aside></aside>
      <aside></aside>
    </StyledContainer>
  );
}