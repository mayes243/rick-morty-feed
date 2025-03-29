import axios from "axios";
import { Endpoints } from "@/constants/api-constants";
import { fetchCharacters, fetchEpisodes } from "@/utils/api";

jest.mock("axios");

describe("API Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetchEpisodes should return a list of episodes", async () => {
    const mockEpisodes = { results: [{ id: 1, name: "Episode 1" }, { id: 2, name: "Episode 2" }] };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockEpisodes });

    const episodes = await fetchEpisodes();
    expect(axios.get).toHaveBeenCalledWith(Endpoints.episodeList);
    expect(episodes).toEqual(mockEpisodes.results);
  });

  test("fetchCharacters should return a list of characters when episodeId is provided", async () => {
    const episodeId = 1;
    const mockEpisodeResponse = {
      data: { characters: ["https://character-api.com/1", "https://character-api.com/2"] },
    };
    const mockCharacterResponses = [
      { data: { id: 1, name: "Character 1" } },
      { data: { id: 2, name: "Character 2" } },
    ];

    (axios.get as jest.Mock)
      .mockResolvedValueOnce(mockEpisodeResponse) // Mock episode API call
      .mockResolvedValueOnce(mockCharacterResponses[0]) // Mock first character API call
      .mockResolvedValueOnce(mockCharacterResponses[1]); // Mock second character API call

    const characters = await fetchCharacters(episodeId);
    expect(axios.get).toHaveBeenCalledWith(Endpoints.episodeById + episodeId);
    expect(axios.get).toHaveBeenCalledWith("https://character-api.com/1");
    expect(axios.get).toHaveBeenCalledWith("https://character-api.com/2");
    expect(characters).toEqual([{ id: 1, name: "Character 1" }, { id: 2, name: "Character 2" }]);
  });

  test("fetchCharacters should return all characters when episodeId is not provided", async () => {
    const mockCharacters = { results: [{ id: 1, name: "Character 1" }, { id: 2, name: "Character 2" }] };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockCharacters });

    const characters = await fetchCharacters(null);
    expect(axios.get).toHaveBeenCalledWith(Endpoints.characterList);
    expect(characters).toEqual(mockCharacters.results);
  });
});
