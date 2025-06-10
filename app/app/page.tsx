
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Calendar,
  MessageSquare,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedCounter from '@/components/animated-counter';

export default function HomePage() {
  const stats = [
    { label: 'Campañas Estratégicas', value: 14, suffix: '' },
    { label: 'Objetivo de Ocupación', value: 65, suffix: '%' },
    { label: 'Aumento en Ingresos', value: 45, suffix: '%' },
    { label: 'Canales Digitales', value: 5, suffix: '' },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Estrategia Integral',
      description: '14 campañas específicas diseñadas para maximizar la ocupación y posicionamiento de marca'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Proyectado',
      description: 'Aumento del 45% en ingresos anuales y 65%+ de tasa de ocupación'
    },
    {
      icon: Users,
      title: 'Segmentación Precisa',
      description: 'Targeting específico para Escapistas, Nómadas Digitales, Buscadores de Bienestar y más'
    },
    {
      icon: MessageSquare,
      title: 'Arquitectura de Mensajes',
      description: 'Mensajes universales que refuerzan la propuesta de valor única de VLU'
    }
  ];

  const objectives = [
    'Aumentar la ocupación anual del 45% al 65% mediante la adquisición segmentada',
    'Mejorar la calificación de percepción de valor de 7.2 a 8.0+ mediante comunicación mejorada',
    'Triplicar el volumen de reseñas de 120 a 360+ reseñas en plataformas clave',
    'Establecer liderazgo de mercado como destino premier de escape de fin de semana',
    'Generar 25% de reservas directas reduciendo la dependencia de OTAs'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Estrategia de Comunicación y Medios 2025-2026
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                VLU Tequesquitengo
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Tu santuario exclusivo junto al lago para bienestar, recreación y experiencias auténticas de Morelos
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/campaigns">
                <Button size="lg" className="bg-white text-vlu-primary hover:bg-gray-100">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ver Campañas
                </Button>
              </Link>
              <Link href="/kpis">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-vlu-primary">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Revisar KPIs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-vlu-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Resumen Ejecutivo
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              VLU Tequesquitengo opera en un dinámico mercado de hospitalidad boutique valorado en USD 1,267.4 millones (2024) 
              con un crecimiento proyectado a USD 1,868.5 millones para 2030 (CAGR del 6.8%)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-vlu-secondary/10 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-vlu-primary" />
                      </div>
                      <CardTitle className="text-xl">{highlight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Objetivos Primarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-r from-vlu-primary to-vlu-accent text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Objetivos Primarios 2025-2026</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-vlu-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-blue-100 leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-vlu-secondary/10 rounded-full">
                <Star className="h-12 w-12 text-vlu-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Propuesta de Valor
            </h2>
            <p className="text-2xl text-vlu-primary font-semibold max-w-4xl mx-auto leading-relaxed">
              "Excelencia consistente que Airbnb no puede garantizar con experiencia en hospitalidad 24/7 a tu servicio"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explora la Estrategia Completa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cada componente de nuestra estrategia integral de comunicación y medios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Campañas',
                description: '14 campañas estratégicas diseñadas para todo el año',
                href: '/campaigns',
                icon: Calendar,
                color: 'bg-blue-500'
              },
              {
                title: 'Arquitectura de Mensajes',
                description: 'Mensajes universales y posicionamiento de marca',
                href: '/messaging',
                icon: MessageSquare,
                color: 'bg-green-500'
              },
              {
                title: 'Estrategia de Canales',
                description: 'Optimización para Instagram, TikTok, Facebook y más',
                href: '/channels',
                icon: Users,
                color: 'bg-purple-500'
              },
              {
                title: 'Viaje del Cliente',
                description: 'Tácticas por fase desde descubrimiento hasta retención',
                href: '/customer-journey',
                icon: Target,
                color: 'bg-orange-500'
              },
              {
                title: 'KPIs y Métricas',
                description: 'Indicadores clave de rendimiento y medición',
                href: '/kpis',
                icon: BarChart3,
                color: 'bg-red-500'
              },
              {
                title: 'Cronograma',
                description: 'Fases de implementación y timeline detallado',
                href: '/timeline',
                icon: TrendingUp,
                color: 'bg-indigo-500'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <Card className="h-full card-hover cursor-pointer group">
                    <CardHeader>
                      <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-vlu-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center text-vlu-primary font-medium group-hover:translate-x-2 transition-transform">
                        Explorar <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
