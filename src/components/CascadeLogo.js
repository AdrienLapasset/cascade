import styled, { keyframes, css } from "styled-components";
import { textApparitionAnim, cascadeDelay } from "@/styles/theme";
import { useState } from "react";

const cascadeAnim = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -88;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* &:hover > svg > line {
    animation: ${cascadeAnim} 0.4s
      ${({ theme }) => theme.cubicBezier.pageTranstion} infinite !important;
  } */
  @media ${(props) => props.theme.minWidth.sm} {
  }
  h1 {
    font-weight: 900;
    font-size: 32px;
    line-height: 0.8em;
    ${({ $isAnimation }) =>
      $isAnimation &&
      css`
        animation: ${textApparitionAnim} 0.4s forwards;
        transform: translateY(-50px);
      `}
  }
  svg {
    height: 20px;
    width: auto;
    @media ${(props) => props.theme.minWidth.md} {
      height: 30px;
    }
    path {
      fill: ${({ $color }) => $color};
    }
    line {
      stroke: ${({ $color }) => $color};
      /* stroke-dasharray: 44; */
      /* stroke-dashoffset: 0; */
      /* transition: stroke-dashoffset 0.4s ease-in-out; */
      ${cascadeDelay(6, 0.1)}
      ${({ $isAnimation }) =>
        $isAnimation &&
        css`
          transform: translateY(-60px);
          animation: ${textApparitionAnim} 0.4s forwards;
        `}
    }
  }
