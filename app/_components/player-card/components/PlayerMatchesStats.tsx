import { Match } from "@/app/_components/player-card/PlayerCard";
import moment from "moment";

type PlayerMatchesStatsProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  playerId: string;
  matches: readonly Match[];
};

const formatToHour = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes.toString().padStart(2, "0")}`;
};

const formatDateString = (isoString: string) => {
  return moment(isoString).format("MMMM Do YYYY");
};

export const PlayerMatchesStats = ({
  matches,
  playerId,
  handleClick,
}: PlayerMatchesStatsProps) => {
  const winningMatches = matches.filter(
    (match) => match.winner.firstname === playerId,
  );

  return (
    <div
      data-testid="back-content"
      className="bg-gray-100 p-2"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2">
        <div className="border-b-2 border-black">
          <p>Matches won</p>
        </div>

        {winningMatches.length === 0 ? (
          <p>No matches won</p>
        ) : (
          <div className="flex flex-col gap-6">
            {winningMatches.map((match) => {
              const start = moment(match.startTime);
              const end = moment(match.endTime);
              const duration = end.diff(start, "minutes");

              return (
                <div className="flex flex-col" key={match.id}>
                  <p className="text-gray-500">
                    {formatDateString(match.startTime)}
                  </p>
                  <div className="bg-white grid grid-cols-[1fr_auto] p-4">
                    <div className="flex flex-col">
                      {match.players.map((player, idx) => (
                        <span
                          data-testid={`player-${idx}`}
                          key={player.firstname}
                        >
                          {player.firstname}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">
                        {formatToHour(duration)}
                      </span>
                      <span className="text-xs font-bold">Duration</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
