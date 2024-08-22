import Image from "next/image";
import { StyledCategoryLi, StyledCateogriesUl } from "../Styles";
import getFilteredCategories from "@/utils/filterCategories";
import BookmarkButton from "../BookmarkButton";
import styled from "styled-components";
import Delete from "../../assets/svg/delete.svg";
import Link from "next/link";
import Edit from "../../assets/svg/edit.svg";

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

      <StyledImg
        src={imageUrl}
        layout="responsive"
        width={400}
        height={360}
        alt={title}
      />
      <StyledDetailsTitle>{title}</StyledDetailsTitle>
      <StyledDetailsSubtitle>
        {area}, {country}
      </StyledDetailsSubtitle>
      <StyledDetailsDescription>{description}</StyledDetailsDescription>
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
    </StyledCardDetails>
  );
}

const DeleteButton = styled.button`
  margin-bottom: 50px;
  margin-right: 5px;
  background-color: var(--coral);
  border-radius: 5px;
`;

const StyledCardDetails = styled.div`
  position: relative;
  color: white;
  padding-bottom: 10px;
  margin: 0 40px;
  max-width: 700px;
  font-family: var(--font-family);
  font-weight: 400;

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

const StyledEditLink = styled(Link)`
  margin-bottom: 50px;
  background-color: var(--coral);
  border-radius: 5px;
  border: 1.5px solid black;
  padding: 25px 5px 2px;
  margin-left: 10px;
`;

const StyledImg = styled(Image)`
  border-radius: 20px;
  margin-top: 15px;
`;

const StyledDetailsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const StyledDetailsSubtitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 50px;
`;

const StyledDetailsDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2;
`;
