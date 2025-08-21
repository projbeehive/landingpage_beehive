"use client"

import { MapPin } from "lucide-react";
import BrazilMap from "@/components/brasil-map";
import { useState } from "react";

export default function LocationSection() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Onde os projetos atuam
            </h2>

            <div className="space-y-3 text-gray-700">
              <p className="text-base sm:text-lg">
                Levamos oportunidades a jovens em todo o Brasil por meio de três iniciativas:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm sm:text-base">
                <li>
                  <strong>ISMART</strong>: presente em cidades específicas —
                  <span className="ml-1">
                    Belo Horizonte (MG), Rio de Janeiro (RJ), São Paulo (capital, SP) e São José dos Campos (SP).
                  </span>
                </li>
                <li>
                  <strong>ISMART Academia Digital</strong>: disponível em
                  <span className="ml-1">
                    todas as cidades do Brasil que <em>não</em> sejam as quatro acima.
                  </span>
                </li>
                <li>
                  <strong>Instituto Ponte</strong>: disponível em
                  <span className="ml-1">qualquer cidade do Brasil.</span>
                </li>
              </ul>
            </div>

            {/* Estado selecionado (opcional) */}
            {selectedState && (
              <div
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700"
                aria-live="polite"
              >
                <div>
                  <span className="font-semibold">Estado selecionado:</span>{" "}
                  {selectedState}
                </div>
                <button
                  className="mt-2 inline-flex text-primary underline hover:no-underline"
                  onClick={() => setSelectedState(null)}
                >
                  limpar seleção
                </button>
              </div>
            )}

            {/* Destaques (opcional) */}
            <div className="space-y-4">
              {[
                { city: "São Paulo (capital)", state: "SP", description: "ISMART; Instituto Ponte" },
                { city: "São José dos Campos", state: "SP", description: "ISMART; Instituto Ponte" },
                { city: "Rio de Janeiro (capital)", state: "RJ", description: "ISMART; Instituto Ponte" },
                { city: "Belo Horizonte", state: "MG", description: "ISMART; Instituto Ponte" },
              ].map((loc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold">
                      {loc.city}, {loc.state}
                    </span>
                    <span className="text-gray-600 ml-2">- {loc.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa (responsivo) */}
          <div className="flex justify-center items-center">
            <div
              className="
                w-full
                max-w-[680px]
                min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[640px]
                flex
              "
            >
              <BrazilMap
                className="w-full h-full"
                onStateClick={(stateName) => setSelectedState(stateName)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
