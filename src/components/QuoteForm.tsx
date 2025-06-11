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
  budget: z.string({
    required_error: "Por favor, selecione uma faixa de investimento",
  }),
  contactTime: z.string({
    required_error: "Por favor, selecione um horário de contato",
  }),
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

  const sendToWhatsApp = (data: z.infer<typeof formSchema>) => {
    const formattedMessage = formatClientInfo(data);
    const whatsappNumber = '5555999633435';
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappDeepLink = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.location.href = whatsappDeepLink;

    setTimeout(() => {
      const currentURL = window.location.href;
      if (currentURL.includes(window.location.pathname)) {
        const webWhatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
        window.location.href = webWhatsappUrl;
      }
    }, 1000);
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
      sendToWhatsApp(data);
      form.reset();
      setSelectedAreas([]);
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua proposta. Por favor, tente novamente.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orcamento" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-3">
              Solicite Seu Orçamento
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Conte-nos sobre seu projeto e receba uma proposta personalizada para transformar seu espaço
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="bg-wood-gradient text-white rounded-t-lg py-3">
              <CardTitle className="text-2xl text-center">
                Receba sua Proposta Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">
                            Nome Completo *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Seu nome completo"
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">
                            E-mail *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="seu@email.com"
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">
                            Telefone/WhatsApp *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="(11) 99999-9999"
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">
                            Quanto quer investir no seu projeto? *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Selecione uma faixa" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="20k-30k">De R$20k a R$30k</SelectItem>
                              <SelectItem value="30k-50k">De R$30k a R$50k</SelectItem>
                              <SelectItem value="50k-80k">De R$50k a R$80k</SelectItem>
                              <SelectItem value="acima-80k">Acima de R$80k</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="contactTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Melhor horário para contato *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Selecione um horário" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Manhã">Manhã</SelectItem>
                            <SelectItem value="Horário de Almoço">Horário de Almoço</SelectItem>
                            <SelectItem value="Tarde">Tarde</SelectItem>
                            <SelectItem value="Noite">Noite</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormLabel className="text-sm font-medium text-neutral-700 mb-2 block">
                      Ambientes Desejados *
                    </FormLabel>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {areaOptions.map((area) => (
                        <div
                          key={area.value}
                          onClick={() => handleSelectArea(area.value)}
                          className={`cursor-pointer p-2 border rounded-md flex items-center justify-center text-center text-sm ${
                            selectedAreas.includes(area.value)
                              ? 'bg-wood-light text-white border-wood-dark'
                              : 'bg-white border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {area.label}
                        </div>
                      ))}
                    </div>
                    {form.formState.errors.areas && (
                      <p className="text-sm font-medium text-destructive mt-2">
                        {form.formState.errors.areas.message}
                      </p>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Descrição do Projeto *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Descreva seu projeto: tipo de móvel, ambiente, medidas aproximadas, preferências de estilo..."
                            rows={4}
                            className="resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-wood-dark hover:bg-wood-medium text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Enviando...' : 'Receber Proposta'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;


