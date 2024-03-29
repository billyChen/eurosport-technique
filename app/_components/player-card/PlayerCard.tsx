import { PlayerInformations } from "@/app/_components/player-card/components/PlayerInformations";
import { PlayerCardFragment$key } from "@/app/_components/player-card/__generated__/PlayerCardFragment.graphql";
import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import { useDispatch, useSelector } from "react-redux";
import { setActiveCardId } from "@/redux/features/playerCard/playerCardSlice";
import { FlipCard } from "@/ui/flip-card/FlipCard";
import { PlayerMatchesStats } from "@/app/_components/player-card/components/PlayerMatchesStats";
import { selectActiveCardId } from "@/redux/features/playerCard/selectors";

const PlayerCardFragment = graphql`
  fragment PlayerCardFragment on Player {
    id
    firstname
    ...PlayerInformationsFragment
  }
`;

export type Match = {
  id: string;
  winner: { id: string; firstname: string };
  players: readonly { firstname: string }[];
  startTime: string;
  endTime: string;
};

type PlayerCardProps = {
  player: PlayerCardFragment$key;
  matches: readonly Match[];
};

export const PlayerCard = ({ player, matches }: PlayerCardProps) => {
  const data = useFragment(PlayerCardFragment, player);
  const dispatch = useDispatch();
  const activeCardId = useSelector(selectActiveCardId);
  const isBackCardVisible = activeCardId === data.firstname;

  const handleClick = () => {
    if (isBackCardVisible) {
      dispatch(setActiveCardId(null));
    } else {
      dispatch(setActiveCardId(data.firstname));
    }
  };

  return (
    <FlipCard
      data-testid="flipcard"
      className="h-fit"
      isFlipped={isBackCardVisible}
      onValueChange={handleClick}
      frontCard={
        <PlayerInformations
          handleClick={handleClick}
          player={data}
          matches={matches}
        />
      }
      backCard={
        <PlayerMatchesStats
          handleClick={handleClick}
          matches={matches}
          playerId={data.firstname}
        />
      }
    />
  );
};
