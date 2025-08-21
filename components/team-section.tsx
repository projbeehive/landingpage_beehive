"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "Matheus Ribeiro", role: "Diretor de Pessoas", image: "/math.png", bio: "Desenvolvimento interno e gestão de talentos" },
  { name: "João Paulo", role: "Cofundador", image: "/jp.png", bio: "Head de tecnologia e negócios" },
  { name: "Gabriel Pelinsari", role: "Confundador", image: "/gabriel.png", bio: "Head de marketing e desenvolvedor interno" },
  { name: "Lauro Emmanuel", role: "Diretor Acadêmico", image: "/lauro.png", bio: "Educação Digital e inovação pedagógica" },
];

function useItemsPerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);      // lg
      else if (w >= 768) setPerView(2);  // md
      else setPerView(1);                // sm
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return perView;
}

export default function TeamSection() {
  const perView = useItemsPerView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxStart = Math.max(0, teamMembers.length - perView);
  // sempre mantém o índice válido quando o perView muda
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxStart));
  }, [perView, maxStart]);

  const slideWidth = useMemo(() => 100 / perView, [perView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxStart ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxStart : prev - 1));
  };

  const pageCount = Math.ceil(teamMembers.length / perView);
  const activePage = Math.floor(currentIndex / perView);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Nossa Equipe</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Profissionais experientes dedicados ao seu sucesso
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-4 flex-shrink-0"
                  style={{ width: `${slideWidth}%` }} // largura dinâmica por breakpoint
                >
                  <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`Foto de ${member.name}`}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2 sm:mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles (visíveis em todas as larguras; maiores no mobile para toque) */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur hover:bg-white shadow-md"
            onClick={prevSlide}
            aria-label="Membro anterior da equipe"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur hover:bg-white shadow-md"
            onClick={nextSlide}
            aria-label="Próximo membro da equipe"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Paginadores */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * perView)}
              aria-label={`Ir para grupo ${i + 1} da equipe`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === activePage ? "bg-primary scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
