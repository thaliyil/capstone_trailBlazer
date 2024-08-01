import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import Link from "next/link";

export default function ActivityDetailsPage({
  activitiesInfo,
  onToggleBookmark,
}) {
  const router = useRouter();

  const { id } = router.query;

  const selectedActivity = activitiesInfo.find(
    (activity) => activity.id === id
  );
  if (!selectedActivity) {
    return null;
  }

  return (
    <>
      <Link href={"/"}>Go back</Link>
      <ActivityDetails
        activity={selectedActivity}
        isBookmarked={
          activitiesInfo.find(
            (activityInfo) => activityInfo.id === selectedActivity.id
          )?.isBookmarked
        }
        onToggleBookmark={() => onToggleBookmark(selectedActivity.id)}
      />
    </>
  );
}
