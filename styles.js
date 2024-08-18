import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    text-align: center;
    background-color: var(--dark-green);
    font-family:'Gill Sans';
  
  }

  :root {
--coral: #F4847B;
--dijon: #F3B170;
--dark-green: #097471;
--light-green: #7EB1B0;

--box-shadow-layout: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}
`;
