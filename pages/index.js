import ActivitiesList from "@/components/ActivitiesList";
import Link from "next/link";

export default function HomePage({
  activitiesInfo,
  activities,
  onToggleBookmark,
}) {
  return (
    <section>
      <Link href="/createForm">
        <button type="button"> + New</button>
      </Link>
      <ActivitiesList
        activities={activities}
        activitiesInfo={activitiesInfo}
        onToggleBookmark={onToggleBookmark}
      />
    </section>
  );
}
