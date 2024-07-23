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
  margin-bottom: 10px;
`;

export default function ActivityCardPreview({ title, categories, id, img }) {
  return (
    <>
      <h2>{title}</h2>
      <Image
        src={img}
        width={400}
        height={400}
        style={{ width: "auto", height: "auto" }}
        alt={title}
        layout="responsive"
      />
      <h3>Categories:</h3>
      <StyledCateogriesUl>
        {categories.map((category) => (
          <StyledCategory key={id}>{category}</StyledCategory>
        ))}
      </StyledCateogriesUl>
    </>
  );
}
