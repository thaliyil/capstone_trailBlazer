import ActivityCardPreview from "../ActivityCardPreview";
import { StyledUl, StyledListItem } from "../StyledList";

export default function ActivitiesList({
  activitiesInfo,
  activities,
  onToggleBookmark,
}) {
  console.log("from ActivitiesList", activitiesInfo);
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
            onToggleBookmark={() => onToggleBookmark(activity.id)}
          />
        </StyledListItem>
      ))}
    </StyledUl>
  );
}
