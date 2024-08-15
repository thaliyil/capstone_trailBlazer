import styled from "styled-components";

export default function Header() {
  return <StyledHeader>TrailBlazer</StyledHeader>;
}

const StyledHeader = styled.h1`
  background-color: var(--dijon);
  padding: 10px 0;
  margin: 0;
  border: 1px solid grey;
  position: fixed;
  width: 100vw;
  z-index: 3;
`;
