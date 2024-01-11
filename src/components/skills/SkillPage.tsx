import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import SkillCard from "./SkillCard";

const SkillPage = () => {
  return (
    <div className="min-h-screen container flex items-center pt-24 flex-col">
      <h1 className="text-[48px] font-bold">Serviços</h1>
      <span className="text-lg text-muted-foreground text-center">
        Curso on-line, de alto desempenho, com aulas semanais ao vivo, material
        exclusivo e atualizado, plantões, correções e muito mais!
      </span>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-8 md:mt-12">
        <SkillCard
          title="Aula de inglês"
          description="Aprenda inglês de forma prática!"
          content="Converse, compreenda e domine o inglês."
        />
        <SkillCard
          title="Aulas de Redação"
          description="Aprenda a arte da escrita persuasiva!"
          content="Desenvolva sua capacidade de expressão e argumentação."
        />
        <SkillCard
          title="Aulas de Português Particulares"
          description="Melhore seu domínio no idioma português!"
          content="Aprimore gramática, vocabulário e comunicação escrita."
        />
      </div>
    </div>
  );
};

export default SkillPage;
