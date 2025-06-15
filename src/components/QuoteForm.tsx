'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  description: z.string().min(10, { message: 'Por favor, forneça mais detalhes sobre seu projeto' }),
  budget: z.string({ required_error: "Por favor, selecione uma faixa de investimento" }),
  contactTime: z.string({ required_error: "Por favor, selecione um horário de contato" }),
  areas: z.string().min(1, { message: "Por favor, selecione pelo menos um ambiente" }),
});

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
      budget: '',
      contactTime: '',
      areas: '',
    },
  });

  const areaOptions = [
    { label: 'Cozinhas', value: 'Cozinhas' },
    { label: 'Dormitórios', value: 'Dormitórios' },
    { label: 'Home Office', value: 'Home Office' },
    { label: 'Área Gourmet', value: 'Área Gourmet' },
    { label: 'Salas', value: 'Salas' },
    { label: 'Banheiros', value: 'Banheiros' },
    { label: 'Closets', value: 'Closets' },
    { label: 'Apartamento/Casa Completa', value: 'Apartamento/Casa Completa' },
    { label: 'Comercial', value: 'Comercial' },
  ];

  const handleSelectArea = (area: string) => {
    setSelectedAreas(prev => {
      if (prev.includes(area)) {
        return prev.filter(item => item !== area);
      } else {
        return [...prev, area];
      }
    });

    const areasString = selectedAreas.includes(area)
      ? selectedAreas.filter(item => item !== area).join(', ')
      : [...selectedAreas, area].join(', ');

    form.setValue('areas', areasString);
  };

  const formatClientInfo = (data: z.infer<typeof formSchema>) => {
    const areas = selectedAreas.length > 0 ? selectedAreas.join(' / ') : 'Não especificado';
    let budget = 'Não especificado';

    switch (data.budget) {
      case '20k-30k': budget = 'Entre 20k a 30k'; break;
      case '30k-50k': budget = 'Entre 30k a 50k'; break;
      case '50k-80k': budget = 'Entre 50k a 80k'; break;
      case 'acima-80k': budget = 'Acima de 80k'; break;
    }

    return `Olá! Me chamo ${data.name}
- Telefone/WhatsApp: ${data.phone}
- E-mail: ${data.email}

- Tenho interesse em um projeto de móveis planejados e gostaria de receber uma proposta personalizada.

- Faixa de investimento: ${budget}
- Melhor horário para contato: ${data.contactTime}
- Ambientes desejados: ${areas}
- Descrição do projeto: ${data.description}`;
  };

  const sendToEmail = async (data: z.infer<typeof formSchema>) => {
    console.log('Sending email to projetart@projetart.com with data:', data);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (selectedAreas.length === 0) {
      form.setError('areas', {
        type: 'manual',
        message: 'Selecione pelo menos um ambiente'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      data.areas = selectedAreas.join(', ');
      await sendToEmail(data);

      const formattedMessage = formatClientInfo(data);
      const whatsappNumber = '5581993122958';
      const encodedMessage = encodeURIComponent(formattedMessage);

      const openWhatsApp = () => {
        const deepLink = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
        window.location.href = deepLink;

        setTimeout(() => {
          if (window.location.href.includes(window.location.pathname)) {
            const fallback = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
            window.location.href = fallback;
          }
        }, 1000);
      };

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17129459117/7SWHCPzhqdkaEK2b--c_',
          event_callback: openWhatsApp
        });

        setTimeout(() => {
          openWhatsApp();
        }, 800);
      } else {
        openWhatsApp();
      }

      form.reset();
      setSelectedAreas([]);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua proposta. Por favor, tente novamente.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    // ... restante do JSX exatamente como está no seu código atual
    // (formulário, campos, botões e estilos)
  );
};

export default QuoteForm;


