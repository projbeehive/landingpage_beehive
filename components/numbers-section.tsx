"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Users, Clock, TrendingUp, Building, DollarSign, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NumberCardProps {
  icon: React.ReactNode
  number: number
  suffix: string
  label: string
  description: string
  color: string
}

function NumberCard({ icon, number, suffix, label, description, color }: NumberCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2500
    const steps = 80
    const increment = number / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [number, isVisible])

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 ${color}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-2xl ${color.replace("border-t-", "bg-").replace("-500", "-100")}`}>{icon}</div>
        <div className="text-right">
          <div className={`text-4xl md:text-5xl font-bold ${color.replace("border-t-", "text-")}`}>
            {suffix === "%" ? "" : "+"}
            {count.toLocaleString()}
            {suffix}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default function NumbersSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados que <span className="text-[#FFAE11]">Transformam Vidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais que números, são histórias reais de pessoas que mudaram suas trajetórias e conquistaram novos horizontes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <NumberCard
            icon={<Users className="w-8 h-8 text-[#FFAE11]" />}
            number={350}
            suffix=""
            label="Alunos Formados"
            description="Alunos que vem de diversas realidades diferentes, que conquistaram diversas oportunidades."
            color="border-[#FFAE11]"
          />
          <NumberCard
            icon={<Clock className="w-8 h-8 text-[#FFAE11]" />}
            number={220}
            suffix=""
            label="Horas de Aulas"
            description="Aulas práticas e teóricas, com mais de 20 pessoas que viveram essas realidades."
            color="border-[#FFAE11]"
          />
          <NumberCard
            icon={<TrendingUp className="w-8 h-8 text-[#FFAE11]" />}
            number={6}
            suffix="x"
            label="Taxa de Aprovação"
            description="Nossos alunos têm uma taxa de aprovação 6x maior que a média dos projetos ministrados."
            color="border-[#FFAE11]"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esses números são apenas o começo. Junte-se a nós e faça parte dessa transformação!
          </p>
          <Button
            size="lg"
            className="w-96 bg-gradient-to-r from-[#FFAE11] to-[#FFAE11] hover:from-[#FFAE11]/80 hover:to-[#FFAE11]/80 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Quero me inscrever agora
          </Button>
        </div>
      </div>
    </section>
  )
}
