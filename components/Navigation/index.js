import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
  background-color: orange;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default function Navigation() {
  return (
    <StyledFooter>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/bookmark">Bookmarks</StyledLink>
    </StyledFooter>
  );
}
