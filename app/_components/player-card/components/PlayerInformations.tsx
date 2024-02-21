import { Match } from "@/app/_components/player-card/PlayerCard";
import { PlayerInformationsFragment$key } from "@/app/_components/player-card/components/__generated__/PlayerInformationsFragment.graphql";
import { PlayerInformationsStatsFragment$key } from "@/app/_components/player-card/components/__generated__/PlayerInformationsStatsFragment.graphql";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

const PlayerInformationsFragment = graphql`
  fragment PlayerInformationsFragment on Player {
    firstname
    lastname
    picture {
      url
    }
    country {
      picture {
        url
      }
    }

    stats {
      ...PlayerInformationsStatsFragment
    }
  }
`;

const PlayerInformationsStatsFragment = graphql`
  fragment PlayerInformationsStatsFragment on Stats {
    rank
    points
    weight
    height
    age
  }
`;

type Props = {
  player: PlayerInformationsFragment$key;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  matches: readonly Match[];
};

type PlayerStatsProps = {
  stats: PlayerInformationsStatsFragment$key;
};

const convertGramsToKilograms = (grams: number) => grams / 1000;
const convertCmToMeters = (cm: number) => cm / 100;

const calculateTotalMinutesPlayed = (matches: Match[]) => {
  return matches.reduce((prev, curr) => {
    const start = moment(curr.startTime);
    const end = moment(curr.endTime);
    const duration = end.diff(start, "minutes");

    return prev + duration;
  }, 0);
};

export const PlayerStats = ({ stats }: PlayerStatsProps) => {
  const data = useFragment(PlayerInformationsStatsFragment, stats);

  const weight = convertGramsToKilograms(data.weight);
  const height = convertCmToMeters(data.height);

  return (
    <div className="p-2">
      <div className="border-y border-gray-300 bg-gray-100 text-gray-400">
        <p>Stats</p>
      </div>

      <div className="p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <span>rank</span>
          <span data-testid="rank-value">{data.rank}</span>
        </div>
        <div className="flex justify-between">
          <span>points</span>
          <span data-testid="points-value">{data.points}</span>
        </div>
        <div className="flex justify-between">
          <span>weight</span>
          <span data-testid="weight-value">{`${weight} kg`}</span>
        </div>
        <div className="flex justify-between">
          <span>height</span>
          <span data-testid="height-value">{`${height} m`}</span>
        </div>
        <div className="flex justify-between">
          <span>age</span>
          <span data-testid="age-value">{data.age}</span>
        </div>
      </div>
    </div>
  );
};

export const PlayerInformations = ({ player, matches }: Props) => {
  const data = useFragment(PlayerInformationsFragment, player);
  const playerMatches = matches.filter((match) =>
    match.players.some((p) => p.firstname === data.firstname),
  );

  const minutesPlayed = calculateTotalMinutesPlayed(playerMatches);
  const matchesPlayed = playerMatches.length;

  return (
    <div
      data-testid="front-content"
      className="flex flex-col gap-2 items-center"
    >
      <Image
        src={data.picture.url}
        alt={"profile picture"}
        width={100}
        height={100}
      />

      <div className="flex gap-2">
        <Image
          src={data.country.picture.url}
          alt={"player nationality flag"}
          width={30}
          height={5}
        />
        <span>{`${data.firstname} ${data.lastname}`}</span>
      </div>

      <div className="flex gap-2 justify-center">
        <div className="">
          <div data-testid="matches-played-count">{matchesPlayed}</div>

          <div>Matches played</div>
        </div>
        <div className="">
          <div data-testid="minutes-played-count">{minutesPlayed}</div>

          <div>Minutes played</div>
        </div>
      </div>

      <PlayerStats stats={data.stats} />
    </div>
  );
};
