import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { uid } from "uid";

export default function Notes({ activityId }) {
  const storageNotesKey = `notes-${activityId}`;
  const [notes, setNotes] = useLocalStorageState(storageNotesKey, {
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
      <StyledNotesHeading>My notes for this activity:</StyledNotesHeading>
      <StyledNotesInput
        type="text"
        placeholder="Add note.."
        onChange={handleNoteChange}
        value={noteInput}
        cols={3}
        rows={10}
      ></StyledNotesInput>
      <StyledNotesSaveButton type="submit" onClick={handleAddNote}>
        Save
      </StyledNotesSaveButton>
      {/* {notes.length > 0 && ( */}
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
      {/* )} */}
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
  margin: 1rem 12rem 0 0;
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
