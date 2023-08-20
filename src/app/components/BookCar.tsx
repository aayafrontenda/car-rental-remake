import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faLocationDot,
  faCalendarDays,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CustomSelect from "./CustomSelect";

import { Model } from "@/Types";
import React, { useState, useRef } from "react";
export default function BookCar({
  models,
  setModalOpen,
}: {
  models: Model[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [carRef, pickUpCityRef, dropOfCityRef, pickUpDateRef, dropOfDateRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (
      carRef.current?.innerHTML === "Select Your Car" ||
      pickUpCityRef.current?.innerHTML === "Select pick-up location" ||
      dropOfCityRef.current?.innerHTML === "Select drop-of location" ||
      !pickUpDateRef.current?.value ||
      !dropOfDateRef.current?.value
    ) {
      setStatus("All fields are required");
      setError(true);
      return;
    } else {
      setModalOpen(true);
    }
  };
  return (
    <section
      className="py-12 px-4 md:px-24 w-full flex justify-center"
      id="booking"
    >
      <Element
        name="bookingForScroll"
        className="flex p-12 container flex-col gap-6 shadow-xl bg-white bg-[url('/assets/book-bg-shape.png')]"
      >
        {status && (
          <div
            className={`py-4 flex justify-between items-center px-8 text-xl rounded-lg ${
              error ? "bg-red-200 text-red-950" : "bg-green-200 text-green-950"
            }`}
          >
            {status}
            <button onClick={() => setStatus("")}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}
        <h1 className="text-3xl font-extrabold">Book a car</h1>
        <div className="booking_content text-xl flex-col lg:flex-row flex gap-6 justify-between">
          <div className="flex flex-col justify-between gap-3 w-full">
            <label className="font-bold">
              <FontAwesomeIcon icon={faCar} className="text-orange-500 mr-2" />
              Select Your Car Type <span className="text-orange-500">*</span>
            </label>
            <CustomSelect
              id="car-select"
              defaultValue="Select Your Car"
              values={models.map((m: Model) => m.rentName)}
              ref={carRef}
            />
          </div>
          <div className="flex flex-col justify-between gap-3 w-full">
            <label className="font-bold">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-orange-500 mr-2"
              />
              Pick-up <span className="text-orange-500">*</span>
            </label>
            <CustomSelect
              id="pick-up-select"
              defaultValue="Select pick-up location"
              values={["City 1", "City 2", "City 3", "City 4"]}
              ref={pickUpCityRef}
            />
          </div>
          <div className="flex flex-col justify-between gap-3 w-full">
            <label className="font-bold">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-orange-500 mr-2"
              />
              Drop-of <span className="text-orange-500">*</span>
            </label>
            <CustomSelect
              id="drop-of-select"
              defaultValue="Select drop-of location"
              values={["City 1", "City 2", "City 3", "City 4"]}
              ref={dropOfCityRef}
            />
          </div>
        </div>
        <div className="booking_content text-xl flex-col lg:flex-row flex gap-6 justify-between">
          <div className="flex flex-col justify-between gap-3 w-full">
            <label className="font-bold">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-orange-500 mr-2"
              />
              Pick-up <span className="text-orange-500">*</span>
            </label>
            <input
              type="date"
              className="placeholder-grey-200 w-full py-2 px-4 outline-none border-2 border-grey-300 rounded-md"
              ref={pickUpDateRef}
            />
          </div>
          <div className="flex flex-col justify-between gap-3 w-full self-end">
            <label className="font-bold">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-orange-500 mr-2"
              />
              Drop-of <span className="text-orange-500">*</span>
            </label>
            <input
              type="date"
              className="placeholder-grey-200 w-full py-2 px-4 outline-none border-2 border-grey-300 rounded-md"
              ref={dropOfDateRef}
            />
          </div>
          <div className="flex flex-col justify-between gap-3 w-full self-end">
            <button
              className="bg-orange-500 py-3 px-9 text-white font-semibold rounded-sm hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </Element>
    </section>
  );
}
