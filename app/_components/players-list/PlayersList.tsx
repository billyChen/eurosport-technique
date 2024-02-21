"use client";

import { PlayerCard } from "@/app/_components/player-card/PlayerCard";
import { PlayersListQuery } from "@/app/_components/players-list/__generated__/PlayersListQuery.graphql";
import { setActiveCardId } from "@/redux/features/playerCard/playerCardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { graphql, useLazyLoadQuery } from "react-relay/hooks";

const PlayersListQuery = graphql`
  query PlayersListQuery {
    players {
      id
    }

    matches {
      id
      winner {
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

  const { matches } = data;

  if (data.players.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center">
        No players found
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-4 w-full p-2 md:grid-cols-3 md:justify-center md:p-6">
      {data.players.map((player) => (
        <PlayerCard />
      ))}
    </div>
  );
};
