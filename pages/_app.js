import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import initialActivities from "@/assets/activities";
import Layout from "@/components/Layout";
import { uid } from "uid";
import { Quicksand } from "@next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-quicksand",
});

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

  return (
    <Layout>
      <GlobalStyle className={quicksand} />
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
