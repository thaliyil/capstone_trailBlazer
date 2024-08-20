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
        <StyledImage
          src={imageUrl}
          layout="responsive"
          width={400}
          height={400}
          alt={title}
        />
      </Link>
      <h2>{title}</h2>
      <StyledCateogriesUl>
        {filterCategories.map((category) => (
          <StyledCategoryLi key={category.id}>{category.name}</StyledCategoryLi>
        ))}
      </StyledCateogriesUl>
    </StyledCard>
  );
}

const StyledImage = styled(Image)`
  border-radius: 10px;
`;
