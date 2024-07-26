import ActivityCardPreview from "../ActivityCardPreview";
import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  border: 1px solid black;
  margin: 20px;
`;

export default function ActivitiesList({
  activitiesInfo,
  activities,
  onToggleBookmark,
}) {
  return (
    <StyledUl>
      {activities.map((activity) => (
        <StyledListItem key={activity.id}>
          <ActivityCardPreview
            activity={activity}
            isBookmarked={
              activitiesInfo?.find(
                (activityInfo) => activityInfo.id === activity.id
              )?.isBookmarked
            }
            activitiesInfo={activitiesInfo}
            onToggleBookmark={() => onToggleBookmark(activity.id)}
          />
        </StyledListItem>
      ))}
    </StyledUl>
  );
}
