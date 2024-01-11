"use client";
import { ArrowBigLeft, ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Option = {
  name: string;
  comment: string;
  img: string;
  rate: number;
};
const Slider = () => {
  const options: Option[] = [
    {
      name: "Ruan Tiengo",
      comment:
        '"As aulas de inglês foram excelente, Ana tem muita paciencia e otimos pontos que fizeram obter 900 pontos na redação"',
      img: "/ruan.webp",
      rate: 5,
    },
  ];
  const [selected, setSelected] = useState(0);

  const selectedReview = (s: number) => (
    <div className="text-lg text-gray-100 transition-all duration-200 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center gap-6">
        <Image
          src={options[s].img}
          className="rounded-full"
          width={100}
          height={100}
          alt={""}
        ></Image>
        <div className="text-lg font-bold">{options[s].name}</div>
      </div>
      <div className="w-[70%] italic mt-4">{options[s].comment}</div>
      <div className="flex mt-4">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <div key={Math.random()}>
              <svg
                className={`w-8 h-8 ${
                  i <= options[s].rate ? "text-yellow-300" : ""
                } ms-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <>
      <div className="flex items-center mt- 2xl:mt-20">
        <ArrowLeft
          onClick={() => {
            setSelected((old) => {
              return old === 0 ? options.length - 1 : old - 1;
            });
          }}
          size={32}
          className="h-8 w-8 "
        />
        <div className="mt-4 mb-4 flex lg:w-[700px] w-[90%] h-[350px] bg-purple-700 rounded-xl items-center justify-center">
          {selectedReview(selected)}
        </div>
        <ArrowRight
          onClick={() => {
            setSelected((old) => {
              return old === options.length - 1 ? 0 : old + 1;
            });
          }}
          size={32}
          className="h-8 w-8"
        />
      </div>
      <div className="flex gap-4 mt-4">
        {options.map((t, i) => {
          return (
            <div
              key={Math.random()}
              onClick={() => {
                setSelected(i);
              }}
              className={`${
                selected === i ? "bg-purple-600" : "bg-gray-300"
              } h-2 w-2 rounded-full`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
