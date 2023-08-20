"use client";
import { Model } from "@/Types";
import Image from "next/image";
import { useEffect, useState, useId } from "react";
import VehicleCard from "../components/VehicleCard";
import BlackContactContainer from "../components/BlackContactContainer";

export default function VehicleModels() {
  const [models, setModels] = useState([]);
  useEffect(() => {
    fetch("/data/models.json")
      .then((data) => data.json())
      .then((data) => {
        setModels(data.data);
      });
  }, []);
  const id = useId();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Image
        src={"/assets/bg-not-home.png"}
        width={1920}
        height={400}
        alt="section background image"
        className="w-full absolute top-0 left-0 z-[-1] opacity-10"
      />
      <section className="py-12 px-4 md:px-24 flex w-full" id="vehicle-models">
        <span>
          <h2 className="text-4xl font-semibold">Vehicle Models</h2>
          <h4 className="text-lg font-semibold mt-4">Home / Vehicle Models</h4>
        </span>
      </section>
      <section
        className="py-12 px-16 md:px-4 xl:px-36 flex w-full justify-center h-full bg-white"
        id="models"
      >
        <div className="grid gap-8 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 sm:gap-4 xl:gap-8">
          {models.map((car: Model, index) => (
            <VehicleCard key={`${id}-${index}`} car={car} />
          ))}
        </div>
      </section>
      <BlackContactContainer />
    </div>
  );
}
