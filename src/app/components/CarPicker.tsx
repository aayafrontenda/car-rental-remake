import { useEffect, useId, useRef, useState } from "react";
import { Model } from "@/Types";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { scrollToBooking, signToScrollEvents } from "../helpers/scrollHelpers";

export default function CarPicker({ models }: { models: Model[] }) {
  const [pickedCar, setPickedCar] = useState({
    model: "Audi",
    rentName: "Audi A1 S-Line",
    mark: "A1",
    year: 2012,
    doors: "4/5",
    AC: true,
    transmission: "Manual",
    fuel: "Gasoline",
    price: 45,
    src: "/assets/models/audi.jpg",
  });

  useEffect(() => {
    signToScrollEvents();
    AOS.init();
  }, []);

  const id = useId();
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto gap-16 bg-white w-full items-center py-4">
        <div
          className="flex flex-col justify-self-start mr-auto text-center text-black font-extrabold text-lg gap-2 w-full"
          data-aos="fade-left"
        >
          {models.map((m: Model, index) => (
            <button
              key={`${id}-${index}`}
              className="py-4 px-6 bg-[#E9E9E9] cursor-pointer hover:bg-orange-500 hover:text-white w-full focus:bg-orange-500 focus:text-white outline-none transition-all duration-300"
              onClick={() => setPickedCar(m)}
            >
              {m.rentName}
            </button>
          ))}
        </div>
        <div
          className="flex flex-col text-center text-black font-extrabold text-lg"
          data-aos="fade-up"
        >
          <Image
            src={pickedCar?.src}
            width={400}
            height={400}
            alt="picked car image"
          />
        </div>
        <div
          className="flex flex-col text-center ml-auto text-black w-full"
          data-aos="fade-right"
        >
          <div className="bg-orange-500 text-white px-4 py-2 flex items-center m-0 w-full justify-center border-2 border-orange-500">
            <span className="font-bold text-3xl mr-2">${pickedCar.price}</span>
            <span className="text-lg">/ rent per day</span>
          </div>
          <div className="flex flex-col m-0 border-black border-r-2 border-l-2 w-full">
            <div className="flex items-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                Model
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.model}
              </span>
            </div>
            <div className="flex items-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                Mark
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.mark}
              </span>
            </div>
            <div className="flex items-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                Year
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.year}
              </span>
            </div>
            <div className="flex items-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                Doors
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.doors}
              </span>
            </div>
            <div className="flex items-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                AC
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.AC ? "True" : "False"}
              </span>
            </div>
            <div className="flex items-center justify-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                Transmission
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.transmission}
              </span>
            </div>
            <div className="flex items-center justify-center py-2 border-black border-b-2">
              <span className="border-r-2 border-black px-4 ml-auto w-full break-all">
                Fuel
              </span>
              <span className="mr-auto px-4 w-full break-all">
                {pickedCar.fuel}
              </span>
            </div>
          </div>
          <button
            onClick={scrollToBooking}
            className="bg-orange-500 py-4 px-6 text-white mt-4 font-extrabold shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:bg-orange-600 hover:shadow-[6px_6px_2px_2px_rgba(0,0,0,0.1)] transition duration-200"
          >
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
