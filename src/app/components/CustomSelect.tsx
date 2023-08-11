"use client";

import { useRef, useState, useId } from "react";
import ReactDOM from "react-dom";
import { receiveMessageOnPort } from "worker_threads";

function SelectModal({ coords, id, values, handleOptionClick }: any) {
  //to create a portal, use the createPortal function:
  const optionId = useId();
  return ReactDOM.createPortal(
    <div
      className={`modal absolute mt-3 -ml-4 mb-0`}
      style={{ width: coords.width }}
    >
      <ul className="bg-white ">
        {values.map((val: string, index: number) => (
          <li
            key={`${optionId}-${index}`}
            onClick={handleOptionClick}
            className="py-2 px-4 outline-noned hover:bg-orange-500 hover:text-white cursor-pointer w-full"
          >
            {val}
          </li>
        ))}
      </ul>
    </div>,
    document.getElementById(id) as Element
  );
}

interface CustomSelectProps {
  id: string;
  defaultValue: string;
  values: string[];
}

export default function CustomSelect({
  id,
  defaultValue,
  values,
}: CustomSelectProps) {
  const coords = useRef({}); // takes current button coordinates
  const modalRef: any = useRef();
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  document.body.addEventListener("click", (e: any) => {
    if (
      modalRef?.current?.innerHTML
        .toString()
        .toString()
        .includes(!e?.target?.innerHTML)
    ) {
      setIsOpen(false);
    }
  });

  const manageClick = (e: any) => {
    const rect = e?.target?.getBoundingClientRect();
    const parentRect = e?.target?.parentElement?.getBoundingClientRect();
    coords.current = {
      width: e.target.children.length !== 0 ? rect.width : parentRect.width,
    };
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (e: any) => {
    setSelected(e?.target?.innerHTML);
    setIsOpen(false);
  };

  return (
    <div className="bg-white" ref={modalRef}>
      <div
        className="py-2 px-4 outline-none border-2 border-grey-300 rounded-md cursor-pointer w-full"
        onClick={(e) => manageClick(e)}
        id={id}
      >
        <span
          className={
            "w-full flex " + (defaultValue === selected ? "text-gray-500" : "")
          }
        >
          {selected}
        </span>
      </div>
      {isOpen && (
        <SelectModal
          coords={coords.current}
          id={id}
          handleOptionClick={handleOptionClick}
          values={values}
        />
      )}
    </div>
  );
}
