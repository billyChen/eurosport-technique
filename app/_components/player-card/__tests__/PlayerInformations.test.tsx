import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { render, screen } from "@testing-library/react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Match } from "@/app/_components/player-card/PlayerCard";
import { TestProviders } from "@/tests/TestProviders";
import { PlayerInformations } from "@/app/_components/player-card/components/PlayerInformations";
import { PlayerInformationsTestQuery } from "@/app/_components/player-card/__tests__/__generated__/PlayerInformationsTestQuery.graphql";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

const PlayerInformationsTestQuery = graphql`
  query PlayerInformationsTestQuery @relay_test_operation {
    players {
      ...PlayerInformationsFragment
    }
  }
`;

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
    winner: { id: "player-1", firstname: "John" },
    players: [{ firstname: "John" }, { firstname: "Jane" }],
    startTime: "2021-01-01T00:00:00Z",
    endTime: "2021-01-01T00:27:00Z",
  },
];

describe("Player informations", () => {
  const mockEnvironment = createMockEnvironment();

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

  it("should display player informations", async () => {
    const TestRenderer = () => {
      const data = useLazyLoadQuery<PlayerInformationsTestQuery>(
        PlayerInformationsTestQuery,
        {},
      );
      return (
        <PlayerInformations
          handleClick={() => {}}
          player={data.players[0]}
          matches={mockMatchesData}
        />
      );
    };

    render(
      <TestProviders mockEnvironment={mockEnvironment}>
        <TestRenderer />
      </TestProviders>,
    );
    expect(await screen.findByAltText("profile picture")).toHaveAttribute(
      "src",
      mockPlayerData.picture.url,
    );
    expect(
      screen.getByText(
        `${mockPlayerData.firstname} ${mockPlayerData.lastname}`,
      ),
    ).toBeInTheDocument();
    expect(screen.getByAltText("player nationality flag")).toHaveAttribute(
      "src",
      mockPlayerData.country.picture.url,
    );
  });

  it("should display player's matches summary", async () => {
    const TestRenderer = () => {
      const data = useLazyLoadQuery<PlayerInformationsTestQuery>(
        PlayerInformationsTestQuery,
        {},
      );

      return (
        <PlayerInformations
          handleClick={() => {}}
          player={data.players[0]}
          matches={mockMatchesData}
        />
      );
    };

    render(
      <TestProviders mockEnvironment={mockEnvironment}>
        <TestRenderer />
      </TestProviders>,
    );
  });

  it("should display player stats", async () => {
    const TestRenderer = () => {
      const data = useLazyLoadQuery<PlayerInformationsTestQuery>(
        PlayerInformationsTestQuery,
        {},
      );
      return (
        <PlayerInformations
          handleClick={() => {}}
          player={data.players[0]}
          matches={mockMatchesData}
        />
      );
    };

    render(
      <TestProviders mockEnvironment={mockEnvironment}>
        <TestRenderer />
      </TestProviders>,
    );
    expect(screen.getByText("RANK")).toBeInTheDocument();
    expect(screen.getByText("POINTS")).toBeInTheDocument();
    expect(screen.getByText("HEIGHT")).toBeInTheDocument();
    expect(screen.getByText("WEIGHT")).toBeInTheDocument();
    expect(screen.getByText("AGE")).toBeInTheDocument();
    expect(screen.getByTestId("rank-value")).toHaveTextContent("5");
    expect(screen.getByTestId("points-value")).toHaveTextContent("1234");
    expect(screen.getByTestId("height-value")).toHaveTextContent("1.8 m");
    expect(screen.getByTestId("weight-value")).toHaveTextContent("80 kg");
    expect(screen.getByTestId("age-value")).toHaveTextContent("25");
  });
});
