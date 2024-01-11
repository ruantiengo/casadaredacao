import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container transition-all duration-150 h-screen flex items-center justify-center">
      <div className="flex w-full items-center justify-center relative flex-col xl:justify-evenly xl:flex-row gap-8 xl:gap-0">
        <div className="flex flex-col items-start justify-start text-start">
          <h1 className="text-[42px] lg:text-[48px] 2xl:text-[64px] font-bold lg:w-[540px] pb-8">
            Venha aprender a fazer uma boa redação.
          </h1>
          <span className="text-md lg:text-xl lg:w-[400px]">
            Curso on-line, de alto desempenho, com aulas semanais ao vivo,
            material exclusivo e atualizado, plantões, correções e muito mais!
          </span>
          <Link href="https://wa.me/553199381037" target="_blank">
            <Button className="h-[50px] text-lg font-[500] mt-20">
              Entre em contato
            </Button>
          </Link>
        </div>
        <div className="hidden xl:block xl:w-[550px] xl:h-[550px]">
          <div className="w-[300px] h-[300px] xl:w-[550px] xl:h-[550px] linearPurple rounded-full animate-spin transition-all absolute"></div>
          <Image
            src={"/writing.png"}
            width={500}
            height={400}
            alt="Garota escrevendo redação"
            className="absolute flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
