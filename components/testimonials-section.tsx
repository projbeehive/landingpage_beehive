"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  MapPin,
  Calendar,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// =========================
// Tipos e dados (8º e 1º ano)
// =========================

type Testimonial = {
  name: string;
  grade: "8º ano" | "1º ano";
  city: string;
  state: string;
  year: string;
  image?: string;
  projects: string[]; // ["ISMART", "ISMART Academia Digital", "Instituto Ponte"]
  story: string; // depoimento curto, foco educacional
  achievements: string[]; // aprovações, bolsas, trilhas concluídas
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Beatriz",
    grade: "8º ano",
    city: "Belo Horizonte",
    state: "MG",
    year: "2024",
    image: "/anabeatriz.png",
    projects: ["ISMART"],
    story:
      "Eu sempre gostei de estudar, mas não sabia por onde começar para as provas. Com os simulados e materiais, consegui me organizar e entender o edital.",
    achievements: [
      "Aprovação na 1ª fase do ISMART",
      "Bolsa completa no colégio da cidade",
      "Aluna destaque dentro do projeto",
    ],
  },
  {
    name: "João Pedro",
    grade: "1º ano",
    city: "Rio de Janeiro",
    state: "RJ",
    year: "2025",
    image: "/joaopedro.png",
    projects: ["Instituto Ponte"],
    story:
      "Usei as aulas digitais e o apoio dos professores para treinar. Melhorei muito em lógica e matemática, que me ajudou bastante.",
    achievements: [
      "90% de acerto nas questões de matemática",
      "Trilha de aulas finalizada",
      "Primeiro da família a conquistar posições como essa na escola",
    ],
  },
  {
    name: "Marcos Vinícius",
    grade: "1º ano",
    city: "São José dos Campos",
    state: "SP",
    year: "2024",
    image: "/marcosvinicius.png",
    projects: ["ISMART"],
    story:
      "As rotas de estudo me ajudaram a criar rotina. Com os horários de aulas e apoio dos professores, conquistei bolsa integral em uma escola particular.",
    achievements: [
      "Bolsa integral em escola parceira",
      "Notas ótimas dentro das provas",
      "Participação em olimpíada escolar de matemática",
    ],
  },
];

export default function TestimonialsSectionFixed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Depoimentos de <span className="text-[#FFAE11]">Estudantes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Histórias reais de quem usou nossos materiais e trilhas para se preparar para processos de seleção e bolsas.
            Sem mentoria e sem promessas — apenas preparação clara, prática e objetiva.
          </p>
        </div>

        {/* Canvas responsivo */}
        <div className="relative max-w-6xl mx-auto">
          {/* Em mobile: min-h + scroll interno; Em md+: altura fixa estável */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[560px] md:h-[560px] lg:h-[620px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* LADO ESQUERDO */}
              <div className="bg-gradient-to-br from-[#FFAE21] to-[#FFAE11] p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10 flex flex-col h-full">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6 opacity-80" />

                  <div className="flex items-center gap-4 sm:gap-5">
                    <img
                      src={t.image || "/placeholder.svg"}
                      alt={`Foto de ${t.name}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white/30"
                    />
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-2xl font-bold leading-tight">
                        {t.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/90 mt-2 text-sm sm:text-base">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{t.grade}</span>
                        <span className="opacity-60">•</span>
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>
                          {t.city}, {t.state}
                        </span>
                        <span className="opacity-60 hidden sm:inline">•</span>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:inline" />
                        <span className="hidden sm:inline">{t.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Chips de projetos */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                    {t.projects.map((p) => (
                      <span
                        key={p}
                        className="text-xs sm:text-sm bg-white/20 backdrop-blur px-2.5 sm:px-3 py-1 rounded-full border border-white/30"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Depoimento curto */}
                  <div className="mt-5 sm:mt-6 text-white/95 italic leading-relaxed line-clamp-5 sm:line-clamp-4 text-sm sm:text-base">
                    “{t.story}”
                  </div>

                  <div className="mt-auto" />
                </div>
              </div>

              {/* LADO DIREITO (scroll interno se necessário) */}
              <div className="p-8 sm:p-10 lg:p-12 h-full overflow-y-auto">
                <div className="bg-gray-50 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 text-gray-800">
                    <Trophy className="w-5 h-5" />
                    <h4 className="font-bold">Conquistas</h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-700">
                    {t.achievements.map((a, i) => (
                      <li key={i} className="bg-white rounded-lg border border-gray-200 px-3 py-2">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Microcopy */}
                <p className="text-xs text-gray-500 mt-3">
                  Depoimentos de estudantes do 8º e 1º ano. Resultados variam conforme dedicação e contexto do aluno.
                </p>
              </div>
            </div>
          </div>

          {/* Navegação lateral (somente md+) */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-[-18px] top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
              onClick={prev}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
              onClick={next}
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Navegação inferior (somente mobile) */}
          <div className="mt-4 flex gap-3 md:hidden">
            <Button
              variant="outline"
              className="flex-1 py-6 text-base"
              onClick={prev}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Anterior
            </Button>
            <Button
              className="flex-1 py-6 text-base bg-gradient-to-r from-[#FFAE11] to-[#FFAE41] hover:from-amber-600 hover:to-orange-600 text-white"
              onClick={next}
              aria-label="Próximo"
            >
              Próximo
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all ${
                  i === currentIndex ? "bg-amber-500 scale-110 md:scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ver depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Quer se preparar para processos seletivos e bolsas com trilhas e simulados?
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#FFAE11] to-[#FFAE41] hover:from-amber-600 hover:to-orange-700 text-white text-lg px-6 sm:px-8 md:px-10 py-4 rounded-xl"
          >
            Começar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
