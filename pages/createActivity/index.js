import ActivityForm from "@/components/ActivityForm";
import { StyledAddLink, StyledSection } from "@/components/StyledList";

export default function CreateActivity({ onAddActivity }) {
  return (
    <StyledSection>
      <StyledAddLink href={"/"}>Go back</StyledAddLink>
      <ActivityForm onSubmit={onAddActivity} />
    </StyledSection>
  );
}
