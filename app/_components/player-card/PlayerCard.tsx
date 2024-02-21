import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import { useDispatch, useSelector } from "react-redux";
import { setActiveCardId } from "@/redux/features/playerCard/playerCardSlice";
import { FlipCard } from "@/app/ui/flip-card/FlipCard";
import { selectActiveCardId } from "@/redux/features/playerCard/selectors";
import { PlayerCardFragment$key } from "@/app/_components/player-card/__generated__/PlayerCardFragment.graphql";
import { FrontContent } from "@/app/_components/player-card/components/FrontContent";
import { BackContent } from "@/app/_components/player-card/components/BackContent";

const PlayerCardFragment = graphql`
  fragment PlayerCardFragment on Player {
    id
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
      rank
      points
      weight
      height
      age
    }
  }
`;

export type Match = {
  id: string;
  winner: { firstname: string };
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
      frontCard={<FrontContent />}
      backCard={<BackContent />}
    />
  );
};
