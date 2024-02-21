import { Match } from "@/app/_components/player-card/PlayerCard";
import { PlayerInformationsFragment$key } from "@/app/_components/player-card/components/__generated__/PlayerInformationsFragment.graphql";
import { PlayerInformationsPictureAndNameFragment$key } from "@/app/_components/player-card/components/__generated__/PlayerInformationsPictureAndNameFragment.graphql";
import { PlayerInformationsStatsFragment$key } from "@/app/_components/player-card/components/__generated__/PlayerInformationsStatsFragment.graphql";
import Image from "next/image";
import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

const PlayerInformationsFragment = graphql`
  fragment PlayerInformationsFragment on Player {
    ...PlayerInformationsPictureAndNameFragment
    stats {
      ...PlayerInformationsStatsFragment
    }
  }
`;

const PlayerInformationsPictureAndNameFragment = graphql`
  fragment PlayerInformationsPictureAndNameFragment on Player {
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

type PlayerPictureAndNameProps = {
  player: PlayerInformationsPictureAndNameFragment$key;
};

const convertGramsToKilograms = (grams: number) => grams / 1000;
const convertCmToMeters = (cm: number) => cm / 100;

const PlayerPictureAndName = ({ player }: PlayerPictureAndNameProps) => {
  const data = useFragment(PlayerInformationsPictureAndNameFragment, player);

  return (
    <div className="flex gap-2">
      <Image
        src={data.picture.url}
        alt={"profile picture"}
        width={70}
        height={90}
      />

      <div className="flex gap-2 flex-col p-2">
        <span className="group-hover:underline uppercase font-bold">{`${data.firstname} ${data.lastname}`}</span>
        <Image
          src={data.country.picture.url}
          alt={"player nationality flag"}
          width={35}
          height={5}
        />
      </div>
    </div>
  );
};

export const PlayerStats = ({ stats }: PlayerStatsProps) => {
  const data = useFragment(PlayerInformationsStatsFragment, stats);

  const weight = convertGramsToKilograms(data.weight);
  const height = convertCmToMeters(data.height);

  return (
    <div className="border-t text-xs">
      <div className="p-2 flex flex-col gap-2 px-8">
        <div className="flex w-full justify-between border-b pb-2 gap-8">
          <div className="flex justify-between w-full">
            <span>RANK</span>
            <span className="font-bold" data-testid="rank-value">
              {data.rank}
            </span>
          </div>

          <div className="flex justify-between w-full">
            <span>POINTS</span>
            <span className="font-bold" data-testid="points-value">
              {data.points}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span>WEIGHT</span>
            <span
              className="font-bold"
              data-testid="weight-value"
            >{`${weight} kg`}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>HEIGHT</span>
            <span
              className="font-bold"
              data-testid="height-value"
            >{`${height} m`}</span>
          </div>

          <div className="flex flex-col items-center">
            <span>AGE</span>
            <span className="font-bold" data-testid="age-value">
              {data.age}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlayerInformations = ({ player }: Props) => {
  const data = useFragment(PlayerInformationsFragment, player);

  return (
    <div data-testid="front-content" className="flex flex-col">
      <PlayerPictureAndName player={data} />
      <PlayerStats stats={data.stats} />
    </div>
  );
};
