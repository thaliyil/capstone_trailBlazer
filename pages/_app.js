import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import initialActivities from "@/assets/activities";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });

  function handleToggleBookmark(id) {
    const activity = activities.find((activity) => activity.id === id);
    if (activity) {
      setActivities(
        activities.map((activity) =>
          activity.id === id
            ? { ...activity, isBookmarked: !activity.isBookmarked }
            : activity
        )
      );
    }
  }

  function handleAddActivity(newActivity) {
    setActivities((activities) => [
      { id: uid(), isBookmarked: false, ...newActivity },
      ...activities,
    ]);
  }

  function handleUpdateActivity(updatedActivity) {
    setActivities(
      activities.map((activity) =>
        activity.id === updatedActivity.id ? updatedActivity : activity
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        activities={activities}
        onToggleBookmark={handleToggleBookmark}
        onAddActivity={handleAddActivity}
        setActivities={setActivities}
        onUpdateActivity={handleUpdateActivity}
      />
    </Layout>
  );
}
