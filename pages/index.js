import ActivitiesList from "@/components/ActivitiesList";
import Link from "next/link";

export default function HomePage({ activities, onToggleBookmark }) {
  return (
    <section>
      <Link href="/createActivity">
        <button type="button"> + New</button>
      </Link>
      <ActivitiesList
        activities={activities}
        onToggleBookmark={onToggleBookmark}
      />
    </section>
  );
}
