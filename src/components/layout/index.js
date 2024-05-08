import Header from "./header";
import Footer from "./footer";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "@/app/Context";
import noiseImage from "@/assets/images/noise.png";

const StyledLayout = styled.div`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fontColor};
  min-height: 100vh;
  background-image: url(${noiseImage.src});
`;

export default function Layout({ children, isFromPage }) {
  const { colors } = useContext(Context);

  return (
    <StyledLayout $bgColor={colors.bgColor} $fontColor={colors.fontColor}>
      <Header
        bgColor={colors.bgColor}
        fontColor={colors.fontColor}
        isFromPage={isFromPage}
      />
      <main>{children}</main>
      <Footer colors={colors} />
    </StyledLayout>
  );
}
