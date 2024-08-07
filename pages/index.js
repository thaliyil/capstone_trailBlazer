import ActivitiesList from "@/components/ActivitiesList";
import { StyledAddLink } from "@/components/StyledList";

export default function HomePage({ activities, onToggleBookmark }) {
  return (
    <section>
      <StyledAddLink href="/createActivity">+ New</StyledAddLink>
      <ActivitiesList
        activities={activities}
        onToggleBookmark={onToggleBookmark}
      />
    </section>
  );
}
