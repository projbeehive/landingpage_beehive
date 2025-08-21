import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Users, Award, Briefcase } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#FFAE11]/10 via-[#FFAE11]/10 to-[#FFAE11]/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFAE11] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FFAE11] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FFAE11] rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Image 
              src="/logo.svg" 
              alt="Beehive Logo"
              width={48}
              height={48}
              className="pointer-events-none"
            />

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Conectando</span>
                <br />
                <span className="bg-gradient-to-r from-[#FFAE11] to-[#FFAE11] bg-clip-text text-transparent">
                  Talentos
                </span>
                <br />
                <span className="text-gray-900">e Oportunidades</span>
              </h1>

              <p className="text-xl md:text-xl text-gray-600 leading-relaxed max-w-xl">
                <strong>Aulas de capacitação</strong> para projetos sociais, desenvolvimento de soft skills e mentoria com bolsistas.
                <span className="text-[#FFAE11] font-semibold">
                  {" "}
                  Nossas aprovações são 6x maiores que a média dos projetos abordados.
                </span>
              </p>
            </div>



            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFAE11] to-[#FFAE11] hover:from-[#FFAE11]/80 hover:to-[#FFAE11]/80 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero me inscrever agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#FFAE11] text-[#FFAE11] hover:bg-[#FFAE11]/10 text-lg px-8 py-4 rounded-xl bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Sou uma organização
              </Button>
            </div>
          </div>

          {/* Interactive Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Painel do Aluno</h3>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progresso do Curso</span>
                      <span className="text-sm text-yellow-400 font-bold">78%</span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-yellow-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-400">12</div>
                      <div className="text-xs text-yellow-600">Projetos</div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-400">4.8</div>
                      <div className="text-xs text-yellow-600">Avaliação</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="text-sm font-medium mb-2">Próxima Aulas</div>
                    <div className="text-xs text-yellow-600">
                      <strong>Amanhã, 14h</strong> - Preparação para entrevistas técnicas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Award className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
