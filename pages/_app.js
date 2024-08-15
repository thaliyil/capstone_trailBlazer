import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import initialActivities from "@/assets/activities";
import { uid } from "uid";
import toast from "react-hot-toast";

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
    toast.success("Activity is added successfully!", { delay: 9000 });
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
      />
    </Layout>
  );
}
