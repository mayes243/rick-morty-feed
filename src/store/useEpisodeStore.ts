import { create } from "zustand";

interface EpisodeState {
  selectedEpisode: number | null;
  setSelectedEpisode: (id: number | null) => void;
}

export const useEpisodeStore = create<EpisodeState>((set) => ({
  selectedEpisode: null,
  setSelectedEpisode: (id) => set({ selectedEpisode: id }),
}));
