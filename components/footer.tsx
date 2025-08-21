import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">BeeHive</span>
            </div>
            <p className="text-gray-400 text-sm">
              Conectando talentos a oportunidades através de educação e aulas de qualidade.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Sobre nós", "Programas", "Depoimentos", "Equipe", "Contato"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    aria-label={`Navegar para ${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a
                  href="mailto:projbeehive@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label="Enviar email para projbeehive@gmail.com"
                >
                  projbeehive@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a
                  href="tel:5511953461173"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label="Ligar para (11) 95346-1173"
                >
                  (11) 95346-1173
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/projbeehive" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/projbeehive" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                  aria-label={`Seguir no ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 BeeHive. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
