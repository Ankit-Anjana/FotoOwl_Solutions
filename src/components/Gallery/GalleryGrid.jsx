import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../../api/unsplash";
import ImageCard from "./ImageCard";

export default function GalleryGrid({ onActivity }) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });

  if (isLoading) return <p>Loading images...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          onActivity={onActivity}
        />
      ))}
    </div>
  );
}
