import React, { useState } from 'react';
import EmojiIcon from './EmojiIcon';

import axios from 'axios';

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
  let [picked, setPicked] = useState([]);

  // converts emoji into JS object that contains meta data for backend to use
  const handleClick = item => {
    let emojiMeta = {
      value: item,
      senderId: props.sender,
      submissionId: props.submissionId,
    };
    setPicked([...picked, emojiMeta]);
  };

  // submits 'picked' array to the backend
  const handleSubmit = data => {
    // add unicode converstion for each selected emoji
    axios
      .put(
        'https://jsonblob.com/api/jsonblob/06560742-4ef4-11eb-bace-f1443624f88f',
        picked
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // creates an emoji element for every emoji that is available for selection
  const emojisArr = emojis.map(item => {
    // loop through the picked array and check to see if user has already picked emoji

    return <EmojiIcon handler={handleClick} emoji={item} />;
  });

  return (
    <div className="container">
      {emojisArr}
      <button
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
