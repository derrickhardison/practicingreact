import React from "react";
import EmojiDefinition from "./EmojiDefinition";
import emojipedia from "../emojipedia";

function createEmojiData(emoji) {
  return (
    <EmojiDefinition
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmojiData)}</dl>
    </div>
  );
}

export default App;
