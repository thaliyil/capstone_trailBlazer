import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { StyledSection } from "@/components/Styles";
import DeleteModal from "@/components/DeleteModal";
import { useState } from "react";
import Back from "../../../assets/svg/back.svg";
import Link from "next/link";
import styled from "styled-components";

export default function ActivityDetailsPage({
  activities,
  onToggleBookmark,
  setActivities,
}) {
  const router = useRouter();

  const { id } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

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
    <StyledSection>
      <Link aria-label="Go back to all activities" href={"/"}>
        <Back />
      </Link>
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
    </StyledSection>
  );
}
