import styled from "styled-components";
import categories from "@/assets/categories";
export default function ActivityFilter({ onFilterActivities, filter }) {
  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          onClick={() => onFilterActivities(category.id)}
          style={{
            backgroundColor:
              filter === category.id ? "var(--coral)" : "var(--light-green)",
          }}
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
  color: black;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  gap: 10px;
  margin: 20px 20px 0px;
  overflow: auto;
  scrollbar-width: none;
`;
