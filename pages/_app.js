import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import activities from "@/assets/activities";
import Layout from "@/components/Layout";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const initialActivities = activities.map((activity) => ({
    ...activity,
    isBookmarked: false,
  }));

  const [activitiesInfo, setActivitiesInfo] = useLocalStorageState(
    "activitiesInfo",
    { defaultValue: initialActivities }
  );

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

  function handleAddActivity(newActivity) {
    setActivitiesInfo((activitiesInfo) => [
      ...activitiesInfo,
      { ...newActivity, id: uid() },
    ]);
    const newAct = newActivity;
  }
  // setActivities((prevActivities) => [...prevActivities, { ...newActivity }]);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        activities={activities}
        onToggleBookmark={handleToggleBookmark}
        activitiesInfo={activitiesInfo}
        onAddActivity={handleAddActivity}
        // activity={newActivity}
      />
    </Layout>
  );
}
