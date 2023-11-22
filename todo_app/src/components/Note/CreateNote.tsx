"use client";

import { useState } from "react";
import { POST } from "../../app/api/notes/route";
import { useRouter } from "next/navigation";

type Props = {};

const CreateNote = (props: Props) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const create = async (e) => {
    e.preventDefault();
    const result = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    router.refresh();
  };
  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Note</button>
    </form>
  );
};

export default CreateNote;
