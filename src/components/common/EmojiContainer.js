import React, { useState } from 'react';
import EmojiIcon from './EmojiIcon';

import axios from 'axios';
import emojiUnicode from 'emoji-unicode';

function EmojiContainer(props) {
  let [emojis, setEmojis] = useState([
    '😀',
    '😁',
    '😂',
    '😃',
    '😄',
    '😅',
    '😆',
    '😇',
    '😈',
    '👿',
  ]);
  let [picked, setPicked] = useState({
    emojis: [],
    senderId: props.sender,
    submissionId: props.submissionId,
  });
  let [hasVoted, setHasVoted] = useState(false);

  // converts emoji into JS object that contains meta data for backend to use
  const handleClick = item => {
    let unicode = emojiUnicode(item);
    setPicked({ ...picked, emojis: [...picked.emojis, unicode] });
  };

  const handleRemoveEmoji = item => {
    console.log(emojiUnicode(item));
    const unicode = emojiUnicode(item);
    const updatedEmojiArr = picked.emojis.filter(emoji => emoji !== unicode);

    setPicked({ ...picked, emojis: updatedEmojiArr });
  };

  // submits 'picked' array to the backend
  const handleSubmit = data => {
    axios
      .put(
        'https://jsonblob.com/api/jsonblob/06560742-4ef4-11eb-bace-f1443624f88f',
        picked
      )
      .then(res => {
        console.log(res);
        setHasVoted(true);
      })
      .catch(err => console.log(err));
  };

  // creates an emoji element for every emoji that is available for selection
  const emojisArr = emojis.map(item => {
    // loop through the picked array and check to see if user has already picked emoji

    return (
      <EmojiIcon
        remove={handleRemoveEmoji}
        handler={handleClick}
        emoji={item}
      />
    );
  });

  return (
    <div className="container">
      {emojisArr}
      <button
        disabled={hasVoted}
        onClick={() => {
          handleSubmit(picked);
        }}
      >
        Submit
      </button>
      <button
        onClick={() => {
          console.log(picked);
        }}
      >
        print picked emojis
      </button>
    </div>
  );
}

export default EmojiContainer;
