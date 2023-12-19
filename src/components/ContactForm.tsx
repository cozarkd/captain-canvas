// src/components/ContactFormSection.tsx
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'

type ContactSectionProps = {
  dictionary: {
    [key: string]: string;
  };
};

export default function ContactFormSection({ dictionary }: ContactSectionProps) {
  const contact = {
    title: dictionary.title,
    name: dictionary.name,
    organization: dictionary.organization,
    email: dictionary.email,
    subject: dictionary.subject,
    message: dictionary.message,
    nameRequired: dictionary.nameRequired,
    organizationRequired: dictionary.organizationRequired,
    emailRequired: dictionary.emailRequired,
    messageRequired: dictionary.messageRequired,
    submit: dictionary.submit,
    sending: dictionary.sending,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  })

  const apiKey = '45ee6310-e703-43b2-9fd5-530e8134cab1' // Reemplazar con tu clave de acceso

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    onSuccess: (msg, data) => {
      reset()
    },
    onError: (msg, data) => {
      // Manejar error
    },
  })

  return (
    <section id="contact" className='container py-12 w-full bg-secondary'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-6 text-primary'>{contact.title}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto space-y-4'>
          <input type='hidden' {...register('botcheck')} />
          <div>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-primary'>
              {contact.name}
            </label>
            <Input
              id='name'
              type='text'
              {...register('name', { required: contact.nameRequired })}
            />
            {errors.name && (
              <small className='text-red-600'>{errors.name.message?.toString()}</small>
            )}
          </div>
          <div>
            <label htmlFor='organization' className='block mb-2 text-sm font-medium text-primary'>
              {contact.organization}
            </label>
            <Input
              id='organization'
              type='text'
              {...register('organization', {
                required: contact.organizationRequired,
              })}
            />
            {errors.organization && (
              <small className='text-red-600'>{errors.organization.message?.toString()}</small>
            )}
          </div>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-primary'>
              {contact.email}
            </label>
            <Input
              id='email'
              type='email'
              required
              {...register('email', { required: contact.emailRequired })}
            />
            {errors.email && (
              <small className='text-red-600'>{errors.email.message?.toString()}</small>
            )}
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
            <label htmlFor='message' className='block mb-2 text-sm font-medium text-primary'>
              {contact.message}
            </label>
            <Textarea
              id='message'
              rows={4}
              {...register('message', { required: contact.messageRequired })}
            />
            {errors.message && (
              <small className='text-red-600'>{errors.message.message?.toString()}</small>
            )}
          </div>
          <div className='text-center'>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? contact.sending : contact.submit}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