`;

export default function CascadeLogo({ color, isAnimation }) {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  return (
    <StyledContainer
      onMouseOver={() => setIsLogoHovered(true)}
      $isLogoHovered={isLogoHovered}
      $isAnimation={isAnimation}
      $color={color}
    >
      <svg
        width="273"
        height="57"
        viewBox="0 0 273 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6575 45.4559C11.7389 45.4559 7.75018 43.9886 4.69152 41.0539C1.63285 38.0779 0.103516 34.2133 0.103516 29.4599C0.103516 24.6239 1.67418 20.7179 4.81552 17.7419C7.99818 14.7246 11.9042 13.2159 16.5335 13.2159C20.5429 13.2159 24.0355 14.2699 27.0115 16.3779C29.9875 18.4859 31.7029 21.5859 32.1575 25.6779H22.7955C22.4649 24.3553 21.7415 23.3013 20.6255 22.5159C19.5095 21.6893 18.1455 21.2759 16.5335 21.2759C14.4669 21.2759 12.7515 22.0406 11.3875 23.5699C10.0648 25.0579 9.40352 27.0213 9.40352 29.4599C9.40352 31.8986 10.0648 33.8413 11.3875 35.2879C12.7102 36.6933 14.4668 37.3959 16.6575 37.3959C19.8402 37.3959 21.9069 36.1766 22.8575 33.7379H32.1575C31.7442 37.3339 30.1115 40.1859 27.2595 42.2939C24.4489 44.4019 20.9149 45.4559 16.6575 45.4559Z"
          fill="black"
        />
        <path
          d="M61.9844 37.9539H62.7284V44.8359H58.8844C55.5364 44.8359 53.3044 43.6166 52.1884 41.1779C50.0804 44.0299 46.691 45.4559 42.0204 45.4559C38.5897 45.4559 35.841 44.6706 33.7744 43.0999C31.7077 41.4879 30.6744 39.1939 30.6744 36.2179C30.6744 33.3659 31.5837 31.1753 33.4024 29.6459C35.2624 28.0753 37.701 27.1246 40.7184 26.7939L50.5144 25.7399V24.7479C50.5144 21.9373 49.0264 20.5319 46.0504 20.5319C43.1984 20.5319 41.545 21.8753 41.0904 24.5619H31.7904C32.121 21.1726 33.547 18.4446 36.0684 16.3779C38.5897 14.2699 41.917 13.2159 46.0504 13.2159C50.0597 13.2159 53.3457 14.2286 55.9084 16.2539C58.5124 18.2793 59.8144 21.3586 59.8144 25.4919V35.6599C59.8144 37.1893 60.5377 37.9539 61.9844 37.9539ZM50.5144 32.8699V32.0019L43.9424 32.7459C41.297 33.0353 39.9744 34.0479 39.9744 35.7839C39.9744 37.5613 41.1937 38.4499 43.6324 38.4499C45.4097 38.4499 47.001 37.9953 48.4064 37.0859C49.8117 36.1766 50.5144 34.7713 50.5144 32.8699Z"
          fill="black"
        />
        <path
          d="M74.9259 45.4559C70.4206 45.4559 66.9279 44.5053 64.4479 42.6039C61.9679 40.7026 60.6246 38.0573 60.4179 34.6679H69.2839C69.6559 37.3133 71.5366 38.6359 74.9259 38.6359C77.4886 38.6359 78.7699 37.8299 78.7699 36.2179C78.7699 35.3086 78.3979 34.6059 77.6539 34.1099C76.9099 33.6139 75.6079 33.1386 73.7479 32.6839L70.3999 31.9399C69.1186 31.6506 68.0026 31.3406 67.0519 31.0099C66.1426 30.6379 65.2126 30.1213 64.2619 29.4599C63.3112 28.7986 62.5879 27.9306 62.0919 26.8559C61.5959 25.7813 61.3479 24.4999 61.3479 23.0119C61.3479 19.9119 62.5259 17.5146 64.8819 15.8199C67.2379 14.0839 70.1312 13.2159 73.5619 13.2159C77.7366 13.2159 80.9606 14.1253 83.2339 15.9439C85.5072 17.7626 86.7679 20.1186 87.0159 23.0119H78.0879C77.7572 21.0279 76.2692 20.0359 73.6239 20.0359C72.5906 20.0359 71.7639 20.2633 71.1439 20.7179C70.5239 21.1313 70.2139 21.7099 70.2139 22.4539C70.2139 22.9913 70.4206 23.4459 70.8339 23.8179C71.2886 24.1899 71.7639 24.4586 72.2599 24.6239C72.7972 24.7893 73.6652 25.0373 74.8639 25.3679L78.2739 26.1739C81.3326 26.8766 83.6472 27.9926 85.2179 29.5219C86.7886 31.0513 87.5739 33.1799 87.5739 35.9079C87.5739 39.0493 86.3959 41.4259 84.0399 43.0379C81.6839 44.6499 78.6459 45.4559 74.9259 45.4559Z"
          fill="black"
        />
        <path
          d="M102.77 45.4559C97.851 45.4559 93.8624 43.9886 90.8037 41.0539C87.745 38.0779 86.2157 34.2133 86.2157 29.4599C86.2157 24.6239 87.7864 20.7179 90.9277 17.7419C94.1104 14.7246 98.0164 13.2159 102.646 13.2159C106.655 13.2159 110.148 14.2699 113.124 16.3779C116.1 18.4859 117.815 21.5859 118.27 25.6779H108.908C108.577 24.3553 107.854 23.3013 106.738 22.5159C105.622 21.6893 104.258 21.2759 102.646 21.2759C100.579 21.2759 98.8637 22.0406 97.4997 23.5699C96.177 25.0579 95.5157 27.0213 95.5157 29.4599C95.5157 31.8986 96.177 33.8413 97.4997 35.2879C98.8224 36.6933 100.579 37.3959 102.77 37.3959C105.952 37.3959 108.019 36.1766 108.97 33.7379H118.27C117.856 37.3339 116.224 40.1859 113.372 42.2939C110.561 44.4019 107.027 45.4559 102.77 45.4559Z"
          fill="black"
        />
        <path
          d="M148.097 37.9539H148.841V44.8359H144.997C141.649 44.8359 139.417 43.6166 138.301 41.1779C136.193 44.0299 132.803 45.4559 128.133 45.4559C124.702 45.4559 121.953 44.6706 119.887 43.0999C117.82 41.4879 116.787 39.1939 116.787 36.2179C116.787 33.3659 117.696 31.1753 119.515 29.6459C121.375 28.0753 123.813 27.1246 126.831 26.7939L136.627 25.7399V24.7479C136.627 21.9373 135.139 20.5319 132.163 20.5319C129.311 20.5319 127.657 21.8753 127.203 24.5619H117.903C118.233 21.1726 119.659 18.4446 122.181 16.3779C124.702 14.2699 128.029 13.2159 132.163 13.2159C136.172 13.2159 139.458 14.2286 142.021 16.2539C144.625 18.2793 145.927 21.3586 145.927 25.4919V35.6599C145.927 37.1893 146.65 37.9539 148.097 37.9539ZM136.627 32.8699V32.0019L130.055 32.7459C127.409 33.0353 126.087 34.0479 126.087 35.7839C126.087 37.5613 127.306 38.4499 129.745 38.4499C131.522 38.4499 133.113 37.9953 134.519 37.0859C135.924 36.1766 136.627 34.7713 136.627 32.8699Z"
          fill="black"
        />
        <path
          d="M169.294 0.815918H178.594V44.8359H171.03L170.224 41.6119H169.666C167.6 44.1746 164.644 45.4559 160.8 45.4559C156.584 45.4559 153.071 43.9886 150.26 41.0539C147.491 38.0779 146.106 34.1513 146.106 29.2739C146.106 24.3139 147.512 20.4079 150.322 17.5559C153.133 14.6626 156.626 13.2159 160.8 13.2159C164.314 13.2159 167.145 14.1873 169.294 16.1299V0.815918ZM162.35 37.3959C164.458 37.3959 166.132 36.6519 167.372 35.1639C168.654 33.6759 169.294 31.7126 169.294 29.2739C169.294 26.8766 168.654 24.9546 167.372 23.5079C166.132 22.0199 164.458 21.2759 162.35 21.2759C160.284 21.2759 158.61 22.0199 157.328 23.5079C156.047 24.9546 155.406 26.8766 155.406 29.2739C155.406 31.7126 156.047 33.6759 157.328 35.1639C158.61 36.6519 160.284 37.3959 162.35 37.3959Z"
          fill="black"
        />
        <path
          d="M201.008 34.5439H209.874C209.296 37.8919 207.684 40.5579 205.038 42.5419C202.434 44.4846 199.066 45.4559 194.932 45.4559C190.138 45.4559 186.211 44.0093 183.152 41.1159C180.094 38.2226 178.564 34.3993 178.564 29.6459C178.564 24.6446 180.094 20.6559 183.152 17.6799C186.252 14.7039 190.055 13.2159 194.56 13.2159C198.818 13.2159 202.393 14.5593 205.286 17.2459C208.221 19.9326 209.709 23.9833 209.75 29.3979C209.75 30.1833 209.688 31.0099 209.564 31.8779H187.74C187.947 33.7379 188.67 35.2466 189.91 36.4039C191.15 37.5613 192.824 38.1399 194.932 38.1399C198.239 38.1399 200.264 36.9413 201.008 34.5439ZM194.56 20.5319C192.783 20.5319 191.295 21.0279 190.096 22.0199C188.939 22.9706 188.195 24.2106 187.864 25.7399H200.884C200.719 24.2106 200.058 22.9706 198.9 22.0199C197.743 21.0279 196.296 20.5319 194.56 20.5319Z"
          fill="black"
        />
        <line
          x1="215"
          y1="13"
          x2="215"
          y2="17"
          stroke="black"
          strokeWidth="4"
        />
        <line
          x1="226.5"
          y1="13"
          x2="226.5"
          y2="27"
          stroke="black"
          strokeWidth="5"
        />
        <line
          x1="237"
          y1="13"
          x2="237"
          y2="43"
          stroke="black"
          strokeWidth="6"
        />
        <line
          x1="247.5"
          y1="13"
          x2="247.5"
          y2="51"
          stroke="black"
          strokeWidth="7"
        />
        <line
          x1="258"
          y1="13"
          x2="258"
          y2="55"
          stroke="black"
          strokeWidth="8"
        />
        <line
          x1="268.5"
          y1="13"
          x2="268.5"
          y2="57"
          stroke="black"
          strokeWidth="9"
        />
      </svg>
    </StyledContainer>
  );
}
