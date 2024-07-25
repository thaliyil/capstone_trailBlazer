import ActivityCardPreview from "../ActivityCardPreview";
import activities from "../../assets/activities";
import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  border: 1px solid black;
  margin: 20px;
`;

export default function ActivitiesList() {
  return (
    <StyledUl>
      {activities.map((activity) => (
        <StyledListItem key={activity.id}>
          <ActivityCardPreview activity={activity} />
        </StyledListItem>
      ))}
    </StyledUl>
  );
}
