import Image from "next/image";
import styled from "styled-components";
import getFilteredCategories from "@/utils/filterCategories";
import Link from "next/link";
import BookmarkButton from "../BookmarkButton";
import { StyledCategory, StyledCateogriesUl } from "../StyledList";
import categories from "@/assets/categories";

const StyledImage = styled(Image)`
  width: auto;
  height: auto;
`;

export default function ActivityCardPreview({
  activity,
  isBookmarked,
  onToggleBookmark,
}) {
  const { title, categoryIds, imageUrl } = activity;

  function getFilteredCategories(categoryIds) {
    const filteredCategories = categories.filter((category) =>
      categoryIds.includes(category.id)
    );
    return filteredCategories;
  }
  const filterCategories = getFilteredCategories(categoryIds);
  return (
    <>
      <h2>{title}</h2>
      <BookmarkButton
        isBookmarked={isBookmarked}
        onToggleBookmark={onToggleBookmark}
      />
      <Link href={`activities/${activity.id}`}>
        <StyledImage
          src={imageUrl}
          layout="responsive"
          width={400}
          height={360}
          alt={title}
        />
      </Link>

      <StyledCateogriesUl>
        {filterCategories.map((category) => (
          <StyledCategory key={category.id}>{category.name}</StyledCategory>
        ))}
      </StyledCateogriesUl>
    </>
  );
}
