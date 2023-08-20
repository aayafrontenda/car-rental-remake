import React from "react";
import Image from "next/image";
import Slider from "../components/Slider";
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
          <h2 className="text-4xl font-semibold">Testimonials</h2>
          <h4 className="text-lg font-semibold mt-4">Home / Testimonials</h4>
        </span>
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
      <BlackContactContainer />
    </div>
  );
}
