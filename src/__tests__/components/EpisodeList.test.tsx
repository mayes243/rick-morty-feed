import { render, screen, fireEvent } from "@testing-library/react";
import EpisodeList from "@/components/EpisodeList";
import { useEpisodes } from "@/hooks/useEpisodes";
import { useEpisodeStore } from "@/store/useEpisodeStore";

// Mock hooks
jest.mock("@/hooks/useEpisodes");
jest.mock("@/store/useEpisodeStore");

describe('EpisodeList Component', () => {
  const mockEpisodes = [
    { id: 1, name: 'Episode 1' },
    { id: 2, name: 'Episode 2' },
    { id: 3, name: 'Episode 3' },
  ];

  const mockSetSelectedEpisode = jest.fn();

  beforeEach(() => { 
    // Default mock implementations
    useEpisodeStore.mockReturnValue({
      selectedEpisode: null,
      setSelectedEpisode: mockSetSelectedEpisode,
    });
  });

  test('renders loading state', () => {
    useEpisodes.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<EpisodeList />);
    
    expect(screen.getByText('Loading episodes...')).toBeInTheDocument();
  });

  test('renders episode list when data is loaded', () => {
    useEpisodes.mockReturnValue({
      data: mockEpisodes,
      isLoading: false,
    });

    render(<EpisodeList />);
    
    expect(screen.getByText('Episodes')).toBeInTheDocument();
    
    mockEpisodes.forEach(episode => {
      expect(screen.getByText(episode.name)).toBeInTheDocument();
    });
  });

  test('handles episode selection', () => {
    useEpisodes.mockReturnValue({
      data: mockEpisodes,
      isLoading: false,
    });

    render(<EpisodeList />);
    
    const episodeItem = screen.getByText('Episode 1');
    expect(episodeItem).not.toHaveClass('bg-blue-500');
    
    fireEvent.click(episodeItem);
    expect(mockSetSelectedEpisode).toHaveBeenCalledWith(1);
  });

  test('handles episode deselection', () => {
    useEpisodes.mockReturnValue({
      data: mockEpisodes,
      isLoading: false,
    });
    useEpisodeStore.mockReturnValue({
      selectedEpisode: 1,
      setSelectedEpisode: mockSetSelectedEpisode,
    });

    render(<EpisodeList />);
    
    const episodeItem = screen.getByText('Episode 1');
    expect(episodeItem).toHaveClass('bg-blue-500');
    
    fireEvent.click(episodeItem);
    expect(mockSetSelectedEpisode).toHaveBeenCalledWith(null);
  });

  test('applies correct styling to selected episode', () => {
    useEpisodes.mockReturnValue({
      data: mockEpisodes,
      isLoading: false,
    });
    useEpisodeStore.mockReturnValue({
      selectedEpisode: 2,
      setSelectedEpisode: mockSetSelectedEpisode,
    });

    render(<EpisodeList />);
    
    const selectedEpisode = screen.getByText('Episode 2');
    const unselectedEpisode = screen.getByText('Episode 1');
    
    expect(selectedEpisode).toHaveClass('bg-blue-500');
    expect(unselectedEpisode).not.toHaveClass('bg-blue-500');
  });
});

// Mock hook implementations for reference
useEpisodes.mockImplementation(() => ({
  data: null,
  isLoading: false,
}));

useEpisodeStore.mockImplementation(() => ({
  selectedEpisode: null,
  setSelectedEpisode: jest.fn(),
}));
