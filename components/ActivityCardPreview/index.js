import Image from "next/image";
import styled from "styled-components";
import getFilteredCategories from "@/utils/filterCategories";
import Link from "next/link";
import BookmarkButton from "../BookmarkButton";

export const StyledCateogriesUl = styled.ul`
  list-style: none;
  padding: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StyledCategory = styled.li`
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
`;

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
