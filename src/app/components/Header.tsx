"use client";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const DynamicModal = dynamic(
  () => {
    return import("./HeaderModal");
  },
  { ssr: false }
);

export default function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  function closeModal() {
    setBurgerMenuOpen(false);
  }
  return (
    <nav>
      <div className="py-12 px-4 md:px-24 navbar flex justify-between items-center box-border">
        <div className="nav_logo">
          <Link href="/">
            <Image src="/assets/logo.png" height={100} width={100} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block nav_links">
          <ul className="flex gap-2 xl:gap-6 font-bold text-sm xl:text-xl">
            <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
              <Link href="/vehicle-models">Vehicle Models</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
              <Link href="/team">Our Team</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block nav_buttons">
          <button className="font-bold mx-6 cursor-pointer hover:text-orange-500 transition-all duration-300">
            <Link href="/sign-in">Sign In</Link>
          </button>
          <button className="bg-orange-500 py-2 px-6 text-white font-semibold rounded-sm hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link href="sign-up">Sign Up</Link>
          </button>
        </div>
        <div
          className="burger block lg:hidden text-4xl hover:text-orange-500"
          onClick={() => setBurgerMenuOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <DynamicModal closeModal={closeModal} isOpen={burgerMenuOpen} />
      </div>
    </nav>
  );
}
