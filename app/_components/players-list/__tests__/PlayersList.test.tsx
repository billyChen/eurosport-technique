jest.mock("../../player-card/PlayerCard.tsx", () => ({
    PlayerCard: () => <div>Mocked Player Card</div>,
  }));
  
  import { PlayersList } from "@/app/_components/players-list/PlayersList";
  import { TestProviders } from "@/tests/TestProviders";
  import { render, screen } from "@testing-library/react";
  import { MockPayloadGenerator, createMockEnvironment } from "relay-test-utils";
  import ReactTestRenderer from "react-test-renderer";
  
  describe("Players list", () => {
    const mockEnvironment = createMockEnvironment();
    const mockPlayerData = [
      {
        firstname: "John",
        lastname: "Doe",
        picture: { url: "https://example.com/player.jpg" },
        country: { picture: { url: "https://example.com/country.jpg" } },
        stats: {
          rank: 5,
          points: 1234,
          weight: 80000,
          height: 180,
          age: 25,
        },
      },
  
      {
        firstname: "Homer",
        lastname: "Simpson",
        picture: { url: "https://example.com/player.jpg" },
        country: { picture: { url: "https://example.com/country.jpg" } },
        stats: {
          rank: 5,
          points: 1234,
          weight: 80000,
          height: 180,
          age: 25,
        },
      },
    ];
  
    beforeEach(() => {
      mockEnvironment.mockClear();
    });
  
    it("should display a list of flipcard players", async () => {
      render(
        <TestProviders mockEnvironment={mockEnvironment}>
          <PlayersList />
        </TestProviders>,
      );
  
      ReactTestRenderer.act(() => {
        mockEnvironment.mock.resolveMostRecentOperation((operation) =>
          MockPayloadGenerator.generate(operation, {
            Players() {
              return mockPlayerData;
            },
          }),
        );
      });
  
      expect(await screen.findByText("Mocked Player Card")).toBeInTheDocument();
    });
  });
  