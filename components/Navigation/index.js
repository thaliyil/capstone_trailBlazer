import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledFooter>
      <StyledLink href="/bookmark">Bookmarks</StyledLink>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/spotlight">Inspire me</StyledLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
  background-color: var(--dijon);
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  padding: 5px;
  box-shadow: var(--box-shadow-layout);
  font-family: var(--font-family);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  padding: 5px;
  &:hover {
    color: var(--dark-green);
    font-size: 1.6rem;
    transition-duration: 0.4s;
    padding: 3px;
  }
`;
