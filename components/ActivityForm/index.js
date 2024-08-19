import styled from "styled-components";
import { useRouter } from "next/router";
import categories from "@/assets/categories";
import { useState } from "react";
import Link from "next/link";
import { StyledButton } from "../ActivityDetails";
import Image from "next/image";
import UploadImage from "../../assets/upload.svg";

export default function ActivityForm({ activity, onSubmit, isUpdateMode }) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState(
    activity?.categoryIds || []
  );
  const [imagePreview, setImagePreview] = useState(activity?.imageUrl || "");
  // const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  function handleChange(event) {
    const categoryId = event.target.value;
    setSelectedCategoryIds(
      selectedCategoryIds.includes(categoryId)
        ? selectedCategoryIds.filter((id) => id !== categoryId)
        : [...selectedCategoryIds, categoryId]
    );
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  }
  console.log("image", imagePreview);
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);

    formData.append("categoryIds", JSON.stringify(selectedCategoryIds));
    if (activity?.imageUrl) {
      formData.append("currentImageUrl", imageUrl);
    }
    console.log("existing url is", imageUrl);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const responseText = await response.text();
      // console.log("Raw response:", responseText);
      if (!response.ok) {
        console.error("Failed to upload the image");
        return;
      }
      const parsedResponse = JSON.parse(responseText);
      const { url } = parsedResponse;
      //const { url } = await response.json();

      const newActivity = {
        ...activityData,
        imageUrl: imagePreview,
        categoryIds: selectedCategoryIds,
      };

      if (newActivity.categoryIds.length === 0) {
        alert("Please select at least one category.. ");
        return false;
      }
      newActivity.imageUrl = url;
      onSubmit(newActivity);
      isUpdateMode ? router.back() : router.push("/");
    } catch (error) {
      console.error("Error submitting the form:", error);
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
          {" "}
          <UploadImage width={20} height={20} />
          <span>Upload image</span>{" "}
        </label>
        <StyledImageUploadInput
          id="imageUrl"
          name="imageUrl"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          //defaultValue={activity?.imageUrl}
          /* defaultValue={
            isUpdateMode
              ? activity?.imageUrl
              : "https://images.unsplash.com/photo-1648167538185-d957d3caf393?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          } */
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
const ImagePreview = styled.div`
  margin: 10px;
  img {
    border-radius: 8px;
  }
`;
const StyledImageUploadInput = styled(StyledInputs)`
  display: none;
`;
