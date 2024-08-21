import styled from "styled-components";
import { useRouter } from "next/router";
import categories from "@/assets/categories";
import { useState } from "react";
import Link from "next/link";
import { StyledCard } from "../Styles";

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
    <StyledCard>
      <form onSubmit={handleSubmit}>
        <StyledFormFieldset>
          {isUpdateMode ? (
            <StyledFormHeading>Update Activity</StyledFormHeading>
          ) : (
            <StyledFormHeading>Add new Activity</StyledFormHeading>
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
          <label htmlFor="imageUrl"> Upload Image: </label>
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
          <StyledInputs
            id="country"
            name="country"
            type="text"
            placeholder="Please choose a country.."
            maxLength="30"
            defaultValue={activity?.country}
          ></StyledInputs>
          {isUpdateMode ? (
            <StyledButtonDisplay>
              <StyledButtonSubmit type="submit">Save</StyledButtonSubmit>
              <StyledCancelLink href={`/activities/${activity.id}`}>
                Cancel
              </StyledCancelLink>
            </StyledButtonDisplay>
          ) : (
            <StyledButtonDisplay>
              <StyledButtonSubmit type="submit">Submit</StyledButtonSubmit>
            </StyledButtonDisplay>
          )}
        </StyledFormFieldset>
      </form>
    </StyledCard>
  );
}

const StyledFormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 400;
  font-size: 1.2rem;
  margin: var(--media-queries-form-s);
  background-color: var(--light-green);
  box-shadow: var(--box-shadow-layout);
  border-radius: 10px;

  @media (min-width: 768px) {
    margin: var(--media-queries-form-m);
  }

  @media (min-width: 992px) {
    margin: var(--media-queries-form-l);
  }

  @media (min-width: 1200px) {
    margin: var(--media-queries-form-xl);
  }
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

const StyledButtonSubmit = styled.button`
  background-color: var(--coral);
  border-radius: 5px;
  height: 2.2rem;
  font-size: 1.2rem;
  font-family: var(--font-family);
  font-weight: 400;
  width: 150px;
  margin-bottom: 15px;

  &:hover {
    width: 180px;
    transition-duration: 0.5s;
  }
`;

const StyledCancelLink = styled(Link)`
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 1.2rem;
  background-color: var(--coral);
  text-decoration: none;
  color: black;
  font-weight: 400;
  width: 150px;
  margin-bottom: 15px;

  &:hover {
    width: 180px;
    transition-duration: 0.5s;
  }
`;

const StyledButtonDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledFormHeading = styled.h3`
  font-weight: 400;
  font-size: 1.7rem;
`;
