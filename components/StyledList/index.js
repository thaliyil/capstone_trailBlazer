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

export const StyledCategory = styled.li`
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
  background-color: white;
`;

export const StyledListItem = styled.li`
  background-color: var(--light-green);
  border: 1px solid black;
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  padding-top: 5rem;
`;

export const StyledCard = styled.div`
  position: relative;
`;
