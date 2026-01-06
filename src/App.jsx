import { useState } from "react";
import GalleryGrid from "./components/Gallery/GalleryGrid";
import Feed from "./components/Feed/Feed";

export default function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (text) => {
    setActivities((prev) => [text, ...prev]);
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-3/4 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">
          📸 Realtime Gallery
        </h1>

        <GalleryGrid onActivity={addActivity} />
      </div>

      <div className="w-1/4 border-l bg-white">
        <Feed activities={activities} />
      </div>
    </div>
  );
}
