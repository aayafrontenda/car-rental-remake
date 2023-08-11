import React, { useState, useId } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Flashcard({ rating }: { rating: number }) {
  const [flip, setFlip] = useState(false);
  const id = useId();

  return (
    <div className="ml-auto">
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        {flip ? (
          [4, 3, 2, 1, 0].map((n) => (
            <FontAwesomeIcon
              key={`${id}-${n}`}
              icon={faStar}
              className={`mt-6 md:text-xl -translate-y-full text-${
                n < rating ? "orange" : "gray"
              }-500`}
            />
          ))
        ) : (
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="text-6xl text-orange-500"
          />
        )}
      </div>
    </div>
  );
}
