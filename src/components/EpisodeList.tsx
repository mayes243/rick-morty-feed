"use client";

import { useEpisodes } from "@/hooks/useEpisodes";
import { useEpisodeStore } from "@/store/useEpisodeStore";


export default function EpisodeList() {
    const { data: episodes, isLoading } = useEpisodes();
    const { selectedEpisode, setSelectedEpisode } = useEpisodeStore();
    

    if (isLoading) return <div className="p-4 text-white">Loading episodes...</div>;

    return (
        <aside className="w-1/4 p-4 bg-gray-800 text-white overflow-y-auto border-r">
            <h2 className="text-lg font-bold mb-4">Episodes</h2>
            <ul>
                {episodes && episodes.map((episode) => (
                    <li
                        key={episode.id}
                        className={`p-2 mb-2 cursor-pointer rounded ${selectedEpisode === episode.id ? "bg-blue-500" : "hover:bg-gray-600"
                            }`}
                        onClick={() => setSelectedEpisode(selectedEpisode === episode.id ? null : episode.id)}
                    >
                        {episode.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
