import React, { useState } from 'react';

function EmojiIcon(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      style={{
        border: '1px solid black',
        display: 'inline-block',
        background: selected && '#000',
      }}
      onClick={() => {
        if (!selected) {
          props.handler(props.emoji);
        } else {
          props.remove(props.emoji);
        }
        setSelected(!selected);
      }}
      className={selected ? 'selected' : 'deselected'}
    >
      {props.emoji}
    </div>
  );
}

export default EmojiIcon;
