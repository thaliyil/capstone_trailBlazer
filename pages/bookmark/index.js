import {
  StyledUl,
  StyledLi,
  StyledSection,
  StyledMessage,
} from "@/components/Styles";
import ActivityCardPreview from "@/components/ActivityCardPreview";

export default function BookmarkList({ activities, onToggleBookmark }) {
  const filterBookmarks = activities.filter(
    (activity) => activity.isBookmarked === true
  );

  return (
    <StyledSection>
      {filterBookmarks.length === 0 ? (
        <StyledMessage>You have no bookmarks yet!</StyledMessage>
      ) : (
        <StyledUl>
          {filterBookmarks.map((filterBookmark) => (
            <StyledLi key={filterBookmark.id}>
              <ActivityCardPreview
                activity={filterBookmark}
                isBookmarked={filterBookmark.isBookmarked}
                onToggleBookmark={() => onToggleBookmark(filterBookmark.id)}
              />
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </StyledSection>
  );
}
