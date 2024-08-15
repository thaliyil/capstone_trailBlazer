import styled from "styled-components";
import Link from "next/link";

export const StyledCateogriesUl = styled.ul`
  list-style: none;
  padding: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
`;

export const StyledCategory = styled.li`
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: var(--coral);
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 20px;
  background-color: var(--dark-turqouise);
`;

export const StyledListItem = styled.li`
  background-color: var(--light-turqouise);
  border: 1px solid black;
  margin: 20px;
`;

export const StyledAddLink = styled(Link)`
  background-color: var(--coral);
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;

export const StyledSection = styled.section`
  padding-top: 5rem;
`;

export const StyledCard = styled.div`
  position: relative;
`;
