import ProviderContext from "../context/NoteProvider";
import { useContext, useState } from "react";

const EditNote = ({ note, onClick }) => {
    const [newNote, setNewNote] = useState(note.note);
    const { handleEditNote } = useContext(ProviderContext);

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleClick = () => {
        if (newNote !== "") {
            handleEditNote(newNote, note.id);
            onClick();
        }
    }

    return (
        <form className=" absolute inset-0 w-full border-2 h-screen p-4">
            <div className="cursor-pointer text-right text-2xl font-semibold" onClick={handleClick}>Save</div>
            <textarea className="w-full h-5/6 mt-10 outline-none" onChange={handleNoteChange} value={newNote}></textarea>
        </form>
    )
}

export default EditNote;