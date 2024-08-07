import ActivitiesList from "@/components/ActivitiesList";
import { StyledAddLink } from "@/components/StyledList";
import ActivityFilter from "@/components/ActivityFilter";
import { useState } from "react";

export default function HomePage({ activities, onToggleBookmark }) {
  const [filteredList, setFilteredList] = useState(activities);

  function handleToggleFilter(id) {
    const filteredActivities = id
      ? activities.filter((activity) => activity.categoryIds.includes(id))
      : activities;
    setFilteredList(filteredActivities);
  }

  return (
    <section>
      <StyledAddLink href="/createActivity">+ New</StyledAddLink>
      <ActivityFilter onToggleFilter={handleToggleFilter} />
      <ActivitiesList
        activities={filteredList}
        onToggleBookmark={onToggleBookmark}
      />
    </section>
  );
}
