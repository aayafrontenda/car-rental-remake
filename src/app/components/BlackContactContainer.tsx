import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default function BlackContactContainer() {
  return (
    <section className="flex flex-col md:flex-row items-center h-full justify-center text-center gap-8 text-white w-full">
      <div className="bg-[url('/assets/bg-contact-car.png')] w-full py-20 px-4 md:px-24 flex flex-col xl:flex-row gap-8 justify-center items-center relative">
        <div className="w-full h-full bg-gray-900 absolute bg-opacity-70"></div>
        <span className="text-3xl font-black relative">
          Book a car by getting in touch with us
        </span>
        <span className="text-3xl relative">
          <span className="text-orange-500">
            <span className="text-bold hover:text-orange-500 transition-all duration-200">
              <a href="tel:123-456-7890" className="font-semibold">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (123)-456-7890
              </a>
            </span>
          </span>
        </span>
      </div>
    </section>
  );
}
