import ActivityForm from "@/components/ActivityForm";
import { StyledSection } from "@/components/Styles";
import Link from "next/link";
import Back from "../../assets/svg/back.svg";

export default function CreateActivity({ onAddActivity }) {
  return (
    <StyledSection>
      <Link aria-label="Go back to all activities" href={"/"}>
        <Back />
      </Link>
      <ActivityForm onSubmit={onAddActivity} />
    </StyledSection>
  );
}
