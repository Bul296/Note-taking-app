import Note from "../models/note.model.js"

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(404).json({ message: "title and content are required" })
        }
        const newNote = new Note({ title, content })
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ isPinned:-1,createdAt: -1 })
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const togglePinNote= async (req, res) => {
    try{
        const pinnedNote= await Note.findById(req.params.id);
        if (!pinnedNote){
            return res.status(404).json({message: "note is note pin"})
        }
        pinnedNote.isPinned =! pinnedNote.isPinned;
        await pinnedNote.save();
        res.status(201).json(pinnedNote)
    } catch (error){
    res.status(500).json({ message: error.message })
    }
    }

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatednote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true })
        if (!updatednote) {
          return  res.status(404).json({ message: "note no updated" })
        }
        res.status(200).json(updatednote)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteNote = async (req, res) => {
    
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) {
            return res.status(404).json({ message: "note delete notes" })
        }
        return res.status(200).json({ message: "sucessfully deleted note" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}