import { useEffect, useState } from 'react';
import Button from './Components/Button';
import NewNoteForm from './Components/NewNoteForm';
import './styles/styles.css'
import Note from './Components/Note';

function App() {

    const openModal = () => {
      const modal = document.querySelector('[data-modal]')
      modal.showModal();
    }
    const closeModal = () => {
      const modal = document.querySelector('[data-modal]')
      modal.close();
    }

    const [noteId, setNoteId] = useState(() => {
      const storedId = localStorage.getItem('noteId');
      if(!storedId) return 0
      return Number(storedId)
    })

    const [notes, setNotes] = useState(() => {
      const storedNotes = localStorage.getItem('notes');
      if(!storedNotes) return []
      return JSON.parse(storedNotes)
    })

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
      console.log(notes)
    }, [notes])
    
    useEffect(() => {
      localStorage.setItem('noteId', noteId)
    }, [noteId])

    const addNote = (inputValue) => {
      setNoteId(currenValue => currenValue + 1)
      setNotes((currentNotes) => [...currentNotes, {id: noteId, note: inputValue}])
    }

    
    return (
      <div className="App">
        <h1>Notas</h1>
        <Button
          type='button'
          action={openModal}
          label='Añadir Nota'
          className='btn openModalBtn'
        />
        <dialog data-modal className='addNoteModal'>
            <Button
              type='button'
              label='&times;'
              action={closeModal}
              className='closeModalBtn'
            />
            <h2 className='modalTitle'>Nueva nota</h2>
            <NewNoteForm 
              addNote={addNote}
              closeModal= {closeModal} 
            />
        </dialog>
        
        <div className="noteContainer">
          {notes.length === 0 ?
            <div className='note'>
              Todavía no has añadido ninguna nota...
            </div>
            :
            notes.map(note => {
              return (
                <Note 
                  key={note.id}
                  {...note}
                  setNotes={setNotes}
                />
              )
            })
          }
        </div>
      </div>
    );
}

export default App;
