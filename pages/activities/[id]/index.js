import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import Link from "next/link";

export default function ActivityDetailsPage({
  activities,
  onToggleBookmark,
  onDelete,
}) {
  const router = useRouter();

  const { id } = router.query;

  const selectedActivity = activities.find((activity) => activity.id === id);
  if (!selectedActivity) {
    return null;
  }

  return (
    <>
      <Link href={"/"}>Go back</Link>
      <ActivityDetails
        activity={selectedActivity}
        isBookmarked={selectedActivity.isBookmarked}
        onToggleBookmark={() => onToggleBookmark(selectedActivity.id)}
        onDelete={() => onDelete(selectedActivity.id)}
      />
    </>
  );
}
