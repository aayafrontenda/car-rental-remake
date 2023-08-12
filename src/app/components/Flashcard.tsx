import React, { useState, useId } from "react";

export default function Flashcard({
  front,
  back,
}: {
  front: JSX.Element;
  back: JSX.Element;
}) {
  const [flip, setFlip] = useState(false);
  const id = useId();

  return (
    <div
      className={`card w-full ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      {!flip ? front : back}
    </div>
  );
}
