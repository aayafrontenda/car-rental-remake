"use client";
import Image from "next/image";
import { useEffect, useState, useId } from "react";
import MemberCard from "../components/MemberCard";
import { Member } from "@/Types";
import BlackContactContainer from "../components/BlackContactContainer";

export default function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/data/team.json")
      .then((data) => data.json())
      .then((data) => {
        setMembers(data.data);
      });
  }, []);
  const id = useId();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Image
        src={"/assets/bg-not-home.png"}
        width={1920}
        height={400}
        alt="about image"
        className="w-full absolute top-0 left-0 z-[-1] opacity-10"
      />
      <section className="py-12 px-4 md:px-24 flex w-full " id="about-company">
        <span>
          <h2 className="text-4xl font-semibold">Our Team</h2>
          <h4 className="text-lg font-semibold mt-4">Home / Our Team</h4>
        </span>
      </section>
      <section
        className="py-12 px-4 md:px-24 flex w-full h-full bg-white"
        id="our-team"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member: Member, index) => (
            <MemberCard
              name={member.name}
              position={member.position}
              src={"/assets/luke-miller.png"}
              contact={member.contact}
              key={`${id}-${index}`}
            />
          ))}
        </div>
      </section>
      <BlackContactContainer />
    </div>
  );
}
