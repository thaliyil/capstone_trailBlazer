import Image from "next/image";
import { StyledCategoryLi, StyledCateogriesUl } from "../Styles";
import getFilteredCategories from "@/utils/filterCategories";
import BookmarkButton from "../BookmarkButton";
import styled from "styled-components";
import Delete from "../../assets/svg/delete.svg";
import Link from "next/link";
import Edit from "../../assets/svg/edit.svg";
import Notes from "../Notes";

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
          <StyledCategoryLi key={category.id}>{category.name}</StyledCategoryLi>
        ))}
      </StyledCateogriesUl>
      <DeleteButton
        aria-label="Click here to delete the activity"
        type="button"
        onClick={onDelete}
      >
        <Delete />
      </DeleteButton>
      <StyledEditLink href={`/activities/${activity.id}/update`}>
        <Edit />
      </StyledEditLink>
      <NotesWrapper>
        <Notes activityId={activity.id} />
      </NotesWrapper>
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
  padding-bottom: 15rem;
`;

const StyledEditLink = styled(Link)`
  background-color: var(--coral);
  border-radius: 5px;
  color: white;
`;

const NotesWrapper = styled.div`
  width: 100vw;
`;
