import ActivitiesList from "@/components/ActivitiesList";
import ActivityFilter from "@/components/ActivityFilter";
import { useState } from "react";
import Link from "next/link";
import { StyledSection, StyledMessage } from "@/components/Styles";
import Add from "../assets/svg/add.svg";
import styled from "styled-components";

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
      <Link
        aria-label="Click here to add a new activity"
        href="/createActivity"
      >
        <StyledAdd />{" "}
      </Link>
      <ActivityFilter
        onFilterActivities={handleFilterActivities}
        filter={filter}
      />
      {filteredActivities.length === 0 ? (
        <StyledMessage>
          There are currently no activities matching this filter!
        </StyledMessage>
      ) : (
        <ActivitiesList
          activities={filteredActivities}
          onToggleBookmark={onToggleBookmark}
        />
      )}
    </StyledSection>
  );
}

const StyledAdd = styled(Add)`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;

  &:hover {
    width: 65px;
    height: 65px;
    margin-bottom: 0;
    transition-duration: 0.5s;
  }
`;
