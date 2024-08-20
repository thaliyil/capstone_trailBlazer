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
  height: 3rem;
  color: black;
  font-size: 1.3rem;
  background-color: ${({ $filter }) =>
    $filter ? "var(--coral)" : "var(--light-green)"};
  width: ${({ $filter }) => ($filter ? "12rem" : "10rem")};
  box-shadow: var(--box-shadow-layout);

  &:hover {
    transition-duration: 0.5s;
    background-color: var(--coral);
  }

  @media (min-width: 992px) {
    width: 12rem;
    padding: ${({ $filter }) => ($filter ? "7px" : "5px")};
    margin-bottom: ${({ $filter }) => ($filter ? "0" : "1rem")};

    &:hover {
      transition-duration: 0.5s;
      background-color: var(--coral);
    }
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

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    gap: 1rem;
  }
`;
