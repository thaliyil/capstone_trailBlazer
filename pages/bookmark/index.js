import { StyledUl, StyledListItem } from "@/components/StyledList";
import ActivityCardPreview from "@/components/ActivityCardPreview";

export default function BookmarkList({ activities, onToggleBookmark }) {
  const filterBookmarks = activities.filter(
    (activity) => activity.isBookmarked === true
  );

  return (
    <>
      {filterBookmarks.length === 0 ? (
        <p>You have no bookmarks yet</p>
      ) : (
        <StyledUl>
          {filterBookmarks.map((filterBookmark) => (
            <StyledListItem key={filterBookmark.id}>
              <ActivityCardPreview
                activity={filterBookmark}
                isBookmarked={filterBookmark.isBookmarked}
                onToggleBookmark={() => onToggleBookmark(filterBookmark.id)}
              />
            </StyledListItem>
          ))}
        </StyledUl>
      )}
    </>
  );
}
