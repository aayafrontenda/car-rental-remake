"use client";
import Image from "next/image";
import Link from "next/link";
import { Model } from "@/Types";
import InfoDrop from "./components/InfoDrop";
import {
  scrollToBooking,
  signToScrollEvents,
  scrollToTop,
} from "./helpers/scrollHelpers";
import { Element } from "react-scroll";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CustomSelect from "./components/CustomSelect";

import { config } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleCheck,
  faArrowAltCircleRight,
  faCar,
  faLocationDot,
  faCalendarDays,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import CarPicker from "./components/CarPicker";
import Slider from "./components/Slider";
import DownloadButton from "./components/DownloadButton";

config.autoAddCss = false;

export default function Home() {
  const [models, setModels] = useState([]);
  const [fastScrollVisible, setFastScrollVisible] = useState(false);

  function onPageScroll() {
    if (window.scrollY > 500) {
      setFastScrollVisible(true);
    } else {
      setFastScrollVisible(false);
    }
  }
  useEffect(() => {
    fetch("/data/models.json")
      .then((data) => data.json())
      .then((json) => {
        setModels(json.data);
      });
    signToScrollEvents();

    window.addEventListener("scroll", (e: Event) => onPageScroll());
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <section
        className="py-12 px-4 md:px-24 flex w-full justify-center"
        id="home"
      >
        <Image
          src="/assets/bg-shape.png"
          height={1000}
          width={800}
          alt="background shape"
          className="absolute hidden lg:block right-0 top-0 z-[-1]"
        />
        <div className="home_content">
          <div className="content_text text-center lg:text-left">
            <h1 className="text-6xl font-extrabold">
              Save <span className="text-orange-500">big</span> with our car
              rental
            </h1>
            <p className="mt-4 text-lg">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
          </div>
          <div className="home_buttons flex flex-col sm:flex-row gap-2 mt-4">
            <button
              onClick={scrollToBooking}
              className="bg-orange-500 py-4 px-9 ml-0 sm:ml-auto lg:ml-0 text-center text-white font-semibold rounded-sm hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Ride
              <FontAwesomeIcon icon={faCircleCheck} className="ml-1" />
            </button>
            <Link
              href="/"
              className="bg-black mr-0 sm:mr-auto lg:mr-0 py-4 px-9 text-white text-center font-semibold rounded-sm hover:bg-white hover:text-black transition-all duration-300 border-black border-2"
            >
              Learn More
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-1" />
            </Link>
          </div>
        </div>
        <div className="home_image">
          <Image
            src="/assets/car.png"
            height={500}
            width={700}
            alt="car"
            className="hidden lg:block"
          />
        </div>
      </section>
      <section
        className="py-12 px-4 md:px-24 w-full flex justify-center"
        id="booking"
      >
        <Element
          name="bookingForScroll"
          className="flex p-12 container flex-col gap-6 shadow-xl bg-white bg-[url('/assets/book-bg-shape.png')]"
        >
          <h1 className="text-3xl font-extrabold">Book a car</h1>
          <div className="booking_content text-xl flex-col lg:flex-row flex gap-6 justify-between">
            <div className="flex flex-col justify-between gap-3 w-full">
              <label className="font-bold">
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-orange-500 mr-2"
                />
                Select Your Car Type <span className="text-orange-500">*</span>
              </label>
              <CustomSelect
                id="car-select"
                defaultValue="Select Your Car"
                values={models.map((m: Model) => m.rentName)}
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
              />
            </div>
            <div className="flex flex-col justify-between gap-3 w-full self-end">
              <button className="bg-orange-500 py-3 px-9 text-white font-semibold rounded-sm hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Search
              </button>
            </div>
          </div>
        </Element>
      </section>
      <section
        className="flex flex-col gap-6 py-12 px-4 md:px-24 items-center bg-gradient-to-b w-full"
        style={{ background: "linear-gradient(180deg,#f8f8f8 20%,#fff 80%)" }}
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
      <section
        className="flex flex-col items-center text-center py-12 px-4 md:px-24 bg-white w-full"
        id="pick-car"
      >
        <h2 className="font-bold text-2xl">Vehicle Models</h2>
        <h1 className="font-extrabold text-5xl">Our rental feet</h1>
        <p className="text-xl mt-4 text-gray-500 w-full lg:w-1/2 mb-4">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
        <CarPicker models={models} />
      </section>
      <section className="flex flex-col items-center text-center gap-2 py-12 px-4 md:px-24 text-white bg-gray-950 w-full">
        <span className="text-5xl font-black">
          Save big with our cheap car rental!
        </span>
        <span className="text-2xl">
          Top Airports. Local Suppliers.{" "}
          <span className="text-orange-500">24/7</span> Support.
        </span>
      </section>
      <section
        className="flex flex-col items-center text-center gap-2 py-12 px-4 md:px-24 w-full bg-[url('/assets/skrrt.png')] bg-no-repeat bg-cover bg-white"
        id="testimonials"
      >
        <Image
          src="/assets/cars-showoff.png"
          width={800}
          height={800}
          alt="cars showoff image"
        />
        <div className="flex flex-col lg:flex-row gap-16 text-lg justify-between">
          <div className="flex flex-col w-full lg:w-[55%] text-left">
            <h4 className="font-bold text-2xl">Why Choose Us</h4>
            <h2 className="font-bold text-5xl">
              Best valued deals you will ever find
            </h2>
            <p className="text-gray-500 mt-4">
              Discover the best deals you&apos;ll ever find with our unbeatable
              offers. We&apos;re dedicated to providing you with the best value
              for your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don&apos;t miss out on your chance
              to save big.
            </p>
            <button className="bg-orange-500 mx-auto lg:mx-0 py-4 px-6 w-full md:w-1/3 text-white mt-4 font-extrabold shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:bg-orange-600 hover:shadow-[6px_6px_2px_2px_rgba(0,0,0,0.1)] transition duration-200">
              Find Details
            </button>
          </div>
          <div className="flex flex-col gap-8 w-full justify-center items-center lg:w-1/3 text-center lg:text-left">
            <div className="flex flex-col items-center ml-0 lg:ml-auto lg:flex-row gap-4">
              <Image
                src="/assets/cross-country-drive.png"
                height={100}
                width={100}
                alt="backround car tire shape"
              />
              <div>
                <h4 className="font-bold text-2xl">Cross Country Drive</h4>
                <p className="text-gray-500">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center ml-0 lg:ml-auto lg:flex-row gap-4">
              <Image
                src="/assets/all-inclusive-pricing.png"
                height={100}
                width={100}
                alt="backround car tire shape"
              />
              <div>
                <h4 className="font-bold text-2xl">All Inclusive Pricing</h4>
                <p className="text-gray-500">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center ml-0 lg:ml-auto lg:flex-row gap-4">
              <Image
                src="/assets/no-hidden-charges.png"
                height={100}
                width={100}
                alt="backround car tire shape"
              />
              <div>
                <h4 className="font-bold text-2xl">No Hidden Charges</h4>
                <p className="text-gray-500">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col items-center text-center gap-2 py-12 px-12 lg:px-4 xl:px-24 w-full bg-[#F8F8F8]"
        id="rewiews"
      >
        <h4 className="font-bold text-2xl">Reviewed by People</h4>
        <h2 className="font-bold text-5xl">Client&apos;s Testimonials</h2>
        <p className="text-gray-500 w-full lg:w-1/2">
          Discover the positive impact we&apos;ve made on the our clients by
          reading through their testimonials. Our clients have experienced our
          service and results, and they&apos;re eager to share their positive
          experiences with you.
        </p>
        <Slider />
      </section>
      <section
        className="flex flex-col items-center text-center gap-2 py-12 px-4 md:px-24 w-full bg-white"
        id="faq"
      >
        <h5 className="font-bold text-xl">FAQ</h5>
        <h2 className="font-bold text-5xl">Frequently Asked Questions</h2>
        <p className="text-gray-500 w-full lg:w-1/2 text-lg">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
        <InfoDrop />
      </section>
      <section
        className="flex flex-col items-start text-left gap-2 py-24 px-4 md:px-24 w-full bg-[#F8F8F8] text-lg bg-[url('/assets/bg-download.png')] h-auto bg-cover bg-no-repeat"
        id="download-app"
      >
        <div className="w-full xl:w-1/2">
          <span>
            <h2 className="text-5xl font-bold">
              Download our app to get most out of it
            </h2>
            <p className="mt-4 text-lg w-2/3">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
          </span>
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <DownloadButton store="App Store" />
            <DownloadButton store="Google Play" />
          </div>
        </div>
      </section>
      {fastScrollVisible && (
        <button
          className="fixed top-[90%] z-10 left-[75%] lg:left-[95%] bg-orange-500 border-[#E9E9E9] text-white px-3 py-2 hover:text-black hover:bg-white border-2 hover:border-black"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </div>
  );
}

/*
 */
