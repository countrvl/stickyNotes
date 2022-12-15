import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import style from './Main.module.css';
import Note from '../Note/Note';

function Main() {
  const [notes, setNotes] = useState([]);
  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ]);
  }
  function removeNote(noteId) {
    setNotes(notes.filter((el) => el.id !== noteId));
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
          <Note key={index} id={index + 1} onClose={() => removeNote(el.id)} />
        ))}
      </div>
    </>

  );
}

export default Main;
