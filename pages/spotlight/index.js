import ActivityCardPreview from "@/components/ActivityCardPreview";

export default function Spotlight({ activities, onToggleBookmark }) {
  const randomActivity =
    activities[Math.floor(Math.random() * activities.length)];
  return (
    <ActivityCardPreview
      activity={randomActivity}
      onToggleBookmark={() => onToggleBookmark(randomActivity.id)}
    />
  );
}
