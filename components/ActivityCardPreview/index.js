import Image from "next/image";
import getFilteredCategories from "@/utils/filterCategories";
import Link from "next/link";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";
import { StyledCategoryLi, StyledCateogriesUl, StyledCard } from "../Styles";

export default function ActivityCardPreview({ activity, onToggleBookmark }) {
  const { title, categoryIds, imageUrl, isBookmarked } = activity;

  const filterCategories = getFilteredCategories(categoryIds);
  return (
    <StyledCard>
      <BookmarkButton
        onToggleBookmark={onToggleBookmark}
        isBookmarked={isBookmarked}
      />
      <Link
        aria-label="Click here to go to the activity details"
        href={`activities/${activity.id}`}
      >
        <ImageWrapper>
          <StyledImage src={imageUrl} fill={true} alt={title} />
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCateogriesUl>
          {filterCategories.map((category) => (
            <StyledCategoryLi key={category.id}>
              {category.name}
            </StyledCategoryLi>
          ))}
        </StyledCateogriesUl>
      </InfoWrapper>
    </StyledCard>
  );
}

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

const StyledCardTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

const ImageWrapper = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  height: 230px;
  width: 368px;
`;

const InfoWrapper = styled.div`
  position: absolute;
  top: 230px;
  left: 50px;
  right: 50px;
`;
