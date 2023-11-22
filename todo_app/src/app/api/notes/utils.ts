export const getNotes = async () => {
  const res = await fetch('https://nextjs-343c0-default-rtdb.firebaseio.com/notes.json', { cache: "no-store" });
  const data = await res.json();
  const notes = Object.keys(data).map(key => ({
    ...data[key], id: key
  }));
  return notes as any[];
};

export const getNoteById = async (id: string) => {
  const res = await fetch(`https://nextjs-343c0-default-rtdb.firebaseio.com/notes/${id}.json`);
  const data = await res.json();
  return { ...data, id: id } as any
}

export const createNote = async (note: any) => {
  const res = await fetch(`https://nextjs-343c0-default-rtdb.firebaseio.com/notes.json`,
    {
      method: "POST",
      body: JSON.stringify({ ...note, created: new Date().toDateString() })
    });
  return res as any;
}