import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ProviderContext = createContext();

const NoteProvider = ({children}) =>{
    const fetchNotes = useCallback(async () => {
        const response = await axios.get("http://localhost:3002/notes");
        setNotes(response.data)
    }, [])

    const [notes, setNotes] = useState([]);
    

    const handleCreateNote = async (note) =>{
        const response = await axios.post("http://localhost:3002/notes", {
            note
        });
        const updateNote = [...notes, response.data];
        setNotes(updateNote);
        console.log(updateNote);
    }

    const handleEditNote = async (newNote, id) =>{
        const response = await axios.put(`http://localhost:3002/notes/${id}`, {
            note:newNote
        });

        const updateNote = notes.map(note =>{
            if(note.id === id){
                return {...notes, ...response.data}
            }
            return note;
        });
        setNotes(updateNote)
    }

    const handleDeleteNote = async (id) =>{
        await axios.delete(`http://localhost:3002/notes/${id}`)
        const updateNote = notes.filter(note =>{
            return note.id !== id
        });
        setNotes(updateNote)
    }
    
    const valueToShare ={
        notes,
        fetchNotes,
        handleCreateNote,
        handleEditNote,
        handleDeleteNote
    }

    return(
        <ProviderContext.Provider value={valueToShare}>
            {children}
        </ProviderContext.Provider>
    )
}

export default ProviderContext;
export {NoteProvider}
