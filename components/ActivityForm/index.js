export default function ActivityForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const newActivity = Object.fromEntries(formElements);
    newActivity.categories = formElements.getAll("categories");
    onSubmit(newActivity);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title: </label>
        <input id="title" name="title" type="text" required></input>
        <label htmlFor="description">description: </label>
        <input id="description" name="description" type="text"></input>
        <button type="button">Please select categories</button>
        <ul>
          <li>
            <input type="checkbox" id="water" name="categories" value="Water" />
            <label htmlFor="water">Water</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="nature"
              name="categories"
              value="Nature"
            />
            <label htmlFor="nature">Nature</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="outdoor"
              name="categories"
              value="Outdoor"
            />
            <label htmlFor="outdoor">Outdoor</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="winter"
              name="categories"
              value="Winter"
            />
            <label htmlFor="winter">Winter</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="adventure"
              name="categories"
              value="Adventure"
            />
            <label htmlFor="adventure">Adventure</label>
          </li>
          <li>
            <input type="checkbox" id="sport" name="categories" value="Sport" />
            <label htmlFor="sport">Sport</label>
          </li>
        </ul>
        <label htmlFor="area">area: </label>
        <input id="area" name="area" type="text"></input>
        <label htmlFor="country">country: </label>
        <input id="country" name="country" type="text"></input>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </>
  );
}
