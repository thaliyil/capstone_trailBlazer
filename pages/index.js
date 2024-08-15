import ActivitiesList from "@/components/ActivitiesList";
import ActivityFilter from "@/components/ActivityFilter";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { StyledSection } from "@/components/StyledList";
import Add from "../assets/svg/add.svg";

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
      <Link href="/createActivity">
        <Add />{" "}
      </Link>
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
