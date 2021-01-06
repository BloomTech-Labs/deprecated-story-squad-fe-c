import React, { useState } from 'react';

function EmojiIcon(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        // the click event should only fire if the user has not yet provided feedback
        if (!props.hasSentFeedback) {
          // toggles between adding and removing the clicked emoji to the picked array
          if (!selected) {
            props.handler(props.emoji);
          } else {
            props.remove(props.emoji);
          }
          setSelected(!selected);
        }
      }}
      className={selected ? 'selected' : 'deselected'}
    >
      {props.emoji}
    </div>
  );
}

export default EmojiIcon;
