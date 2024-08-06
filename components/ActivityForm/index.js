import styled from "styled-components";
import { useRouter } from "next/router";
import categories from "@/assets/categories";
import { useState } from "react";

const StyledFormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px;
  margin: 20px 30px 50px;
`;
const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px;
  padding: 30px;
`;

const StyledInputs = styled.input`
  padding: 10px;
  margin: 10px;
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  margin: 10px;
`;
export default function ActivityForm({ onSubmit }) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const newActivity = Object.fromEntries(formElements);
    newActivity.categoryIds = selectedCategoryIds;

    if (newActivity.categoryIds.length === 0) {
      alert("Please select at least one category.. ");
      return false;
    }
    onSubmit(newActivity);
    router.push("/");
  }
  function handleChange(event) {
    const categoryId = event.target.value;
    const isAdded = selectedCategoryIds.find((id) => id === categoryId);

    if (isAdded) {
      setSelectedCategoryIds(
        selectedCategoryIds.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategoryIds([...selectedCategoryIds, categoryId]);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledFormFieldset>
          <legend>Add new Activity</legend>
          <label htmlFor="title">Title: </label>
          <StyledInputs
            id="title"
            name="title"
            type="text"
            placeholder="Please choose title.."
            maxLength="30"
            required
          ></StyledInputs>
          <label htmlFor="image">ImageUrl: </label>
          <StyledInputs
            id="imageUrl"
            name="imageUrl"
            type="text"
            defaultValue="https://images.unsplash.com/photo-1648167538185-d957d3caf393?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <label htmlFor="description">Description: </label>
          <StyledTextarea
            id="description"
            name="description"
            placeholder="Please choose description.."
            maxLength="150"
          ></StyledTextarea>
          <StyledFieldset>
            <legend>Please select your categories</legend>
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <input
                    type="checkbox"
                    id={category.name}
                    value={category.id}
                    onChange={handleChange}
                    checked={selectedCategoryIds.includes(category.id)}
                  />
                  <label htmlFor={category.name}>{category.name}</label>
                </div>
              );
            })}
          </StyledFieldset>
          <label htmlFor="area">Area: </label>
          <StyledInputs
            id="area"
            name="area"
            type="text"
            placeholder="Please choose area.."
            maxLength="30"
          ></StyledInputs>
          <label htmlFor="country">Country: </label>
          <StyledInputs
            id="country"
            name="country"
            type="text"
            placeholder="Please choose a country.."
            maxLength="30"
          ></StyledInputs>
          <button type="submit">Submit</button>
        </StyledFormFieldset>
      </form>
    </>
  );
}
