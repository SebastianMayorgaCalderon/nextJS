import { useEffect, useState } from "react";
import { getNotes } from "../api/notes/utils";
import Note from "src/components/Note";
import styles from "./Notes.module.css";

type Props = {};

const Notes = async (props: Props) => {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
