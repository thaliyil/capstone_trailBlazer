import ActivityForm from "@/components/ActivityForm";
import { StyledSection } from "@/components/Styles";
import Link from "next/link";
import Back from "../../assets/svg/back.svg";
import styled from "styled-components";

export default function CreateActivity({ onAddActivity }) {
  return (
    <StyledSection>
      <Link aria-label="Go back to all activities" href={"/"}>
        <StyledBack />
      </Link>
      <ActivityForm onSubmit={onAddActivity} />
    </StyledSection>
  );
}

const StyledBack = styled(Back)`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;

  &:hover {
    width: 65px;
    height: 65px;
    margin-bottom: 0;
    transition-duration: 0.5s;
  }
`;
