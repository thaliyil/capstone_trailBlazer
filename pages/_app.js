import GlobalStyle from "../styles";
import { useState } from "react";
import activities from "@/assets/activities";

export default function App({ Component, pageProps }) {
  const initialActivities = activities.map((activity) => ({
    ...activity,
    id: activity.id,
    isBookmarked: "false",
  }));

  const [activitiesInfo, setActivitiesInfo] = useState(initialActivities);

  function handleToggleBookmark(id) {
    const activity = activitiesInfo.find(
      (activityInfo) => activityInfo.id === id
    );
    if (activity) {
      setActivitiesInfo(
        activitiesInfo.map((activityInfo) =>
          activityInfo.id === id
            ? { ...activityInfo, isBookmarked: !activityInfo.isBookmarked }
            : activityInfo
        )
      );
    }
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        activities={activities}
        onToggleBookmark={handleToggleBookmark}
        activitiesInfo={activitiesInfo}
      />
    </>
  );
}
