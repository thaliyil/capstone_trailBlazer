import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";

export default function UpdateForm({ activities, onUpdate }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedActivity = activities.find((activity) => activity.id === id);
  if (!selectedActivity) {
    return null;
  }
  console.log("hello", selectedActivity);

  return (
    <ActivityForm
      activity={selectedActivity}
      isUpdateMode
      onUpdate={onUpdate}
    />
  );
}
