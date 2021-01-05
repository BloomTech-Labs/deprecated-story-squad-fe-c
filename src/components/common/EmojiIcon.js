import React from 'react';

function EmojiIcon(props) {
  return (
    <div onClick={() => props.handler(props.emoji)} className="item">
      {props.emoji}
    </div>
  );
}

export default EmojiIcon;
