import ProviderContext from "../context/NoteProvider";
import { useContext, useState } from "react";

const EditNote = ({ note, onSubmit }) => {
    const [newNote, setNewNote] = useState(note.note);
    const { handleEditNote } = useContext(ProviderContext);

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (newNote !== "") {
            handleEditNote(newNote, note.id);
        }
    }

    const handleClose = () =>{
        onSubmit();
    }

    return (
        <form className="absolute inset-0 w-full border-2 h-screen p-4 bg-black text-center" onClick={handleClick}>
            <button className="cursor-pointer text-2xl sm:text-4xl font-semibold text-white" onClick={handleClose}>Save</button>
            <textarea className="w-full h-5/6 pt-4 pl-2 outline-none" onChange={handleNoteChange} value={newNote}></textarea>
        </form>
    )
}

export default EditNote;