import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { StyledSection } from "@/components/Styles";
import Link from "next/link";
import styled from "styled-components";
import Back from "../../../assets/svg/back.svg";

export default function UpdatePage({ activities, setActivities }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedActivity = activities.find((activity) => activity.id === id);
  if (!selectedActivity) {
    return null;
  }
  function handleUpdateActivity(updatedActivity) {
    setActivities(
      activities.map((activity) =>
        activity.id === selectedActivity.id
          ? { id: selectedActivity.id, ...updatedActivity }
          : activity
      )
    );
    toast.success("Activity is updated successfully!", { delay: 9000 });
  }

  return (
    <StyledSection>
      <Link aria-label="Go back to all activities" href={"/"}>
        <StyledBack />
      </Link>
      <ActivityForm
        activity={selectedActivity}
        isUpdateMode
        onSubmit={handleUpdateActivity}
      />
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
