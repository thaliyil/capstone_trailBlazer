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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
