import Image from "next/image";
import getFilteredCategories from "@/utils/filterCategories";
import Link from "next/link";
import BookmarkButton from "../BookmarkButton";
import { StyledCategory, StyledCateogriesUl } from "../StyledList";

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
        <Image
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
