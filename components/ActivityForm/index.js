import styled from "styled-components";
import { useRouter } from "next/router";
import categories from "@/assets/categories";
import { useState } from "react";
import Link from "next/link";
import { StyledButton } from "../ActivityDetails";
import countries from "@/assets/countries";
import Select from "react-select";

const countriesOptions = countries.map((country) => {
  return {
    value: country.name,
    label: country.name,
  };
});

export default function ActivityForm({ activity, onSubmit, isUpdateMode }) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState(
    activity?.categoryIds || []
  );

  const router = useRouter();

  function handleChange(event) {
    const categoryId = event.target.value;
    setSelectedCategoryIds(
      selectedCategoryIds.includes(categoryId)
        ? selectedCategoryIds.filter((id) => id !== categoryId)
        : [...selectedCategoryIds, categoryId]
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);
    const newActivity = { ...activityData, categoryIds: selectedCategoryIds };

    if (newActivity.categoryIds.length === 0) {
      alert("Please select at least one category.. ");
      return false;
    }
    onSubmit(newActivity);
    isUpdateMode ? router.back() : router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormFieldset>
        {isUpdateMode ? (
          <legend>Update Activity</legend>
        ) : (
          <legend>Add new Activity</legend>
        )}
        <label htmlFor="title">Title: </label>
        <StyledInputs
          id="title"
          name="title"
          type="text"
          placeholder="Please choose title.."
          maxLength="30"
          required
          defaultValue={activity?.title}
        ></StyledInputs>
        <label htmlFor="imageUrl">ImageUrl: </label>
        <StyledInputs
          id="imageUrl"
          name="imageUrl"
          type="text"
          defaultValue={
            isUpdateMode
              ? activity?.imageUrl
              : "https://images.unsplash.com/photo-1648167538185-d957d3caf393?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <label htmlFor="description">Description: </label>
        <StyledTextarea
          id="description"
          name="description"
          placeholder="Please choose description.."
          defaultValue={activity?.description}
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
                  checked={selectedCategoryIds.includes(category.id)}
                  onChange={handleChange}
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
          defaultValue={activity?.area}
        ></StyledInputs>
        <label htmlFor="country">Country: </label>
        <StyledSelect
          id="country"
          name="country"
          options={countriesOptions}
          placeholder="Please choose country.."
          value={
            isUpdateMode
              ? { value: activity.country, label: activity.country }
              : activity
          }
        />
        {isUpdateMode ? (
          <>
            <Link href={`/activities/${activity.id}`}>Cancel</Link>
            <StyledButton type="submit">Save</StyledButton>
          </>
        ) : (
          <StyledButton type="submit">Submit</StyledButton>
        )}
      </StyledFormFieldset>
    </form>
  );
}

const StyledFormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin: 20px 30px 60px;
  background-color: var(--light-green);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 10px;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px;
  padding: 30px;
  border-radius: 5px;
`;

const StyledInputs = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const StyledSelect = styled(Select)`
  text-align: left;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px;
  font-size: 0.8rem;
`;
