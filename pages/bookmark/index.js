import { StyledUl } from "@/components/ActivitiesList";
import { StyledListItem } from "@/components/ActivitiesList";
import ActivityCardPreview from "@/components/ActivityCardPreview";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function BookmarkList({ activitiesInfo }) {
  const filterBookmarks = activitiesInfo.filter(
    (activityInfo) => activityInfo.isBookmarked === true
  );

  return (
    <>
      <h1>TrailBlazer</h1>
      {filterBookmarks.length === 0 && (
        <>
          <p>You have no bookmarks yet</p>
          <Link href="/">Go explore all our Activities!</Link>
        </>
      )}
      <StyledUl>
        {filterBookmarks.map((filterBookmark) => (
          <StyledListItem key={filterBookmark.id}>
            <ActivityCardPreview
              activity={filterBookmark}
              isBookmarked={filterBookmark.isBookmarked}
            />
          </StyledListItem>
        ))}
      </StyledUl>
      <Navigation />
    </>
  );
}
