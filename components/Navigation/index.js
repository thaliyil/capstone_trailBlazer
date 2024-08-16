import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
  background-color: var(--dijon);
  display: flex;
  justify-content: space-around;
  border: 1px solid grey;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 0px inset,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.4) 0px 2px 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-family: "Gill Sans";
  padding: 5px;
  &:hover {
    color: var(--dark-green);
    font-size: 1.6rem;
    transition-duration: 0.4s;
    padding: 3px;
  }
`;
export default function Navigation() {
  return (
    <StyledFooter>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/bookmark">Bookmarks</StyledLink>
    </StyledFooter>
  );
}
