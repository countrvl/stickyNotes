import React, { useState, useRef } from 'react';
import { Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from './Note.module.css';

const { TextArea } = Input;

function Note({ id, onClose }) {
  const [value, setValue] = useState('');
  const [allowMove, setAllowMove] = useState(false);
  const noteRef = useRef();

  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  function handleMouseDown(e) {
    setAllowMove(true);
    const dimensions = noteRef.current.getBoundingClientRect();
    setDx(e.clientX - dimensions.x);
    setDy(e.clientY - dimensions.y);
  }
  function handleMouseMove(e) {
    if (allowMove) {
      const x = e.clientX - dx;
      const y = e.clientY - dy;
      noteRef.current.style.left = `${x}px`;
      noteRef.current.style.top = `${y}px`;
    }
  }
  function handleMouseUp(e) {
    setAllowMove(false);
  }
  return (
    <div className={styles.sticky_note} ref={noteRef}>
      <div
        className={styles.sticky_note_header}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {`Note ${id}`}
        <CloseCircleOutlined onClick={onClose} />
      </div>
      <div className={styles.sticky_note_content}>
        <TextArea
          className={styles.sticky_note_textarea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          // autoSize={{
          //   minRows: 3,
          //   maxRows: 6,
          // }}
          allowClear
          bordered={false}
        />
      </div>
    </div>
  );
}

export default Note;
