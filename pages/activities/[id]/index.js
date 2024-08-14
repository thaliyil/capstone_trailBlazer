import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { StyledAddLink } from "@/components/StyledList";
import DeleteModal from "@/components/DeleteModal";
import { useState } from "react";

export default function ActivityDetailsPage({
  activities,
  onToggleBookmark,
  setActivities,
}) {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const router = useRouter();

  const { id } = router.query;

  const selectedActivity = activities.find((activity) => activity.id === id);
  if (!selectedActivity) {
    return null;
  }

  function handleDeleteActivity(id) {
    setShowModal(true);
    setIdToDelete(id);
  }
  function handleConfirm() {
    setActivities(activities.filter((activity) => activity.id !== idToDelete));
    setShowModal(false);
    router.push("/");
  }

  return (
    <>
      <StyledAddLink href={"/"}>Go back</StyledAddLink>
      <ActivityDetails
        activity={selectedActivity}
        isBookmarked={selectedActivity.isBookmarked}
        onToggleBookmark={() => onToggleBookmark(selectedActivity.id)}
        onDelete={() => handleDeleteActivity(selectedActivity.id)}
      />
      <DeleteModal
        showModal={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
