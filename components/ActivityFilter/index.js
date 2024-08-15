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
  width: 10rem;
  height: 2.5rem;
  color: white;
  font-size: 1rem;

  background-color: ${({ $filter }) => ($filter ? "orange" : "white")};

`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  gap: 10px;
  margin: 20px 20px 0px;
  overflow: auto;
`;
