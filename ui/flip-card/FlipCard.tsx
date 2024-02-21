import classnames from "classnames";
import React from "react";

type FlipCardProps = React.HTMLAttributes<HTMLDivElement> & {
  isFlipped: boolean;
  backCard: React.ReactNode;
  frontCard: React.ReactNode;
  onValueChange: () => void;
};

export const FlipCard = ({
  className,
  isFlipped,
  backCard,
  frontCard,
  onValueChange,
  ...props
}: FlipCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      onValueChange();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    onValueChange();
  };

  return (
    <section
      {...props}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-pressed={isFlipped}
      onClick={handleClick}
      className={classnames(
        "group bg-white flex w-full flex-col border",
        className,
      )}
    >
      <div className={"w-full h-fit"}>{isFlipped ? backCard : frontCard}</div>
    </section>
  );
};
