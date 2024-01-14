import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="pt-[64px] container flex flex-col items-center">
      <h1 className="text-[48px] font-bold">Quem é Ana?</h1>
      <div className="flex gap-12 mt-8">
        <span className="text-lg text-left">
          <p>
            Sou Ana Clara, uma apaixonada pela arte da comunicação e expressão
            criativa. Desde cedo, meu interesse por idiomas e linguística me
            guiou até meus estudos na Universidade Federal de Minas Gerais
            (UFMG). Lá, aprofundei meus conhecimentos em Língua Portuguesa,
            Literatura e Língua Inglesa. Atualmente, faço pós-graduação em
            Educação Digital.
          </p>
          <p>
            Paralelamente à minha formação em Letras, decidi explorar meu lado
            criativo e me aventurei no mundo do Design de Moda. Essa jornada
            trouxe uma perspectiva única para minha bagagem de habilidades,
            agregando criatividade e inovação na minha maneira de ensinar.
          </p>
          <p>
            Por isso, é com grande entusiasmo que convido você a embarcar em uma
            jornada educacional comigo.
          </p>
        </span>
        <Image
          src={"/foto-ana.jpg"}
          width={400}
          height={200}
          alt=""
          className="linearPurple rounded-lg hidden md:block h-[400px] 2xl:w-[400px] 2xl:h-[400px]"
        />
      </div>
    </div>
  );
};

export default AboutMe;
