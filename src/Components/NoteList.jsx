import { useContext, useState } from "react";
import ProviderContext from "../context/NoteProvider";
import NoteShow from "./NoteShow";

const NoteList = ({onClick}) => {
    const { notes } = useContext(ProviderContext);
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (e) =>{
        setSearchText(e.target.value)
    }

    const filteredNote = notes.filter(note => {
        return note.note.toLowerCase().includes(searchText.toLowerCase());
    });

    const renderNotes = filteredNote.map(note => {
        return <NoteShow key={note.id} note={note}/>
    });


    return (
        <div className="w-full h-screen p-5 bg-slate-100">
            <div className="w-full sm:flex sm:justify-between">
            <h1 className="text-3xl sm:text-4xl font-bold font-sans mb-4 text-center">Notes</h1>
            <input placeholder="Search Notes" value={searchText} onChange={handleSearchChange} className="p-2 outline-none border rounded-md w-full sm:w-1/2"/>
            </div>
            <div className="border mt-6 rounded-md bg-white border-white">{renderNotes}
            </div>
            < div className="flex justify-center w-full fixed bottom-4 border-t right-4 p-4">
                <div className="relative sm:text-2xl">{notes.length || ""} Notes</div>
                <div onClick={onClick} className="cursor-pointer absolute right-2 sm:text-2xl">Enter Note</div>
            </div>
        </div>
    )
};

export default NoteList;