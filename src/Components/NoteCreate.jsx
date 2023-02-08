import { useState, useContext } from "react";
import ProviderContext from "../context/NoteProvider";

const CreateNote = ({onClick}) =>{
    const [text, setText] = useState("");
    const {handleCreateNote} = useContext(ProviderContext);

    const handleTextChange = (e) =>{
        setText(e.target.value);
    }

    const handleClick = () =>{
       if(text !== ""){
        handleCreateNote(text);
        setText("")
       }
       return;
    }

    return (       
        <form className="w-full border-2 h-screen p-4">
            <div className="flex justify-between">
                <div className="cursor-pointer" onClick={onClick}>NoteList</div>
                <div className="cursor-pointer" onClick={handleClick}>Done</div>
            </div>
            <textarea className="w-full h-5/6 mt-10 outline-none" onChange={handleTextChange} value={text}></textarea>
        </form>
    )
}

export default CreateNote;