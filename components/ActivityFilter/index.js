import styled from "styled-components";
import categories from "@/assets/categories";
import { useState } from "react";
import { FaList } from "react-icons/fa";

export default function ActivityFilter({ onFilterActivities, filter }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
    <>
      <CategoryButton
        $isDropdownVisible={isDropdownVisible}
        onClick={toggleDropdown}
      >
        <FaList size={20} />
      </CategoryButton>
      <FilterContainer>
        {isDropdownVisible &&
          categories.map((category) => (
            <FilterButton
              key={category.id}
              onClick={() => onFilterActivities(category.id)}
              $filter={filter === category.id}
            >
              {category.name}
            </FilterButton>
          ))}
      </FilterContainer>
    </>
  );
}

const FilterButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  height: 3rem;
  color: black;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: var(--font-family);
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

const CategoryButton = styled.button`
  background-color: ${({ $isDropdownVisible }) =>
    $isDropdownVisible ? "var(--coral)" : "var(--light-green)"};
  box-shadow: var(--box-shadow-layout);
  color: white;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
`;
