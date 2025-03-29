import { renderHook, waitFor } from "@testing-library/react";
import { useEpisodes } from "@/hooks/useEpisodes";
import { fetchEpisodes } from "@/utils/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("@/utils/api", () => ({
  fetchEpisodes: jest.fn(),
}));

const queryClient = new QueryClient();

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useEpisodes Hook", () => {
  test("should return episodes data when API call is successful", async () => {
    const mockEpisodes = [{ id: 1, name: "Episode 1" }, { id: 2, name: "Episode 2" }];
    (fetchEpisodes as jest.Mock).mockResolvedValueOnce(mockEpisodes);

    const { result } = renderHook(() => useEpisodes(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(fetchEpisodes).toHaveBeenCalledTimes(1);
    expect(result.current.data).toEqual(mockEpisodes);
  });

});
