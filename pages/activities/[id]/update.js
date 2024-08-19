import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { StyledSection } from "@/components/Styles";
import Link from "next/link";
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
        <Back />
      </Link>
      <ActivityForm
        activity={selectedActivity}
        isUpdateMode
        onSubmit={handleUpdateActivity}
      />
    </StyledSection>
  );
}
