import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledHamburger direction="right" toggled={isOpen} toggle={setOpen}>
        {isOpen ? (
          <>
            <Link href="/bookmark">Bookmarks</Link>
            <Link href="/">Home</Link>
            <Link href="/spotlight">Inspire me</Link>
          </>
        ) : null}
      </StyledHamburger>
    </>
  );
}

const StyledHamburger = styled(Hamburger)`
  z-index: 5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 767px) {
    display: none;
  }
`;
