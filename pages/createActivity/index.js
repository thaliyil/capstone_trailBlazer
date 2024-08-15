import ActivityForm from "@/components/ActivityForm";
import { StyledSection } from "@/components/StyledList";
import Link from "next/link";
import Back from "../../assets/svg/back.svg";

export default function CreateActivity({ onAddActivity }) {
  return (
    <StyledSection>
      <Link href={"/"}>
        <Back />
      </Link>
      <ActivityForm onSubmit={onAddActivity} />
    </StyledSection>
  );
}
