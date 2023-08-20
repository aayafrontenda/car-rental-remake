import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import BlackContactContainer from "../components/BlackContactContainer";
export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Image
        src={"/assets/bg-not-home.png"}
        width={1920}
        height={400}
        alt="about image"
        className="w-full absolute top-0 left-0 z-[-1] opacity-10"
      />
      <section className="py-12 px-8 md:px-24 flex w-full " id="about-company">
        <span>
          <h2 className="text-4xl font-semibold">Contact Information</h2>
          <h4 className="text-lg font-semibold mt-4">Home / Contacts</h4>
        </span>
      </section>
      <section
        className="py-12 px-8 md:px-24 flex w-full h-full bg-white"
        id="contacts"
      >
        <div className="flex flex-col w-full md:flex-row justify-center gap-32 bg-[url('/assets/world.png')] bg-auto bg-no-repeat bg-center">
          <div className="w-full text-center md:text-left md:w-1/3 flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Need aditional information?</h2>
            <p className="text-lg text-gray-500">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <span className="text-bold hover:text-orange-500 transition-all duration-200">
              <a href="tel:123-456-7890" className="font-semibold">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (123)-456-7890
              </a>
            </span>
            <span className="text-bold hover:text-orange-500 transition-all duration-200">
              <a href="mailto:carrental@gmail.com" className="font-semibold">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                carrental@gmail.com
              </a>
            </span>
            <span className="text-bold hover:text-orange-500 transition-all duration-200">
              <a className="font-semibold">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                Belgrade, Serbia
              </a>
            </span>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div>
              <label className="text-lg font-semibold">
                Full Name
                <span className="text-orange-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-gray-100 rounded-sm mt-2 outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="text-lg font-semibold">
                Email<span className="text-orange-500 ml-1">*</span>
              </label>
              <input
                type="email"
                className="w-full px-6 py-4 bg-gray-100 rounded-sm mt-2 outline-none"
                placeholder="john-doe@gmail.com"
                required
              />
            </div>
            <div>
              <label className="text-lg font-semibold">
                Tell us about it<span className="text-orange-500 ml-1">*</span>
              </label>
              <textarea
                className="w-full px-6 py-4 bg-gray-100 rounded-sm mt-2 outline-none h-48"
                placeholder="Your opinion..."
                required
              />
            </div>
            <button className="py-4 px-8 bg-orange-500 text-white text-center text-xl font-semibold shadow-lg shadow-orange-400 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-400">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </section>
      <BlackContactContainer />
    </div>
  );
}
