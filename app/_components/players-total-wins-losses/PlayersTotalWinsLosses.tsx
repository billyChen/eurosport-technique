import { Match } from "@/app/_components/player-card/PlayerCard";
import React, { useMemo } from "react";

type PlayersTotalWinsLossesProps = {
  matches: readonly Match[];
  playerAId: string;
  playerBId: string;
};

export const PlayersTotalWinsLosses = ({
  matches,
  playerAId,
  playerBId,
}: PlayersTotalWinsLossesProps) => {
  const { playerAWinningMatchesCount, playerBWinningMatchesCount } =
    useMemo(() => {
      let playerAWinningMatchesCount = 0;
      let playerBWinningMatchesCount = 0;
      matches.forEach((match) => {
        if (match.winner.id === playerAId) {
          playerAWinningMatchesCount += 1;
        } else if (match.winner.id === playerBId) {
          playerBWinningMatchesCount += 1;
        }
      });

      return { playerAWinningMatchesCount, playerBWinningMatchesCount };
    }, [matches]);

  return (
    <section className="h-fit bg-white grid grid-cols-3 text-center items-center text-xs p-2">
      <div className="flex flex-col items-center">
        <span data-testid="playerA-wins-count" className="font-bold">
          {playerAWinningMatchesCount}
        </span>
        <span>WINS</span>
      </div>
      <div>{matches.length} MATCHES</div>

      <div className="flex flex-col items-center">
        <span data-testid="playerB-wins-count">
          {playerBWinningMatchesCount}
        </span>
        <span>WINS</span>
      </div>
    </section>
  );
};
