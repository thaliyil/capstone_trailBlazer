import ActivitiesList from "@/components/ActivitiesList";
import ActivityFilter from "@/components/ActivityFilter";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { StyledSection } from "@/components/StyledList";

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
    <StyledSection>
      <StyledCreateLink href="/createActivity"> + Add </StyledCreateLink>
      <ActivityFilter
        onFilterActivities={handleFilterActivities}
        filter={filter}
      />
      {filteredActivities.length === 0 ? (
        <p>There are currently no activities matching this filter!</p>
      ) : (
        <ActivitiesList
          activities={filteredActivities}
          onToggleBookmark={onToggleBookmark}
        />
      )}
    </StyledSection>
  );
}

const StyledCreateLink = styled(Link)`
  background-color: var(--coral);

  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
`;
