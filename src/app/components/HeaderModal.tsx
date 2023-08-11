import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";
import Link from "next/link";
import ReactDOM from "react-dom";

export default function HeaderModal({
  closeModal,
  isOpen,
}: {
  closeModal: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}) {
  return ReactDOM.createPortal(
    <div
      className={
        `modal absolute top-0 w-full h-full bg-white flex flex-col p-8 transition-all duration-500 ease-in-out ` +
        (isOpen ? "left-0" : "left-[-100%]")
      }
    >
      <button
        onClick={closeModal}
        className="ml-auto text-4xl hover:text-orange-500 mb-10"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <ul className="h-full text-center flex flex-col justify-center">
        <li className="py-2 px-4 outline-none text-4xl hover:text-orange-500 cursor-pointer w-full">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 px-4 outline-none text-4xl hover:text-orange-500 cursor-pointer w-full">
          <Link href="/about">About</Link>
        </li>
        <li className="py-2 px-4 outline-none text-4xl hover:text-orange-500 cursor-pointer w-full">
          <Link href="/models">Models</Link>
        </li>
        <li className="py-2 px-4 outline-none text-4xl hover:text-orange-500 cursor-pointer w-full">
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <li className="py-2 px-4 outline-none text-4xl hover:text-orange-500 cursor-pointer w-full">
          <Link href="/team">Our Team</Link>
        </li>
        <li className="py-2 px-4 outline-none text-4xl hover:text-orange-500 cursor-pointer w-full">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>,
    document.body
  );
}
