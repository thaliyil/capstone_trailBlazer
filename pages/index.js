import ActivitiesList from "@/components/ActivitiesList";
import { StyledAddLink } from "@/components/StyledList";
import ActivityFilter from "@/components/ActivityFilter";
import { useState } from "react";

export default function HomePage({ activities, onToggleBookmark }) {
  const [filter, setFilter] = useState("");
  function handleFilterActivities(id) {
    if (id === filter) {
      setFilter("");
    } else {
      setFilter(id);
    }
  }
  const filteredActivities = activities.filter((activity) =>
    filter ? activity.categoryIds.includes(filter) : activities
  );

  return (
    <section>
      <StyledAddLink href="/createActivity">+ New</StyledAddLink>
      <ActivityFilter
        onFilterActivities={handleFilterActivities}
        filter={filter}
      />
      <ActivitiesList
        activities={filteredActivities}
        onToggleBookmark={onToggleBookmark}
      />
    </section>
  );
}
