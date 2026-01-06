import { useState } from "react";

export default function CommentBox({ comments, onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text);
    setText("");
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border rounded px-2 py-1 text-sm"
        />
        <button
          type="submit"
          className="bg-black text-white px-3 rounded text-sm"
        >
          Post
        </button>
      </form>

      <div className="mt-2 space-y-1 text-sm">
        {comments.map((c, i) => (
          <p key={i} className="bg-gray-100 rounded px-2 py-1">
            {c}
          </p>
        ))}
      </div>
    </div>
  );
}
