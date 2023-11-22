import Link from "next/link";
import React from "react";
import styles from "src/app/notes/Notes.module.css";

type Props = {
  note: any;
};

const Note = ({ note }: Props) => {
  const { id, title, content, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
};

export default Note;
