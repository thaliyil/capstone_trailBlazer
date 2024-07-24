import Image from "next/image";
import styled from "styled-components";

const StyledCateogriesUl = styled.ul`
  list-style: none;
  padding: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledCategory = styled.li`
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
`;
const StyledImage = styled(Image)`
  width: auto;
  height: auto;
`;
export default function ActivityCardPreview({ activity }) {
  const { id, title, categories, imageUrl } = activity;
  return (
    <>
      <h2>{title}</h2>
      <StyledImage
        src={imageUrl}
        layout="responsive"
        width={400}
        height={360}
        alt={title}
      />

      <StyledCateogriesUl>
        {categories.map((category) => (
          <StyledCategory key={id}>{category}</StyledCategory>
        ))}
      </StyledCateogriesUl>
    </>
  );
}
