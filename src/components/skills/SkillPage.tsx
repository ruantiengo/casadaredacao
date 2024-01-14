import React from "react";
import SkillCard from "./SkillCard";

const SkillPage = () => {
  return (
    <div className="min-h-screen container flex items-center pt-24 flex-col">
      <h1 className="text-[48px] font-bold">Serviços</h1>
      <span className="text-lg text-muted-foreground text-center">
        Curso on-line, de alto desempenho, com aulas semanais ao vivo, material
        exclusivo e atualizado, plantões, correções e muito mais!
      </span>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 mt-8 md:mt-12">
        <SkillCard
          title="Aula de inglês"
          description="Domine o idioma. Listening, speaking, writing and reading."
          content="Converse, compreenda e domine o inglês."
        />
        <SkillCard
          title="Aulas de Redação"
          description="Aprimore suas habilidades de escrita para o ENEM, vestibulares e concursos."
          content="Desenvolva sua capacidade de expressão e argumentação."
        />
        <SkillCard
          title="Aulas de Português Particulares"
          description="Melhore seu domínio no idioma português!"
          content="Aprimore gramática, vocabulário e comunicação escrita."
        />
        <SkillCard
          title="Atividades para professores"
          description="Material pedagógico para professores."
          content="Material de qualidade para seus alunos."
        />
      </div>
    </div>
  );
};

export default SkillPage;
