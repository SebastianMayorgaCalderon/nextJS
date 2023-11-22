import { useEffect, useState } from "react";
import { getNotes } from "../api/notes/utils";
import Note from "src/components/Note";
import styles from "./Notes.module.css";
import Link from "next/link";
import CreateNote from "src/components/Note/CreateNote";

type Props = {};

const Notes = async (props: Props) => {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes.map((note) => (
          <Link href={`/notes/${note.id}`} key={note.id}>
            <Note note={note} />
          </Link>
        ))}
      </div>
      <CreateNote />
    </div>
  );
};

export default Notes;
