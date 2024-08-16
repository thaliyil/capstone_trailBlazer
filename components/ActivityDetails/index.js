import Image from "next/image";
import { StyledCategory, StyledCateogriesUl } from "../Styles";
import getFilteredCategories from "@/utils/filterCategories";
import BookmarkButton from "../BookmarkButton";
import styled from "styled-components";
import Delete from "../../assets/svg/delete.svg";

export default function ActivityDetails({
  activity,
  onToggleBookmark,
  isBookmarked,
  onDelete,
}) {
  const { title, categoryIds, imageUrl, area, country, description } = activity;
  const filteredCategories = getFilteredCategories(categoryIds);
  return (
    <StyledCardDetails>
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
      <h2>{title}</h2>
      <h3>
        {area}, {country}
      </h3>
      <p>{description}</p>
      <StyledCateogriesUl>
        {filteredCategories.map((category) => (
          <StyledCategory key={category.id}>{category.name}</StyledCategory>
        ))}
      </StyledCateogriesUl>
      <DeleteButton type="button" onClick={onDelete}>
        <Delete />
      </DeleteButton>
    </StyledCardDetails>
  );
}

const DeleteButton = styled.button`
  margin-bottom: 50px;
  background-color: var(--coral);
  border-radius: 5px;
  color: white;
`;

const StyledCardDetails = styled.div`
  position: relative;
  color: white;
  padding-bottom: 10px;
`;
