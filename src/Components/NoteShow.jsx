import { useContext,useState } from "react";
import ProviderContext from "../context/NoteProvider";
import NoteEdit from "./NoteEdit"

const NoteShow = ({note}) => {
    const {handleDeleteNote} = useContext(ProviderContext);
    const [isOpen, setIsOpen] = useState(false)

    const handleEditClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleDeleteClick = (note)=>{
        handleDeleteNote(note.id);     
    }
    
    const noteItems = <div className="border-b m-4 h-10 cursor-pointer flex justify-between sm:text-2xl" onClick={handleEditClick}>
    <div>{note.note}</div>
    <div onClick={()=> handleDeleteClick(note)}>&times;</div>
    </div>

    const renderEdit = isOpen ? <NoteEdit note={note} onSubmit={handleEditClick}/> : noteItems;

    return (
        <div>
            {renderEdit}
        </div>
    )
};

export default NoteShow;