import styled from "styled-components";
import categories from "@/assets/categories";

export default function ActivityFilter({ onFilterActivities, filter }) {
  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          onClick={() => onFilterActivities(category.id)}
          $filter={filter === category.id}
        >
          {category.name}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}

const FilterButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  width: ${({ $filter }) => ($filter ? "12rem" : "10rem")};
  height: 2.5rem;
  color: black;
  font-size: 1rem;
  background-color: ${({ $filter }) =>
    $filter ? "var(--coral)" : "var(--light-green)"};

  box-shadow: var(--box-shadow-layout);

  &:hover {
    width: 12rem;
    transition-duration: 0.5s;
    background-color: var(--coral);
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 10px;
  margin: 20px 20px 0px;
  overflow: auto;
  scrollbar-width: none;
`;
