import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }
`;
export default GlobalStyle;
