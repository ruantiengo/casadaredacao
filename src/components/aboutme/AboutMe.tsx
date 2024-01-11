import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="pt-[64px] container flex flex-col items-center">
      <h1 className="text-[48px] font-bold">Quem é Ana?</h1>
      <div className="flex gap-12 mt-8">
        <span className="text-lg text-left">
          <p>
            Ana Clara é uma jovem apaixonada pela arte da comunicação e
            expressão criativa. A Desde cedo, demonstrou interesse por idiomas e
            pela capacidade transformadora da linguagem. Essa paixão a levou a
            se graduar em Letras pela renomada Universidade Federal de Minas
            Gerais (UFMG), onde aprofundou seus conhecimentos em língua
            portuguesa, literatura e língua inglesa.
          </p>
          <p>
            Paralelamente à sua formação em Letras, Ana Clara decidiu explorar
            seu lado criativo e se aventurou no mundo do Design de Moda. Essa
            jornada trouxe uma perspectiva única para sua bagagem de
            habilidades, agregando criatividade, inovação e uma abordagem
            estética refinada aos seus talentos linguísticos. Durante sua
            trajetória acadêmica, Ana Clara mergulhou no estudo do idioma
            inglês, expandindo suas habilidades linguísticas e culturais.
          </p>
          <p>
            Sua dedicação e excelência acadêmica nessa área a destacaram entre
            seus pares. Além de sua formação, Ana Clara é uma entusiasta do
            ensino e está em constante busca por maneiras inovadoras de
            transmitir conhecimento. Sua paixão pela educação e sua abordagem
            dinâmica tornam suas aulas envolventes e inspiradoras.
          </p>
        </span>
        <Image
          src={"/ana-sem-fundo.png"}
          width={400}
          height={200}
          alt=""
          className="linearPurple rounded-lg hidden md:block w-96 h-48 2xl:w-[400px] 2xl:h-[400px]"
        />
      </div>
    </div>
  );
};

export default AboutMe;
