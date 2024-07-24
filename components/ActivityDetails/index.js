
import Image from "next/image";
import { StyledCategory } from "../ActivitiesList/ActivityCardPreview";
import { StyledCateogriesUl } from "../ActivitiesList/ActivityCardPreview";

export default function ActivityDetails({activity}) {
  const { id,title, categories, imageUrl, area, country, description } =
    activity; 

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
   <h3>{area}, {country}</h3>
   <p>{description}</p>
  <StyledCateogriesUl>
    {categories.map((category) => (
      <StyledCategory key={id}>{category}</StyledCategory>
    ))}
  </StyledCateogriesUl>
 
  </>
  );
}
