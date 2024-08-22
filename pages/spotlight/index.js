import ActivityCardPreview from "@/components/ActivityCardPreview";
import { StyledSection, StyledLi, StyledUl } from "@/components/Styles";

export default function Spotlight({ activities, onToggleBookmark }) {
  const randomActivity =
    activities[Math.floor(Math.random() * activities.length)];
  return (
    <StyledSection>
      <StyledUl>
        <StyledLi>
          <ActivityCardPreview
            activity={randomActivity}
            onToggleBookmark={() => onToggleBookmark(randomActivity.id)}
          />
        </StyledLi>
      </StyledUl>
    </StyledSection>
  );
}
