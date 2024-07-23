import ActivityCardPreview from "./AcivityCardPreview";
import activities from "../../assets/activities";
export default function ActivitiesList() {
  return (
    <>
      <h1>Activity List</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <ActivityCardPreview
              title={activity.title}
              categories={activity.categories}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
