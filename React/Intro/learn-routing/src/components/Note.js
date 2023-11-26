import React from 'react'
import { useParams } from "react-router-dom";
import notes from "./AllNotes";

export function Note() {
  const params = useParams();
  const note = notes.find((note) => note.id == params.id);
  return (
    <div className="note-container">
      <div className="note-content">
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </div>
    </div>
  );
}

export default Note