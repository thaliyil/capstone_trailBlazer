import ActivityCardPreview from "../ActivityCardPreview";
import { StyledUl, StyledListItem } from "../StyledList";

export default function ActivitiesList({ activitiesInfo, onToggleBookmark }) {
  return (
    <StyledUl>
      {activitiesInfo.map((activity) => (
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
