import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import initialActivities from "@/assets/activities";
import Layout from "@/components/Layout";
import { uid } from "uid";
import { useState } from "react";
import DeleteModal from "@/components/DeleteModal";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

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
  function handleDelete(id) {
    setIsOpen(true);
    setIdToDelete(id);
  }
  function handleConfirm() {
    setActivities(activities.filter((activity) => activity.id !== idToDelete));
    router.push("/");
    setIsOpen(false);
  }
  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={handleConfirm}
      />
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          activities={activities}
          onToggleBookmark={handleToggleBookmark}
          onAddActivity={handleAddActivity}
          onDelete={handleDelete}
        />
      </Layout>
    </>
  );
}
