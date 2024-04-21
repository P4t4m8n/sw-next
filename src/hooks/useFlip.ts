import { useState, MouseEvent } from "react";

export const useFlip = (): [
  boolean,
  (ev: MouseEvent<HTMLButtonElement>) => void
] => {
  const [flip, setFlip] = useState<boolean>(false);

  const toggleFlip = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    ev.preventDefault();
    setFlip((flip) => !flip);
  };

  return [flip, toggleFlip];
};
