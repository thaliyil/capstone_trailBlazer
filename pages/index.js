import ActivitiesList from "@/components/ActivitiesList";
import Navigation from "@/components/Navigation";

export default function HomePage({
  activitiesInfo,
  activities,
  onToggleBookmark,
}) {
  return (
    <section>
      <h1>TrailBlazer</h1>
      <ActivitiesList
        activities={activities}
        activitiesInfo={activitiesInfo}
        onToggleBookmark={onToggleBookmark}
      />
      <Navigation />
    </section>
  );
}
