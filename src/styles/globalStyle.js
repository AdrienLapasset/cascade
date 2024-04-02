import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  letter-spacing: -0.05em;
  background-color: #F4F3EF;
}

a,p,button,h1,h2,h3,i,input, ul, li {
  letter-spacing: -0.05em;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 0 15px;
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;
    margin: 0 30px;
  }
}
`;
