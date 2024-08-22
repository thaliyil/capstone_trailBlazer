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
      <StyledSectionHome>
        <StyledHeadingHome>
          Welcome to TRAILBLAZER - Your Ultimate Adventure Companion
        </StyledHeadingHome>
        <p>
          Embark on your next great adventure with TRAILBLAZER, the app designed
          for outdoor enthusiasts who crave exploration and discovery. <br />
          <hr />
          There is a list of activities to choose from, or you can create a new
          activity here:
        </p>
        <Link
          aria-label="Click here to add a new activity"
          href="/createActivity"
        >
          <StyledAdd />
        </Link>
      </StyledSectionHome>
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
  width: 40px;
  height: 40px;

  &:hover {
    width: 65px;
    height: 65px;
    margin-bottom: 0;
    transition-duration: 0.5s;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledHeadingHome = styled.h2`
  color: black;
  font-weight: 400;
  text-align: center;
  padding-left: 20px;
  font-size: 1.5rem;
`;

const StyledSectionHome = styled.section`
  background-color: var(--light-green);
  opacity: 0.5;
  height: auto;
  padding: 15px;
  margin-bottom: 20px;
`;
