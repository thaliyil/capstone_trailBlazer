import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { uid } from "uid";

export default function Notes() {
  const [notes, setNotes] = useLocalStorageState("notes", {
    defaultValue: [],
  });
  const [noteInput, setNoteInput] = useState("");

  function handleAddNote() {
    if (noteInput.trim() !== "") {
      const newNote = { id: uid(), content: noteInput };
      setNotes([...notes, newNote]);
      setNoteInput("");
    }
  }

  function handleDeleteNote(noteToDelete) {
    setNotes(notes.filter((id) => id !== noteToDelete));
  }

  function handleNoteChange(event) {
    setNoteInput(event.target.value);
  }

  return (
    <StyledNotesWrapper>
      <StyledNotesHeading>
        Your personal notes for this activity:
      </StyledNotesHeading>
      <StyledNotesTextarea
        type="text"
        placeholder="Add note.."
        onChange={handleNoteChange}
        value={noteInput}
        cols={3}
        rows={10}
      ></StyledNotesTextarea>
      <StyledNotesSaveButton type="submit" onClick={handleAddNote}>
        Save
      </StyledNotesSaveButton>
      {notes.length > 0 && (
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
      )}
    </StyledNotesWrapper>
  );
}

const StyledNotesWrapper = styled.div`
  height: 100px;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
`;

const StyledNotesHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
`;

const StyledNotesTextarea = styled.textarea`
  height: 30px;
  width: 150px;
  border-radius: 5px;
  position: relative;
`;

const StyledNotesSaveButton = styled.button`
  border-radius: 5px;
  background-color: var(--coral);
  padding: 5px;
  font-size: 1rem;
  position: absolute;
`;

const StyledNotesUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  border: 1px solid black;
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
