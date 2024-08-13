import ActivityForm from "@/components/ActivityForm";
import { StyledAddLink } from "@/components/StyledList";

export default function CreateActivity({ onAddActivity }) {
  return (
    <>
      <StyledAddLink href={"/"}>Go back</StyledAddLink>
      <ActivityForm onAddActivity={onAddActivity} />
    </>
  );
}
