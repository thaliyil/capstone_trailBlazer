import styled from "styled-components";
import Link from "next/link";

export const StyledCateogriesUl = styled.ul`
  list-style: none;
  padding: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const StyledCategoryLi = styled.li`
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0 0 0;
  background-color: var(--coral);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 20px;
  background-color: var(--dark-green);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const StyledLi = styled.li`
  background-color: var(--light-green);
  border: 1px solid black;
  margin: 20px;
  border-radius: 10px;
  box-shadow: var(--box-shadow-cards);
  width: 370px;
  height: 390px;

  &:hover {
    height: 410px;
    transition-duration: 0.5s;
    margin: 10px;
  }
`;

export const StyledAddLink = styled(Link)`
  background-color: var(--coral);
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
`;

export const StyledSection = styled.section`
  padding-top: 7rem;
`;

export const StyledCard = styled.div`
  position: relative;
`;

export const StyledMessage = styled.h3`
  color: white;
`;
