import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { uid } from "uid";

export default function Notes({ activityId }) {
  const storageNotesKey = `notes-${activityId}`;
  const [notes, setNotes] = useLocalStorageState(storageNotesKey, {
    defaultValue: [],
  });

  function handleSubmitNote(event) {
    event.preventDefault();

    const noteInput = event.target.note.value;

    if (noteInput.trim() !== "") {
      const newNote = { id: uid(), content: noteInput };
      setNotes([...notes, newNote]);
      event.target.reset();
    }
  }

  function handleDeleteNote(noteToDelete) {
    setNotes(notes.filter((id) => id !== noteToDelete));
  }

  return (
    <StyledNotesWrapper>
      <StyledFormNotes onSubmit={handleSubmitNote}>
        <StyledNotesHeading>
          <StyledNotesHeading>My notes for this Activity:</StyledNotesHeading>
          <StyledNotesInput
            name="note"
            type="text"
            placeholder="Add note.."
            aria-label="Add a note for this activity"
          ></StyledNotesInput>
          <StyledNotesSaveButton type="submit">Save</StyledNotesSaveButton>{" "}
          <StyledNotesUl>
            {notes.map((note) => (
              <StyledNotesLi key={note.id}>
                {note.content}
                <StyledNotesDeleteButton
                  type="button"
                  onClick={() => handleDeleteNote(note)}
                >
                  X
                </StyledNotesDeleteButton>
              </StyledNotesLi>
            ))}
          </StyledNotesUl>
        </StyledNotesHeading>
      </StyledFormNotes>
    </StyledNotesWrapper>
  );
}

const StyledNotesWrapper = styled.div`
  height: 100px;
`;

const StyledNotesHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
`;

const StyledNotesInput = styled.input`
  height: 30px;
  width: 150px;
  border-radius: 5px;
`;

const StyledNotesSaveButton = styled.button`
  border-radius: 5px;
  background-color: var(--coral);
  padding: 5px;
  font-size: 1rem;
  margin: 5px;
`;

const StyledNotesUl = styled.ul`
  margin: 15px 100px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledNotesLi = styled.li`
  line-height: 2;
  font-size: 1.1rem;
`;

const StyledNotesDeleteButton = styled.button`
  background-color: var(--dijon);
  border-radius: 5px;
  margin: 5px;
`;

const StyledFormNotes = styled.form`
  padding: 10px;
  color: black;
  border-radius: 10px;
  background-color: var(--light-green);
  margin-bottom: 30px;

  @media (min-width: 992px) {
    margin: 0;
    width: 500px;
    height: 600px;
  }
`;
