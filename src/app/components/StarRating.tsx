import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useId } from "react";
export default function StarRating({
  rating,
  flip,
  activeColor,
  inactiveColor,
  size,
}: {
  rating: number;
  flip?: boolean;
  activeColor: string;
  inactiveColor: string;
  size: string;
}) {
  const id = useId();
  return (
    <>
      {(flip ? [4, 3, 2, 1, 0] : [0, 1, 2, 3, 4]).map((n) => (
        <FontAwesomeIcon
          key={`${id}-${n}`}
          icon={faStar}
          className={`md:${size} mt-auto -translate-y-full ${
            n < rating ? activeColor : inactiveColor
          }`}
        />
      ))}
    </>
  );
}
