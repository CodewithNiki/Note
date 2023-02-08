import NoteCreate from "./Components/NoteCreate";
import NoteList from "./Components/NoteList";
import { useState, useContext, useEffect } from "react";
import ProviderContext from "./context/NoteProvider";

function App() {
  const {fetchNotes} = useContext(ProviderContext);

  useEffect(() =>{
    fetchNotes();
  }, [])

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