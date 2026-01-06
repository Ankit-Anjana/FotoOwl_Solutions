import { db } from "../../instant/db";

export default function Feed() {
  const { data: feed = [] } = db.useQuery({
    feed: { $: { order: { createdAt: "desc" } } },
  });

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h2 className="font-bold text-lg mb-3">
        🔥 Activity Feed
      </h2>

      {feed.length === 0 && (
        <p className="text-sm text-gray-500">
          No activity yet
        </p>
      )}

      <ul className="space-y-2 text-sm">
        {feed.map((f, i) => (
          <li key={i} className="bg-gray-100 rounded px-3 py-2">
            {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
