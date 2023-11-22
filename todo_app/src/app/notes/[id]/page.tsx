"use server";

import React from "react";
import { getNoteById } from "src/app/api/notes/utils";
import Note from "src/components/Note";

type Props = {};

const getNoteData = async (noteId: string) => {
  const data = await getNoteById(noteId);
  return data as any;
};

const NotePage = async ({ params }: any) => {
  const note = await getNoteData(params.id);
  return (
    <div>
      <h1>notes/{note.id}</h1>
      <Note note={note} />
    </div>
  );
};

export default NotePage;
