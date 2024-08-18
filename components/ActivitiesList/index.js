import ActivityCardPreview from "../ActivityCardPreview";
import { StyledUl, StyledLi } from "../Styles";

export default function ActivitiesList({ activities, onToggleBookmark }) {
  return (
    <StyledUl>
      {activities.map((activity) => (
        <StyledLi key={activity.id}>
          <ActivityCardPreview
            activity={activity}
            onToggleBookmark={() => onToggleBookmark(activity.id)}
          />
        </StyledLi>
      ))}
    </StyledUl>
  );
}
