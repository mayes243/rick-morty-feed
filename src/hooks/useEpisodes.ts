import { fetchEpisodes } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useEpisodes = () => {
  return useQuery({ queryKey: ["episodes"], queryFn: fetchEpisodes });
};
