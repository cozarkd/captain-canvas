// src/components/PricingSection.tsx

import React from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type PricingOption = {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'default' | 'secondary';
};

const pricingOptions: PricingOption[] = [

  {
    title: 'Prueba',
    description: 'Prueba gratuita por 7 días',
    buttonText: 'Solicitar Trial',
    buttonVariant: 'default',
  },
  {
    title: 'Plan Mensual',
    description: '$9.99 al mes',
    buttonText: 'Suscribirse',
    buttonVariant: 'default',
  },
  {
    title: 'Plan Anual',
    description: '$99.99 al año',
    buttonText: 'Suscribirse',
    buttonVariant: 'default',
  },
  {
    title: 'Licencia Lifetime',
    description: '$299 una vez',
    buttonText: 'Comprar ahora',
    buttonVariant: 'secondary',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-gray-100 w-full py-12">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">Planes y Precios</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pricingOptions.map((option, index) => (
            <Card key={index} className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="mb-5">{option.description}</p>
              <Button variant={option.buttonVariant}>{option.buttonText}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;