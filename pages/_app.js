import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import initialActivities from "@/assets/activities";
import Layout from "@/components/Layout";
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

  function handleUpdate(updatedActivity) {
    setActivities((activities) => [...activities, updatedActivity]);
    console.log("new activity", activities);
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
        onUpdate={handleUpdate}
      />
    </Layout>
  );
}
