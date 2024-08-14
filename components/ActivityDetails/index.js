import Image from "next/image";
import { StyledCategory, StyledCateogriesUl } from "../StyledList";
import getFilteredCategories from "@/utils/filterCategories";
import BookmarkButton from "../BookmarkButton";
import styled from "styled-components";
import Link from "next/link";

export default function ActivityDetails({
  activity,
  onToggleBookmark,
  isBookmarked,
  onDelete,
}) {
  const { title, categoryIds, imageUrl, area, country, description } = activity;
  const filteredCategories = getFilteredCategories(categoryIds);
  return (
    <>
      <h2>{title}</h2>
      <BookmarkButton
        onToggleBookmark={onToggleBookmark}
        isBookmarked={isBookmarked}
      />

      <Image
        src={imageUrl}
        layout="responsive"
        width={400}
        height={360}
        alt={title}
      />
      <h3>
        {area}, {country}
      </h3>
      <p>{description}</p>
      <StyledCateogriesUl>
        {filteredCategories.map((category) => (
          <StyledCategory key={category.id}>{category.name}</StyledCategory>
        ))}
      </StyledCateogriesUl>
      <StyledButton type="button" onClick={onDelete}>
        Delete
      </StyledButton>
      <Link href={`/activities/${activity.id}/update`}>Update</Link>
    </>
  );
}

export const StyledButton = styled.button`
  padding: 10px;
  background-color: orange;
  border-radius: 5px;
  margin-bottom: 50px;
  width: 10rem;
`;
