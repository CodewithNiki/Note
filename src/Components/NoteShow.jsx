import { useContext,useState } from "react";
import ProviderContext from "../context/NoteProvider";
import NoteEdit from "./NoteEdit"

const NoteShow = ({note, onClick}) => {
    const {handleDeleteNote} = useContext(ProviderContext);
    const [isOpen, setIsOpen] = useState(false)

    const handleEditClick = () =>{
        setIsOpen(!isOpen);
        // onClick();
    }

    const handleDeleteClick = (note)=>{
        handleDeleteNote(note.id);     
    }

    const noteItems = <div className="border-b m-4 h-10 cursor-pointer flex justify-between" onClick={handleEditClick}>
    <div>{note.note}</div>
    <div onClick={()=> handleDeleteClick(note)}>&times;</div>
    </div>

    const renderEdit = isOpen ? <NoteEdit note={note} onClick={handleEditClick}/> : noteItems;

    return (
        <div>
            {renderEdit}
        </div>
    )
};

export default NoteShow;