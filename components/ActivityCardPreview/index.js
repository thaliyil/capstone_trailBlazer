import Image from "next/image";
import getFilteredCategories from "@/utils/filterCategories";
import Link from "next/link";
import BookmarkButton from "../BookmarkButton";
import { StyledCategory, StyledCateogriesUl, StyledCard } from "../Styles";

export default function ActivityCardPreview({ activity, onToggleBookmark }) {
  const { title, categoryIds, imageUrl, isBookmarked } = activity;

  const filterCategories = getFilteredCategories(categoryIds);
  return (
    <StyledCard>
      <BookmarkButton
        onToggleBookmark={onToggleBookmark}
        isBookmarked={isBookmarked}
      />
      <Link href={`activities/${activity.id}`}>
        <Image
          src={imageUrl}
          layout="responsive"
          width={400}
          height={360}
          alt={title}
          style={imageStyle}
        />
      </Link>
      <h2>{title}</h2>
      <StyledCateogriesUl>
        {filterCategories.map((category) => (
          <StyledCategory key={category.id}>{category.name}</StyledCategory>
        ))}
      </StyledCateogriesUl>
    </StyledCard>
  );
}

const imageStyle = {
  borderRadius: "10px",
};
