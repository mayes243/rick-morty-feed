import { Metadata } from "next";
import EpisodeList from "../components/EpisodeList";
import CharacterGrid from "../components/CharacterGrid";

export const metadata: Metadata = {
  title: "Rick morty feed",
  description: "Rick morty feed...",
};

export default function HomePage() {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar for Episode List */}
      <EpisodeList />

      {/* Scrollable Content for Character Grid */}
      <div className="w-full h-screen overflow-y-auto p-2">
        <CharacterGrid />
      </div>
    </div>
  );
}

