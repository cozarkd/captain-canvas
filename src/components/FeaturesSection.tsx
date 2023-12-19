// src/components/FeaturesSection.tsx

import React from 'react'
import { Card } from '@/components/ui/card'
import { Monitor, Code, UserCheck } from 'lucide-react' // Importa los íconos que necesitas

type FeaturesSectionProps = {
  dictionary: {
    [key: string]: string;
  };
};

const icons = {
  monitor: <Monitor size={32} />,
  code: <Code size={32} />,
  userCheck: <UserCheck size={32} />,
};



export default function FeaturesSection({ dictionary }: FeaturesSectionProps) {
  const featuresSection = {
    mainTitle: dictionary.mainTitle,
  };
  const features = [
    {
      title: dictionary.title1,
      description: dictionary.description1,
      icon: icons.monitor,
    },
    {
      title: dictionary.title2,
      description: dictionary.description2,
      icon: icons.userCheck,
    },
    {
      title: dictionary.title3,
      description: dictionary.description3,
      icon: icons.userCheck,
    },
    {
      title: dictionary.title4,
      description: dictionary.description4,
      icon: icons.userCheck,
    },
    {
      title: dictionary.title5,
      description: dictionary.description5,
      icon: icons.userCheck,
    },
    {
      title: dictionary.title6,
      description: dictionary.description6,
      icon: icons.userCheck,
    },

  ];

  return (
    <section className='container py-12 w-full bg-foreground'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-6 text-primary'>{featuresSection.mainTitle}</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {features.map((feature, index) => (
            <Card key={index} className='p-6 bg-primary border-0'>
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


