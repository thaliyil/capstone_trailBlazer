import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";

export default function UpdatePage({ activities, onUpdateActivity }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedActivity = activities.find((activity) => activity.id === id);
  if (!selectedActivity) {
    return null;
  }

  return (
    <ActivityForm
      activity={selectedActivity}
      isUpdateMode
      onUpdateActivity={onUpdateActivity}
    />
  );
}
