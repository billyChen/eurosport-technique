import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { render, screen } from "@testing-library/react";
import { Match } from "@/app/_components/player-card/PlayerCard";
import { PlayerMatchesStats } from "@/app/_components/player-card/components/PlayerMatchesStats";

const mockPlayerData = {
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
};

const mockMatchesData: readonly Match[] = [
  {
    id: "match1",
    winner: { firstname: "John" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-01-01T00:00:00Z",
    endTime: "2021-01-01T02:00:00Z",
  },
  {
    id: "match2",
    winner: { firstname: "John" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-01-02T00:00:00Z",
    endTime: "2021-01-02T02:30:00Z",
  },
  {
    id: "match3",
    winner: { firstname: "Jane" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-12-12T00:00:00Z",
    endTime: "2021-12-12T00:27:00Z",
  },
];

describe("Player matches stats", () => {
  const mockEnvironment = createMockEnvironment();

  beforeEach(() => {
    mockEnvironment.mockClear();
    mockEnvironment.mock.queueOperationResolver((operation) =>
      MockPayloadGenerator.generate(operation, {
        Player() {
          return mockPlayerData;
        },
      }),
    );
  });

  it("should display player Wins/Losses ratio", async () => {
    render(
      <PlayerMatchesStats
        handleClick={() => {}}
        playerId={"John"}
        matches={mockMatchesData}
      />,
    );

    expect(await screen.queryByText("Matches ratio")).toBeInTheDocument();
    expect(await screen.findByTestId("wins-matches-count")).toHaveTextContent(
      "2",
    );
    expect(await screen.findByTestId("losses-matches-count")).toHaveTextContent(
      "1",
    );
  });

  it("should display player's winning matches with details", async () => {
    render(
      <PlayerMatchesStats
        handleClick={() => {}}
        playerId={"John"}
        matches={mockMatchesData}
      />,
    );

    expect(await screen.queryByText("Matches won")).toBeInTheDocument();

    const countJohnsName = await screen.getAllByText("John");
    const countJanesName = await screen.getAllByText("Jane");

    expect(await screen.queryByText("Matches won")).toBeInTheDocument();
    expect(countJohnsName.length).toEqual(2);
    expect(countJanesName.length).toEqual(2);

    expect(await screen.queryByText("2h00")).toBeInTheDocument();
    expect(await screen.queryByText("2h30")).toBeInTheDocument();

    expect(await screen.queryByText("January 1st 2021")).toBeInTheDocument();
    expect(await screen.queryByText("January 2nd 2021")).toBeInTheDocument();
    expect(
      await screen.queryByText("December 12th 2021"),
    ).not.toBeInTheDocument();
  });
});
