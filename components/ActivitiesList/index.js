import ActivityCardPreview from "../ActivityCardPreview";
import { StyledUl, StyledListItem } from "../StyledList";

export default function ActivitiesList({ activities, onToggleBookmark }) {
  return (
    <StyledUl>
      {activities.map((activity) => (
        <StyledListItem key={activity.id}>
          <ActivityCardPreview
            activity={activity}
            onToggleBookmark={() => onToggleBookmark(activity.id)}
          />
        </StyledListItem>
      ))}
    </StyledUl>
  );
}
