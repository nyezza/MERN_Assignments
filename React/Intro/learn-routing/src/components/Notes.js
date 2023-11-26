import { Outlet, useNavigate } from "react-router-dom";
import notes from "./AllNotes";
function Notes() {
  const navigate = useNavigate();
  return (
    <div>
      <Outlet />
      <div className="notes-list">
        {notes.map((note) => {
          return (
            <div
              className="note"
              key={note.id}
              onClick={() => {
                navigate("/notes/" + note.id);
              }}
            >
              <h2>{note.title}</h2>
              <p>{note.body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default Notes;