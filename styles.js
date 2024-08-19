import { createGlobalStyle } from "styled-components";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

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
    font-family: var(--font-family);
  }

  :root {
--coral: #F4847B;
--dijon: #F3B170;
--dark-green: #097471;
--light-green: #7EB1B0;

--box-shadow-layout: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
--box-shadow-cards:  rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

--font-family: ${quicksand.style.fontFamily}; 

--media-queries-form-s: 20px 30px 70px;
--media-queries-form-m: 20px 100px 70px;
--media-queries-form-l: 20px 400px 70px;
}
`;
