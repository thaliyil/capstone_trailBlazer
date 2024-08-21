import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <StyledHeader>TrailBlazer</StyledHeader>
      <StyledLogo src={logo} alt="TrailBlazer Logo" />
    </>
  );
}

const StyledHeader = styled.h1`
  background-color: var(--dijon);
  padding: 20px 0;
  margin: 0;
  border: 1px solid grey;
  position: fixed;
  width: 100vw;
  z-index: 3;
  box-shadow: var(--box-shadow-layout);
`;

const StyledLogo = styled(Image)`
  width: 50px;
  height: 60px;
  position: absolute;
  z-index: 50;
  position: fixed;
  left: 40px;
  border-radius: 5px;
  top: 10px;
`;
