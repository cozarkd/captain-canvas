// src/components/FeaturesSection.tsx

import React from 'react'
import { Card } from '@/components/ui/card'
import { Monitor, Code, UserCheck } from 'lucide-react' // Importa los íconos que necesitas

type Feature = {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Interfaz Intuitiva',
    description: 'Una interfaz de usuario fácil de usar y elegante.',
    icon: <Monitor size={32} />,
  },
  {
    title: 'Desarrollo Eficiente',
    description: 'Herramientas para mejorar tu flujo de trabajo de desarrollo.',
    icon: <Code size={32} />,
  },
  {
    title: 'Soporte Confiable',
    description: 'Soporte al cliente excepcional y confiable.',
    icon: <UserCheck size={32} />,
  },
  // Agrega más características según sea necesario
]

const FeaturesSection: React.FC = () => {
  return (
    <section className='py-12 w-full bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-6'>Características Principales</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {features.map((feature, index) => (
            <Card key={index} className='p-6 text-center'>
              <div className='mb-3'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
