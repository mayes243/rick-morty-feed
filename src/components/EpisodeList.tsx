"use client";

import { useEpisodes } from "@/hooks/useEpisodes";
import { useEpisodeStore } from "@/store/useEpisodeStore";


export default function EpisodeList() {
  const { data: episodes, isLoading } = useEpisodes();
  const { selectedEpisode, setSelectedEpisode } = useEpisodeStore();

  return (
    <aside className="w-1/4 p-4 bg-gray-800 text-white overflow-y-auto border-r">
      <h2 className="text-lg font-bold mb-4">Episodes</h2>
      <ul>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="p-2 mb-2 bg-gray-700 rounded animate-pulse">
                <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
              </li>
            ))
          : episodes && episodes.length > 0
          ? episodes.map((episode) => (
              <li
                key={episode.id}
                className={`p-2 mb-2 cursor-pointer rounded ${
                  selectedEpisode === episode.id ? "bg-blue-500" : "hover:bg-gray-600"
                }`}
                onClick={() =>
                  setSelectedEpisode(selectedEpisode === episode.id ? null : episode.id)
                }
              >
                {episode.name}
              </li>
            ))
          : !isLoading && <li className="p-2 text-gray-400">No episodes available.</li>}
      </ul>
    </aside>
  );
}
