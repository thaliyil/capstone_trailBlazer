import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    text-align: center;
    background-color: #097471;
  }
  
  :root {
--coral: #F4847B;
--dijon: #F3B170;
--dark-turqouise: #097471;
--light-turqouise: #7EB1B0;

}
`;
