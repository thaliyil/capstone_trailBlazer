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

export default function CreateActivity({ onAddActivity }) {
  return (
    <>
      <StyledAddLink href={"/"}>Go back</StyledAddLink>
      <ActivityForm onSubmit={onAddActivity} />
    </>
  );
}
