import { useState } from "react";
import styled from "styled-components";

export default function Notes({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  function handleAddNote() {
    if (newNote.trim() === "") return;
    setNotes([...notes, newNote]);
    setNewNote("");
  }

  function handleDeleteNote(index) {
    setNotes(notes.filter((_, i) => i !== index));
  }

  function handleEditNote(index, updatedNote) {
    const updatedNotes = notes.map((note, i) =>
      i === index ? updatedNote : note
    );
    setNotes(updatedNotes);
  }

  return (
    <NotesContainer>
      <h3>Notes</h3>
      <ul>
        {notes.map((note, index) => (
          <NoteItem key={index}>
            <NoteContent
              value={note}
              onChange={(e) => handleEditNote(index, e.target.value)}
            />
            <DeleteButton onClick={() => handleDeleteNote(index)}>
              Delete
            </DeleteButton>
          </NoteItem>
        ))}
      </ul>
      <AddNoteContainer>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a note..."
        />
        <AddButton onClick={handleAddNote}>Add</AddButton>
      </AddNoteContainer>
    </NotesContainer>
  );
}

const NotesContainer = styled.div`
  margin-top: 20px;
`;

const NoteItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NoteContent = styled.input`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  background-color: var(--coral);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const AddNoteContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const AddButton = styled.button`
  background-color: var(--coral);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;
