import React, { useEffect } from "react";

import CreateNote from "./CreateNote";
import { useBookCtx } from "../../Contexts/BookCtx";

const Notes = ({ bookId, bookName }) => {
  const { getAllNotes, allNotes } = useBookCtx();

  useEffect(() => {
    if (bookId) {
      getAllNotes(bookId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  return (
    <section className="flex flex-col w-72  my-2.5 -ml-2 px-5 py-5 space-y-5 bg-white">
      <h5 className="font-bold flex-wrap w-full">{bookName}</h5>

      <CreateNote bookId={bookId} />

      {allNotes
        ? allNotes.map((note) => (
            <div className="flex p-5 border  hover:bg-slate-100 cursor-pointer">
              <h6 className="font-semibold text-sm">{note.title}</h6>
            </div>
          ))
        : null}
    </section>
  );
};

export default Notes;
