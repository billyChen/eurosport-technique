import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { PlayerCard } from "@/app/_components/player-card/PlayerCard";
import { PlayersListQuery } from "@/app/_components/players-list/__generated__/PlayersListQuery.graphql";
import { TestProviders } from "@/tests/TestProviders";

const TestQuery = graphql`
  query PlayerCardTestQuery @relay_test_operation {
    players {
      id
      ...PlayerCardFragment
    }
  }
`;

describe("PlayerCard", () => {
  const mockEnvironment = createMockEnvironment();

  const mockPlayerData = {
    firstname: "John",
    lastname: "Doe",
    picture: { url: "https://example.com/player.jpg" },
    country: { picture: { url: "https://example.com/country.jpg" } },
    stats: {
      rank: 5,
      points: 1234,
      weight: 80000,
      height: 180,
      age: 25,
    },
  };

  const mockMatchesData = [
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
      winner: { id: "player-1", firstname: "John" },
      players: [{ firstname: "John" }, { firstname: "Jane" }],
      startTime: "2021-01-01T00:00:00Z",
      endTime: "2021-01-01T00:27:00Z",
    },
  ];

  beforeEach(() => {
    mockEnvironment.mockClear();
    mockEnvironment.mock.queueOperationResolver((operation) =>
      MockPayloadGenerator.generate(operation, {
        Player() {
          return mockPlayerData;
        },
      }),
    );
  });

  it("should display front card content", async () => {
    const TestRenderer = () => {
      const data = useLazyLoadQuery<PlayersListQuery>(TestQuery, {});
      return <PlayerCard player={data.players[0]} matches={mockMatchesData} />;
    };

    render(
      <TestProviders mockEnvironment={mockEnvironment}>
        <TestRenderer />
      </TestProviders>,
    );

    expect(await screen.queryByTestId("front-content")).toBeInTheDocument();
    expect(await screen.queryByTestId("back-content")).not.toBeInTheDocument();
  });

  it("should display back card content", async () => {
    const TestRenderer = () => {
      const data = useLazyLoadQuery<PlayersListQuery>(TestQuery, {});
      return <PlayerCard player={data.players[0]} matches={mockMatchesData} />;
    };

    const { getByTestId } = render(
      <TestProviders mockEnvironment={mockEnvironment}>
        <TestRenderer />
      </TestProviders>,
    );

    await fireEvent.click(getByTestId("flipcard"));

    expect(await screen.queryByTestId("front-content")).not.toBeInTheDocument();
    expect(await screen.queryByTestId("back-content")).toBeInTheDocument();

    await fireEvent.click(getByTestId("flipcard"));

    expect(await screen.queryByTestId("front-content")).toBeInTheDocument();
    expect(await screen.queryByTestId("back-content")).not.toBeInTheDocument();
  });
});
