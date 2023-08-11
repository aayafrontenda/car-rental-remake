import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useId } from "react";
const faq = [
  {
    question: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    question: "How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    question: "How do I find such low rental car prices?",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];
export default function InfoDrop() {
  const [active, setActive] = useState(1000);
  const id = useId();
  return (
    <>
      <div className="mt-4 flex flex-col w-full md:w-[80%] lg:w-[55%] items-center shadow-lg border-2 border-gray-100">
        {faq.map((x, index) => (
          <div
            className={`w-full ${
              active === index ? "text-white" : "hover:text-black"
            }`}
            key={`${id}-${index}`}
          >
            <button
              className={`py-4 w-full px-4 lg:px-12 font-medium text-xl transition-all duration-500 flex items-center justify-between ${
                active === index
                  ? "bg-orange-500"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() =>
                setActive((prev: number) => {
                  if (prev === index) return 1000;
                  return index;
                })
              }
            >
              {`${index + 1}. ${x.question}`}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="transition-all duration-100"
              />
            </button>
            <p
              className={`mx-auto w-full text-left text-gray-500 overflow-hidden transition-all duration-500 ${
                active === index ? "max-h-64 py-4 px-4 lg:px-12" : "max-h-0"
              }`}
            >
              {x.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
