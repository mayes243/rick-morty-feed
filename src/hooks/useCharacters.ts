import { useEpisodeStore } from "@/store/useEpisodeStore";
import { fetchCharacters } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useCharacters = () => {
  const selectedEpisode = useEpisodeStore((state) => state.selectedEpisode);
  return useQuery({
    queryKey: ["characters", selectedEpisode],
    queryFn: () => fetchCharacters(selectedEpisode),
  });
};
