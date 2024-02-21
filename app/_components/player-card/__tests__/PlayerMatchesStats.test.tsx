import { createMockEnvironment } from "relay-test-utils";
import { render, screen } from "@testing-library/react";
import { Match } from "@/app/_components/player-card/PlayerCard";
import { PlayerMatchesStats } from "@/app/_components/player-card/components/PlayerMatchesStats";

const mockMatchesData: readonly Match[] = [
  {
    id: "match1",
    winner: { id: "player-1", firstname: "John" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-01-01T00:00:00Z",
    endTime: "2021-01-01T02:00:00Z",
  },
  {
    id: "match2",
    winner: { id: "player-1", firstname: "John" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-01-02T00:00:00Z",
    endTime: "2021-01-02T02:30:00Z",
  },
  {
    id: "match3",
    winner: { id: "player-2", firstname: "Jane" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-12-12T00:00:00Z",
    endTime: "2021-12-12T00:27:00Z",
  },
];

describe("Player matches stats", () => {
  it("should display player Wins/Losses ratio", async () => {
    render(
      <PlayerMatchesStats
        handleClick={() => {}}
        playerId={"John"}
        matches={mockMatchesData}
      />,
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
