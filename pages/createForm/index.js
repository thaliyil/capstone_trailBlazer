import ActivityForm from "@/components/ActivityForm";
import Link from "next/link";
import styled from "styled-components";

const StyledAddLink = styled(Link)`
  background-color: orange;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;

const StyledFieldset = styled.fieldset`
  margin: 20px 30px 50px;
`;

const StyledLegend = styled.legend`
  display: flex;
  flex-direction: row;
`;

export default function CreateForm({ onAddActivity, categoryIds }) {
  return (
    <>
      <StyledAddLink href={"/"}>Go back</StyledAddLink>
      <StyledFieldset>
        <StyledLegend>Add new Activity</StyledLegend>
        <ActivityForm onSubmit={onAddActivity} categoryIds={categoryIds} />
      </StyledFieldset>
    </>
  );
}
