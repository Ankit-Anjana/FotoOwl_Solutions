import EmojiBar from "../Emoji/EmojiBar";
import CommentBox from "../Comments/CommentBox";

export default function ImageModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-[500px]">
        <button
          onClick={onClose}
          className="text-red-500 mb-2"
        >
          Close
        </button>

        <img
          src={image.urls.small}
          className="rounded mb-3"
        />

        <EmojiBar imageId={image.id} />
        <CommentBox imageId={image.id} />
      </div>
    </div>
  );
}
