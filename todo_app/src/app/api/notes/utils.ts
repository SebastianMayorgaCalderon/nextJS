export const getNotes = async () => {
  const res = await fetch('https://nextjs-343c0-default-rtdb.firebaseio.com/notes.json');
  const data = await res.json();
  const notes = Object.keys(data).map(key=>({
    ...data[key], id: key
  }));
  return notes as any[];
};