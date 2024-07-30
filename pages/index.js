import ActivitiesList from "@/components/ActivitiesList";

export default function HomePage({
  activitiesInfo,
  activities,
  onToggleBookmark,
}) {
  return (
    <section>
      <ActivitiesList
        activities={activities}
        activitiesInfo={activitiesInfo}
        onToggleBookmark={onToggleBookmark}
      />
    </section>
  );
}
