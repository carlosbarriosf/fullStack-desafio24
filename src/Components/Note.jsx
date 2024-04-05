import React, { useState } from 'react'
import Button from './Button'

import { FaRegEdit, FaStar } from "react-icons/fa";
import { MdDeleteOutline, MdSaveAlt } from "react-icons/md";

function Note({note, id, setNotes}) {

    const [noteContent, setNoteContent] = useState(note)
    const [editingNote, setEditingNote] = useState(false)
    const [value, setValue] = useState(noteContent)
    const [isFaovurite, setIsFavourite] = useState(false)

    const confirmChanges = () => {
        setEditingNote(currentValue => !currentValue)
        if(value) {
            setNotes(currentNotes => {
                return currentNotes.map(noteObject => {
                    if(noteObject.id === id) {
                        noteObject.note = value
                    }
                    return {...noteObject}
                })
            })
            setNoteContent(value)
        }
    }

    const deleteNote = (id) => {
        setNotes(currentNotes => currentNotes.filter(noteObject => noteObject.id !== id))
    }

  return (
    <div className='note'>
        {!editingNote ? <p>{noteContent}</p> : 
        <textarea
            value={value}
            onChange={e => setValue(e.target.value)}
            className='noteField'
            maxLength={70}
        />}
        <div className="noteControls">
            {!editingNote ? 
                <Button
                    type='button'
                    label={<FaRegEdit />}
                    action={() => setEditingNote(currentValue => !currentValue)}
                />
                :
                <Button
                    type='button'
                    label={<MdSaveAlt />}
                    action={confirmChanges}
                />
            }
            
            <Button
                type='button'
                label={<MdDeleteOutline />}
                action={() => deleteNote(id)}
            />
        </div>
        <Button
            type='button'
            label={<FaStar />}
            action={() => setIsFavourite(currentValue => !currentValue)}
            className={`setFavourite ${isFaovurite? 'favourite ' : ''}`}
        />
    </div>
  )
}

export default Note