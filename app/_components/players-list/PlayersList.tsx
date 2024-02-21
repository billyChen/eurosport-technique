"use client";

import { PlayerCard } from "@/app/_components/player-card/PlayerCard";
import { PlayersListQuery } from "@/app/_components/players-list/__generated__/PlayersListQuery.graphql";
import { PlayersTotalWinsLosses } from "@/app/_components/players-total-wins-losses/PlayersTotalWinsLosses";
import { setActiveCardId } from "@/redux/features/playerCard/playerCardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { graphql, useLazyLoadQuery } from "react-relay/hooks";

const PlayersListQuery = graphql`
  query PlayersListQuery {
    players {
      id
      ...PlayerCardFragment
    }

    matches {
      id
      winner {
        id
        firstname
      }
      players {
        firstname
      }
      startTime
      endTime
    }
  }
`;

export const PlayersList = () => {
  const data = useLazyLoadQuery<PlayersListQuery>(PlayersListQuery, {});
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowClick = () => {
      dispatch(setActiveCardId(null));
    };

    window.addEventListener("click", handleWindowClick);

    return () => window.removeEventListener("click", handleWindowClick);
  }, [dispatch]);

  if (!data) return <div>Loading...</div>;

  if (data.players.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center">
        No players found
      </div>
    );

  const { matches } = data;

  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full p-4 md:justify-center md:p-6 gap-2">
      <PlayersTotalWinsLosses
        matches={matches}
        playerAId={data.players[0].id}
        playerBId={data.players[1].id}
      />

      <div className="flex flex-nowrap">
        <PlayerCard player={data.players[0]} matches={matches} />
        <PlayerCard player={data.players[1]} matches={matches} />
      </div>
    </div>
  );
};
