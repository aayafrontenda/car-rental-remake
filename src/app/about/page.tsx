import React from "react";
import Image from "next/image";
import BlackContactContainer from "../components/BlackContactContainer";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Image
        src={"/assets/bg-not-home.png"}
        width={1920}
        height={400}
        alt="about image"
        className="w-full absolute top-0 left-0 z-[-1] opacity-10"
      />
      <section className="py-12 px-4 md:px-24 flex w-full" id="about-company">
        <span>
          <h2 className="text-4xl font-semibold">About</h2>
          <h4 className="text-lg font-semibold mt-4">Home / About</h4>
        </span>
      </section>
      <section className="py-12 px-4 md:px-32 flex flex-col md:flex-row justify-center w-full gap-16 mt-32">
        <Image
          src="/assets/dialogue.jpg"
          width={500}
          height={500}
          alt="professional dialogue picture"
        />
        <div className="flex flex-col w-full md:w-1/2">
          <h4 className="text-xl font-semibold my-4">About Company</h4>
          <h2 className="text-5xl font-bold">
            You start the engine and your adventure begins
          </h2>
          <p className="text-gray-500 text-lg my-4">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <p className="text-gray-500 text-lg my-4">
            Our company is a car rental company that provides various types of
            cars at low prices. We are ready to serve you 24 hours.
          </p>
          <div className=" flex flex-col md:flex-row mt-auto">
            <div className="flex py-4 px-6 md:pr-6 md:pl-0 md:border-black md:border-r-2 gap-4 justify-center">
              <div className="flex flex-col items-center justify-between">
                <h2 className="text-5xl font-bold">20</h2>
                <p className="text-gray-500 text-xl text-center tracking-widest font-bold ">
                  CAR
                </p>
              </div>
              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/car-types-icon.png"
                  width={70}
                  height={70}
                  alt="car types icon"
                  className="mt-2"
                />
                <p className="text-gray-500 text-xl text-center tracking-widest font-bold ">
                  TYPES
                </p>
              </div>
            </div>
            <div className="flex py-4 px-6 md:border-black md:border-r-2 gap-4 justify-center">
              <div className="flex flex-col items-center justify-between">
                <h2 className="text-5xl font-bold">85</h2>
                <p className="text-gray-500 text-xl text-center tracking-widest font-bold ">
                  RENTAL
                </p>
              </div>
              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/rental-outlets-icon.png"
                  width={70}
                  height={70}
                  alt="rental outlets icon"
                />
                <p className="text-gray-500 text-xl text-center tracking-widest font-bold ">
                  OUTLETS
                </p>
              </div>
            </div>
            <div className="flex py-4 px-6 gap-4 justify-center">
              <div className="flex flex-col items-center justify-between">
                <h2 className="text-5xl font-bold">75</h2>
                <p className="text-gray-500 text-xl text-center tracking-widest font-bold ">
                  REPAIR
                </p>
              </div>
              <div className="flex flex-col items-center  justify-between">
                <Image
                  src="/assets/repair-shop-icon.png"
                  width={50}
                  height={50}
                  alt="repair shop icon"
                />
                <p className="text-gray-500 text-xl ml-1 text-center tracking-widest font-bold ">
                  SHOP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col gap-6 py-12 px-4 md:px-24 items-center bg-gradient-to-b w-full text-center"
        style={{
          background: "linear-gradient(180deg,transparent 20%,#fff 80%)",
        }}
        id="process-description"
      >
        <h2 className="font-bold text-2xl">Plan your trip now</h2>
        <h1 className="font-extrabold text-5xl">Quick & easy car rental</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-auto gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/select-car.png"
              height={125}
              width={125}
              alt="select car image"
            />
            <h2 className="font-bold text-2xl">Select Car</h2>
            <p className="text-xl mt-4 text-gray-500">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact-operator.png"
              height={125}
              width={125}
              alt="contact operator image"
            />
            <h2 className="font-bold text-2xl">Contact Operator</h2>
            <p className="text-xl mt-4 text-gray-500">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/lets-drive.png"
              height={125}
              width={125}
              alt="contact operator image"
            />
            <h2 className="font-bold text-2xl">Let&apos;s Drive</h2>
            <p className="text-xl mt-4 text-gray-500">
              Whether you&apos;re hitting the open road, we&apos;ve got you
              covered with our wide range of cars
            </p>
          </div>
        </div>
      </section>
      <BlackContactContainer />
    </div>
  );
}
