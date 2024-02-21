import { FlipCard } from "@/ui/flip-card/FlipCard";
import { render, screen } from "@testing-library/react";

describe("FlipCard", () => {
  it("should render the front card", async () => {
    render(
      <FlipCard
        isFlipped={false}
        onValueChange={() => {}}
        frontCard={<div>This is the front card</div>}
        backCard={<div>This is the back card</div>}
      />,
    );

    expect(
      await screen.queryByText("This is the front card"),
    ).toBeInTheDocument();
    expect(
      await screen.queryByText("This is the back card"),
    ).not.toBeInTheDocument();
  });

  it("should render the back card", async () => {
    render(
      <FlipCard
        isFlipped={true}
        onValueChange={() => {}}
        frontCard={<div>This is the front card</div>}
        backCard={<div>This is the back card</div>}
      />,
    );

    expect(
      await screen.queryByText("This is the front card"),
    ).not.toBeInTheDocument();
    expect(
      await screen.queryByText("This is the back card"),
    ).toBeInTheDocument();
  });
});
