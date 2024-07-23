export default function ActivityCardPreview({ title, categories, id }) {
  console.log("categories is", categories);
  return (
    <>
      <h2>{title}</h2>
      {/*  {categories[0]}, {categories[1]},{categories[2]} */}
      <h3>categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={id}>{category}</li>
        ))}
      </ul>
    </>
  );
}
