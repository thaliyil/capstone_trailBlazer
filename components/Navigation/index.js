import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledFooter>
      <StyledLink href="/bookmark">BOOKMARKS</StyledLink>
      <StyledLink href="/">HOME</StyledLink>
      <StyledLink href="/spotlight">INSPIRE ME</StyledLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 3;
  background-color: var(--dijon);
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  padding: 5px;
  height: 75px;
  box-shadow: var(--box-shadow-layout);
  font-family: var(--font-family);

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  padding: 10px;
  font-weight: 500;

  &:hover {
    color: var(--dark-green);
    font-size: 1.3rem;
    transition-duration: 0.4s;
    padding: 15px;
  }
`;
