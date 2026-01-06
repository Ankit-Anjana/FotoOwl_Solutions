import { useState } from "react";

const EMOJIS = ["❤️", "🔥", "😂", "😮", "👍"];

export default function EmojiBar({ onReact }) {
  return (
    <div className="flex gap-2 mt-2">
      {EMOJIS.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onReact(emoji)}
          className="text-xl hover:scale-125 transition"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}
