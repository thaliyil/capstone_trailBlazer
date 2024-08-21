import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <StyledHeading>TrailBlazer</StyledHeading>
        <StyledMenu>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            duration={0.6}
            label="Show Menu"
          />
        </StyledMenu>
      </StyledHeader>
      {isOpen ? (
        <HamburgerMenu>
          <MenuLink onClick={() => setIsOpen(false)} href="/bookmark">
            My Bookmarks
          </MenuLink>
          <MenuLink onClick={() => setIsOpen(false)} href="/">
            Home
          </MenuLink>
          <MenuLink onClick={() => setIsOpen(false)} href="/spotlight">
            Inspire me!
          </MenuLink>
          <MenuLink onClick={() => setIsOpen(false)} href="/createActivity">
            Add new Activity
          </MenuLink>
        </HamburgerMenu>
      ) : null}
    </>
  );
}

const StyledHeader = styled.div`
  background-color: var(--dijon);
  margin: 0;
  border: 1px solid black;
  position: fixed;
  width: 100vw;
  z-index: 3;
  box-shadow: var(--box-shadow-layout);
`;

const StyledHeading = styled.h1`
  font-style: italic;
  font-weight: 400;
`;

const StyledMenu = styled.div`
  position: fixed;
  position: absolute;
  right: 20px;
  top: 15px;
  z-index: 10;

  @media (max-width: 767px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  border: 1px solid black;
  background-color: var(--dijon);
  border-radius: 10px;
  position: absolute;
  position: fixed;
  right: 5px;
  top: 90px;
  box-shadow: var(--box-shadow-layout);
  width: 300px;
  height: 400px;
  z-index: 10;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 30px 15px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: right;

  &:hover {
    color: var(--dark-green);
    font-size: 1.6rem;
    transition-duration: 0.4s;
    padding: 29px 9px;
  }
`;
