import { Button } from "@/components/ui/button"
import { Calendar, Users, Rocket, Globe, Zap } from "lucide-react"

export default function HistorySection() {
  const timelineItems = [
    {
      year: "2024",
      title: "O Começo de Tudo",
      description:
        "Nascemos da expectativa de devolver ao mundo as oportunidades que nos foram oferecidas. Fundado por bolsistas de colégios de excelência, acreditamos no potencial transformador da educação.",
      icon: <Calendar className="w-6 h-6" />,
      achievements: [
        "Primeira turma: 306 alunos corajosos",
        "Alta taxa de aprovação em processos seletivos",
        "Parceria com o projeto ISMART",
      ],
      completed: true,
      highlight: "🚀 Tudo começou com um formulário e uma sala no Teams",
    },
    {
      year: "2025",
      title: "Expansão da Equipe",
      description:
        "Criamos uma equipe dedicada de 15+ voluntários, incluindo professores e profissionais de diversas áreas. Juntos, ampliamos nosso alcance e impacto.",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "400+ alunos certificados com sucesso",
        "Áreas de atuação: tecnologia, pessoas, marketing e acadêmico",
        "Alta taxa de satisfação dos alunos",
      ],
      completed: true,
      highlight: "🏆 Reconhecimento do ISMART como projeto de impacto",
    },
    {
      year: "Em breve",
      title: "Expansão Nacional",
      description:
        "Nosso sonho: levar oportunidades tech para todo o Brasil. Tornar o Beehive um Hub de talentos e oportunidades, conectando alunos a empresas e projetos sociais.",
      icon: <Globe className="w-6 h-6" />,
      achievements: [
        "Parcerias com empresas líderes de tecnologia",
        "Expansão para 5 estados brasileiros",
        "Criação de uma plataforma online para cursos e mentorias",
      ],
      completed: false,
      highlight: "🌎 Seu futuro não tem fronteiras",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FFAE11] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Nossa{" "}
            <span className="bg-gradient-to-r from-[#FFAE11] to-orange-400 bg-clip-text text-transparent">
              Jornada
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            De uma ideia ousada a uma revolução na educação tech. Cada marco representa vidas transformadas e sonhos
            realizados.
          </p>
        </div>

        <div className="space-y-16 mb-16 relative">
          {/* Linha vertical central (oculta no mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FFAE11]/50 to-orange-500/50"></div>

          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                {/* Círculo conectivo */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFAE11]"></div>

                <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-2xl ${
                        item.completed ? "bg-[#FFAE11]" : "bg-gray-700"
                      } shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{item.year}</div>
                      <div className={`text-sm ${item.completed ? "text-[#FFAE11]" : "text-gray-400"}`}>
                        {item.completed ? "Conquistado" : "Em construção"}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#FFAE11]">{item.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.description}</p>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="text-sm text-[#FFAE11] font-semibold mb-3">{item.highlight}</div>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Zap className="w-4 h-4 text-[#FFAE11] flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final responsivo */}
        <div className="text-center bg-gradient-to-r from-[#FFAE11]/20 to-orange-500/20 rounded-3xl p-8 md:p-12 border border-[#FFAE11]/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Faça Parte da Nossa História</h3>
          <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada aluno que participa é uma nova página escrita. Sua transformação pode ser o próximo marco da nossa
            jornada.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#FFAE11] to-orange-500 hover:from-[#FFAE11] hover:to-orange-600 text-white text-lg px-6 md:px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Rocket className="w-5 h-5 md:w-6 md:h-6 mr-3" />
            Quero me inscrever agora
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            ⏰ Próxima turma inicia em <strong className="text-[#FFAE11]">02 de fevereiro de 2026</strong> • Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  )
}
