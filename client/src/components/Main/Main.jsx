import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import style from './Main.module.css';
import Note from '../Note/Note';
import getNotes, { delNote } from '../../api/notesApi';

function Main() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    localStorage.clear();
    getNotes().then((res) => {
      setNotes(res);
    });
  }, []);

  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ]);
  }
  async function removeNote(noteId) {
    setNotes(notes.filter((el) => el.id !== noteId));
    localStorage.removeItem(`${noteId}`);
    await delNote(noteId);
  }
  return (
    <>
      <div>
        <Button
          className={style.btnAddNote}
          type="primary"
          size="large"
          icon={<PlusCircleOutlined />}
          onClick={() => addNote()}
        >
          Create Note
        </Button>
      </div>
      <div className={style.content}>
        {notes.map((el, index) => (
          <Note key={index} id={el.id} onClose={() => removeNote(el.id)} />
        ))}
      </div>
    </>

  );
}

export default Main;
