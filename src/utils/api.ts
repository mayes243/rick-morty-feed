import { Endpoints } from "@/constants/api-constants";
import { ICharacter } from "@/interfaces/Icharacter";
import { IEpisode } from "@/interfaces/Iepisode";
import axios from "axios";

export const fetchEpisodes = async (): Promise<IEpisode[]> => {
  const { data } = await axios.get(Endpoints.episodeList);
  return data.results;
};

export const fetchCharacters = async (episodeId?: number | null): Promise<ICharacter[]> => {
  if (!episodeId) {
    const { data } = await axios.get(Endpoints.characterList);
    return data.results;
  }
  const { data } = await axios.get(Endpoints.episodeById + episodeId);
  const characterResponses = await Promise.all(data.characters.map((url: string) => axios.get(url)));
  return characterResponses.map(res => res.data);
};
