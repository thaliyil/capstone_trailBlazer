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

export default function CreateForm({ onAddActivity }) {
  return (
    <>
      <StyledAddLink href={"/"}>Go back</StyledAddLink>
      <StyledFieldset>
        <legend>Add new Activity</legend>
        <ActivityForm onSubmit={onAddActivity} />
      </StyledFieldset>
    </>
  );
}
