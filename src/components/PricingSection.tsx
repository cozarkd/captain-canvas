// src/components/PricingSection.tsx

import React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import StripePricingTable from '@/utils/StripePricingTable'

type PricingSectionProps = {
  dictionary: {
    [key: string]: string;
  };
};



export default function  PricingSection({ dictionary }: PricingSectionProps) {
  const pricing = {
    title: dictionary.title,
    pricingTableId: dictionary.pricingTableId,
    publishableKey: dictionary.publishableKey,
  };

  return (
    <section id='pricing' className='container bg-accent w-full py-12'>

      <div className='container mx-auto p-4'>
        <h2 className='text-3xl font-bold text-center mb-6'>{pricing.title}</h2>
        <StripePricingTable 
          pricingTableId= {pricing.pricingTableId}
          publishableKey= {pricing.publishableKey}
        />
      </div>
    </section>
  )
}

