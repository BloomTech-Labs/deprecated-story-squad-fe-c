import React, { useState } from 'react';

function EmojiIcon(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
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
