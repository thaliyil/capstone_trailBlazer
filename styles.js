import { createGlobalStyle } from "styled-components";
import "/assets/fonts.css";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    /* text-align: center; */
    background-color: #097471;
    /* font-family: Quicksand; */
  }
  
  :root {
--coral: #F4847B;
--dijon: #F3B170;
--dark-green: #097471;
--light-green: #7EB1B0;

--font: Quicksand;
}
`;
