// src/components/ContactFormSection.tsx
"use client"

import React from 'react';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';


const ContactFormSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const apiKey = "45ee6310-e703-43b2-9fd5-530e8134cab1"; // Reemplazar con tu clave de acceso

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    onSuccess: (msg, data) => {
      reset();
    },
    onError: (msg, data) => {
      // Manejar error
    },
  });

  return (
    <section className="py-12 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
          <input type="hidden" {...register("botcheck")} />
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
            <Input id="name" type="text" {...register("name", { required: "El nombre es obligatorio" })} />
            {errors.name && <small className="text-red-600">{errors.name.message?.toString()}</small>}
          </div>
          <div>
            <label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-700">Organización</label>
            <Input id="organization" type="text" {...register("organization", { required: "El nombre de la organización es obligatorio" })} />
            {errors.organization && <small className="text-red-600">{errors.organization.message?.toString()}</small>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <Input id="email" type="email" required {...register("email", { required: "El email es obligatorio" })} />
            {errors.email && <small className="text-red-600">{errors.email.message?.toString()}</small>}
          </div>
          {/* <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Asunto</label>
            <Select {...register("subject")}>
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
          </div> */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Mensaje</label>
            <Textarea id="message" rows={4} {...register("message", { required: "El mensaje es obligatorio" })} />
            {errors.message && <small className="text-red-600">{errors.message.message?.toString()}</small>}
          </div>
          <div className="text-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
