import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({children})=>{
    const [notes, setNotes]= useState();
    const [loading, setLoading]=useState([true]);

// fetch all notes
const getNotes= async () => {
    setLoading(true);
    try {
        const res = await BACKEND_URL.get("/get-notes")
       
        const sortedData = res.data.sort((a,b)=>b.isPinned-a.isPinned);
        setNotes(sortedData);
        
    } catch (error) {
        console.error("fetching is failed",error);
    } finally{
        setLoading(false);
    }
}

useEffect(()=>{
    getNotes();
},[])

// create a note
const createNote= async (note) => {
    const res = await BACKEND_URL.post("/create-note",note);
    setNotes([res.data , ...notes]);
}
// pinned a note
const togglePinNote= async (id) => {
    const res =await BACKEND_URL.put(`/toggle-pinNote/${id}`);
    setNotes((prevNotes)=>{
        const updateNotes = prevNotes.map((note)=>
            note._id === id ? res.data : note
        );
        return updateNotes.sort((a,b) => b.isPinned - a.isPinned);
        });
    }


// update a note
const updateNote= async (id , updateNote) => {
    const res = await BACKEND_URL.put(`/update-note/${id}`,updateNote);
    setNotes(notes.map((note)=> (note._id===id ? res.data:note)))
}

// delete a note
const deleteNote= async (id) => {
    await BACKEND_URL.delete(`/delete-note/${id}`);
    setNotes(notes.filter((note)=> (note._id !==id)));
}

return (
    <NoteContext.Provider value={{notes,loading,togglePinNote, createNote,updateNote,deleteNote}}>
        {children}
    </NoteContext.Provider>
)
}