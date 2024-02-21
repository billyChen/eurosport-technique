import { render } from "@testing-library/react";
import { Match } from "@/app/_components/player-card/PlayerCard";
import { PlayersTotalWinsLosses } from "@/app/_components/players-total-wins-losses/PlayersTotalWinsLosses";

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
    players: [{ firstname: "Homer" }, { firstname: "Jane" }],
    startTime: "2021-01-01T00:00:00Z",
    endTime: "2021-01-01T02:00:00Z",
  },
  {
    id: "match3",
    winner: { id: "player-2", firstname: "Jane" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-01-01T00:00:00Z",
    endTime: "2021-01-01T00:27:00Z",
  },
];

describe("PlayerTotalWinsLosses", () => {
  it("should displays the right count of wins for each players", () => {
    const { getByTestId } = render(
      <PlayersTotalWinsLosses
        matches={mockMatchesData}
        playerAId="player-1"
        playerBId="player-2"
      />,
    );

    expect(getByTestId("playerA-wins-count")).toHaveTextContent("2");
    expect(getByTestId("playerB-wins-count")).toHaveTextContent("1");
  });
});
