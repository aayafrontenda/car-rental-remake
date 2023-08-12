import { Member } from "@/Types";
import Image from "next/image";
import { useId } from "react";
import Flashcard from "../components/Flashcard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ContactIcons: {
  [key: string]: any;
} = {
  email: {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    action: "mailto:car-rental@gmail.com",
  },
  phone: {
    icon: <FontAwesomeIcon icon={faPhone} />,
    action: "tel:123-456-7890",
  },
  telegram: {
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    action: "https://t.me/",
  },
};

export default function MemberCard({ name, position, src, contact }: Member) {
  const id = useId();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <div className="h-full w-full">
      <div className="h-full w-full justify-center rounded-sm shadow-[0px_20px_10px_0px_rgba(0,0,0,0.08)] bg-white">
        <Image
          src={src}
          width={300}
          height={300}
          alt={`member image - ${name}`}
          className="bg-gray-300 bg-opacity-50"
        />
        <span className="text-center h-full">
          <h2 className="text-3xl font-bold mt-2">{name}</h2>
          <Flashcard
            front={<h4 className="text-xl text-gray-500">{position}</h4>}
            back={
              <div className="flex gap-4 justify-center">
                {Object.keys(contact).map((c, index) => (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    key={`${id}-${index}`}
                    className="bg-black text-white py-1 px-2 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border-2 hover:border-black"
                    style={{ transform: "scale(-1, 1)" }}
                    onClick={handleClick}
                    href={ContactIcons[c].action}
                  >
                    {ContactIcons[c].icon}
                  </a>
                ))}
              </div>
            }
          />
        </span>
      </div>
    </div>
  );
}
