import Image from "next/image";
import { StyledCategory } from "../ActivityCardPreview";
import { StyledCateogriesUl } from "../ActivityCardPreview";
import getFilteredCategories from "@/utils/filterCategories";

export default function ActivityDetails({ activity }) {
  const { title, categoryIds, imageUrl, area, country, description } = activity;
  const filteredCategories = getFilteredCategories(categoryIds);
  return (
    <>
      <h2>{title}</h2>
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
    </>
  );
}
