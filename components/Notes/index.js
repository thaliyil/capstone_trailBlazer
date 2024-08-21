export default function Notes() {
  function handleAddNote() {}

  function handleDeleteNote() {}

  return (
    <div>
      <h4>Your personal notes for this activity:</h4>
      <input type="text" placeholder="Add note.."></input>
      <button type="submit" onClick={handleAddNote}>
        Save
      </button>
      <button type="button" onClick={handleDeleteNote}>
        X
      </button>
    </div>
  );
}
