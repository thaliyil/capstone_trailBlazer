import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import activities from "@/assets/activities";
import Link from "next/link";

export default function ActivityDetailsPage1() {
  const router = useRouter();

  const { id } = router.query;

  const selectedActivity = activities.find((activity) => activity.id === id);
  if (!selectedActivity) {
    return null;
  }

  return (
    <>
      <h1>TrailBlazer</h1>
      <Link href={"/"}>Go back</Link>
      <ActivityDetails activity={selectedActivity} />
    </>
  );
}
