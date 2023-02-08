import NoteCreate from "./components/NoteCreate";
import NoteList from "./components/NoteList";
import { useState, useContext, useEffect } from "react";
import ProviderContext from "./context/NoteProvider";

function App() {
  const {fetchNotes} = useContext(ProviderContext);

  useEffect(() =>{
    fetchNotes();
  }, [fetchNotes])

  const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = (e) => {
        setIsOpen(true)
    }

    const handleClickClose = (e) =>{
      setIsOpen(false)
    }

    return isOpen ? <NoteCreate onClick={handleClickClose}/>
                  : <NoteList onClick={handleClickOpen}/>
}

export default App;