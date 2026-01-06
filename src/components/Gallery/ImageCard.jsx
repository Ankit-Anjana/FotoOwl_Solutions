import { useState } from "react";
import EmojiBar from "../Emoji/EmojiBar";
import CommentBox from "../Comments/CommentBox";

export default function ImageCard({ image }) {
  const [reactions, setReactions] = useState([]);
  const [comments, setComments] = useState([]);

  const reactEmoji = (emoji) => {
    setReactions((prev) => [...prev, { emoji, count: 1 }]);
  };

  const addComment = (text) => {
    setComments((prev) => [...prev, text]);
  };

  return (
    <div className="bg-white rounded shadow p-2">
      <img
        src={image.urls.small}
        className="w-full h-48 object-cover rounded"
      />

      <EmojiBar onReact={reactEmoji} />

      <div className="flex gap-2 mt-1 text-sm">
        {reactions.map((r, i) => (
          <span key={i}>
            {r.emoji} {r.count}
          </span>
        ))}
      </div>

      <CommentBox comments={comments} onAdd={addComment} />
    </div>
  );
}
