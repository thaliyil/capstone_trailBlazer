import styled from "styled-components";
import { useRouter } from "next/router";
import categories from "@/assets/categories";
import { useState } from "react";
import Link from "next/link";
import { StyledButton } from "../ActivityDetails";
import countries from "@/assets/countries";
import Select from "react-select";
import Image from "next/image";
import UploadImage from "../../assets/upload.svg";

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
  const defaultImageUrl =
    "https://images.unsplash.com/photo-1648167538185-d957d3caf393?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [imagePreview, setImagePreview] = useState(
    activity?.imageUrl || defaultImageUrl
  );

  const [country, setCountry] = useState(
    countriesOptions.find((option) => option.value === activity?.country) ||
      null
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
  function handleCountryChange(selectedCountry) {
    setCountry(selectedCountry);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);

    activityData.imageUrl = imagePreview;
    activityData.categoryIds = selectedCategoryIds;
    activityData.country = country?.value || activity?.country;
    if (selectedCategoryIds.length === 0) {
      alert("Please select at least one category.");

      return false;
    }
    onSubmit(activityData);
    isUpdateMode ? router.back() : router.push("/");
  }

  async function handleUploadImage(file) {
    const formData = new FormData();
    formData.append("imageUrl", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Failed to upload the image");
      return;
    }

    const { url } = await response.json();
    setImagePreview(url);
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      handleUploadImage(file);
    }
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
        <label htmlFor="imageUrl">
          <UploadImage width={20} height={20} />
          <span>Upload image</span>{" "}
        </label>
        <StyledImageUploadInput
          id="imageUrl"
          name="imageUrl"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {imagePreview && (
          <ImagePreview>
            <Image
              src={imagePreview}
              alt="preview of selected Image"
              width={200}
              height={200}
            />
          </ImagePreview>
        )}
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
          required
        ></StyledInputs>
        <label htmlFor="country">Country: </label>
        <StyledSelect
          id="country"
          name="country"
          options={countriesOptions}
          placeholder="Please choose country.."
          onChange={handleCountryChange}
          defaultValue={country}
          required
        />
        {isUpdateMode ? (
          <>
            <Link href={`/activities/${activity.id}`}>Cancel</Link>
            <StyledButtonSubmit type="submit">Save</StyledButtonSubmit>
          </>
        ) : (
          <StyledButtonSubmit type="submit">Submit</StyledButtonSubmit>
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

const StyledButtonSubmit = styled.button`
  background-color: var(--coral);
  border-radius: 5px;
  height: 3rem;
  font-size: 1rem;
`;
const ImagePreview = styled.div`
  margin: 10px;
  img {
    border-radius: 8px;
  }
`;
const StyledImageUploadInput = styled(StyledInputs)`
  display: none;
`;
