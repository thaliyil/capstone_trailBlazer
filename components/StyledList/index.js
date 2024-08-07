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
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 20px;
`;

export const StyledListItem = styled.li`
  border: 1px solid black;
  margin: 20px;
`;

export const StyledAddLink = styled(Link)`
  background-color: orange;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;
