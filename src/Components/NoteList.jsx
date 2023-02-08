import { useContext } from "react";
import ProviderContext from "../context/NoteProvider";
import NoteShow from "./NoteShow";

const NoteList = ({onClick}) => {
    const { notes } = useContext(ProviderContext);

    const renderNotes = notes.map(note => {
        return <NoteShow key={note.id} note={note} onClick={onClick} />
    })

    return (
        <div className="w-full h-screen p-5 bg-slate-100">
            <h1 className="text-3xl font-bold font-sans">Notes</h1>
            <div className="border mt-6 rounded-md bg-white border-white">{renderNotes}
            </div>
            < div className="flex justify-center w-full fixed bottom-4 border-t right-4 p-4">
                <div className="relative">{notes.length || ""} Notes</div>
                <div onClick={onClick} className="cursor-pointer absolute right-2">Enter Note</div>
            </div>
        </div>
    )
};

export default NoteList;