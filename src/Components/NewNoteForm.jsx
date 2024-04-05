import React, { useState } from 'react'
import Button from './Button';

function NewNoteForm({addNote, closeModal}) {

    const [inputValue, setInputValue] = useState('')

  return (
    <form 
        onSubmit={(e) => {
            e.preventDefault();
            if(inputValue === "") return
            addNote(inputValue) ;
            setInputValue('');
            closeModal();
        }}
        className='newNoteForm'
    >
        <input 
            type="text" 
            name="newNote" 
            id="newNote" 
            placeholder='Nueva nota'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            maxLength={70}
        />
        <Button
            type='submit'
            className='btn'
            label='Añadir'
        />
    </form>
  )
}

export default NewNoteForm