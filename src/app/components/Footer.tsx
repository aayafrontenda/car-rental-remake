import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 text-lg py-12 px-4 md:px-24 text-center lg:text-left">
      <ul className="flex flex-col gap-6 w-full lg:w-1/4">
        <li className="text-3xl">
          <span className="font-bold">CAR</span> Rental
        </li>
        <li className="text-gray-500">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </li>
        <li className="text-bold hover:text-orange-500 transition-all duration-500">
          <a href="tel:123-456-7890">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (123)-456-7890
          </a>
        </li>
        <li className="text-bold hover:text-orange-500 transition-all duration-500">
          <a href="mailto:carrental@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            carrental@gmail.com
          </a>
        </li>
        <li className="hover:text-orange-500 transition-all duration-500">
          <a
            target="_blank"
            href="https://xpeedstudio.com/"
            rel="noopener noreferrer"
          >
            Degisn by XpeedStudio
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-6 w-full lg:w-1/4 text-lg">
        <li className="text-3xl">
          <span className="font-bold">COMPANY</span>
        </li>
        <li className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
          New York
        </li>
        <li className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
          Careers
        </li>
        <li className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
          Mobile
        </li>
        <li className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
          <a
            target="_blank"
            href="https://xpeedstudio.com/"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
          <a
            target="_blank"
            href="https://xpeedstudio.com/"
            rel="noopener noreferrer"
          >
            How we work
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-6 w-full lg:w-1/4 text-lg">
        <li className="text-3xl">
          <span className="font-bold">WORKING HOURS</span>
        </li>
        <li>Mon - Fri: 9:00AM - 9:00PM</li>
        <li>Sat: 9:00AM - 19:00PM</li>
        <li>Sun: Closed</li>
      </ul>
      <ul className="flex flex-col gap-6 w-full lg:w-1/4 text-lg">
        <li className="text-3xl">
          <span className="font-bold">SUBSCRIPTION</span>
        </li>
        <li>Subscribe your Email address for latest news & updates.</li>
        <li>
          <input
            className="bg-gray-300 placeholder:text-gray-500 placeholder:text-center py-4 w-full px-16 rounded0-sm text-center"
            placeholder="Enter Email Address"
          ></input>
        </li>
        <li>
          <button className="bg-orange-500 py-4 px-9 text-white font-semibold rounded-sm w-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Subscribe
          </button>
        </li>
      </ul>
    </div>
  );
}
