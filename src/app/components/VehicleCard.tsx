import { Model } from "@/Types";
import Image from "next/image";
import { useId, useEffect } from "react";
import Flashcard from "../components/Flashcard";
import Aos from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCar } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";

export default function VehicleCard({ car }: { car: Model }) {
  useEffect(() => {
    Aos.init();
  }, []);
  const {
    src,
    model,
    rentName,
    mark,
    year,
    doors,
    AC,
    transmission,
    fuel,
    price,
    rating,
  } = car;
  const id = useId();
  return (
    <div className="h-full w-full" data-aos="flip-right">
      <div className="w-full flex flex-col justify-center rounded-2xl h-full border-2 border-gray-200 shadow-lg bg-white">
        <Image
          src="/assets/audi.png"
          width={300}
          height={300}
          alt={`car picture - ${rentName}`}
          className="h-48 w-full object-cover"
        />
        <div className="px-4 py-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">{rentName}</h2>
              <div className="mt-4">
                <StarRating
                  rating={rating}
                  activeColor="text-amber-400"
                  inactiveColor="text-gray-500"
                  size="text-md"
                />
              </div>
            </div>
            <div className="flex flex-col animate-pulse">
              <h2 className="text-3xl font-bold">${price}</h2>
              <span className="text-gray-500 text-sm">per day</span>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-lg">
            <div>
              <FontAwesomeIcon icon={faCar} />
              <span className="text-gray-500 ml-2">{mark}</span>
            </div>
            <div>
              <span className="text-gray-500 mr-2">{doors}</span>
              <FontAwesomeIcon icon={faCar} />
            </div>
          </div>
          <div className="flex justify-between mt-4 text-lg">
            <div>
              <FontAwesomeIcon icon={faCar} />
              <span className="text-gray-500 ml-2">{transmission}</span>
            </div>
            <div>
              <span className="text-gray-500 mr-2">{fuel}</span>
              <FontAwesomeIcon icon={faCar} />
            </div>
          </div>
        </div>
        <div className="mx-8 mt-auto border-t-2 border-t-gray-300">
          <a href="/#booking" className="text-orange-500 text-lg">
            <button className="bg-orange-500 w-full py-4 text-xl rounded-sm my-4 text-white font-bold text-center shadow-orange-400 shadow-md hover:bg-orange-600 hover:shadow-orange-400 hover:shadow-lg transition-all duration-500">
              Book Ride
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
