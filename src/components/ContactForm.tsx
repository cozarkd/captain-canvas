// src/components/ContactFormSection.tsx
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';


const ContactFormSection: React.FC = () => {


  return (
    <section className="py-12 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="max-w-lg mx-auto space-y-4">
            <input type="hidden" name="access_key" value="45ee6310-e703-43b2-9fd5-530e8134cab1"></input>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
            <Input id="name" type="text"/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Asunto</label>
            <Select>
              <SelectTrigger id="subject" aria-label="Asunto">
                <SelectValue placeholder="Seleccionar Asunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Asistencia Técnica</SelectItem>
                <SelectItem value="trial">Solicitar Prueba</SelectItem>
                <SelectItem value="features">Solicitar Funcionalidades</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Mensaje</label>
            <Textarea id="message" rows={4} />
          </div>
          <div className="text-center">
            <Button type="submit">Enviar Mensaje</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;