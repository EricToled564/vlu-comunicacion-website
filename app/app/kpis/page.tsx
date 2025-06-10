
'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Target, Eye, ShoppingCart, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/section-header';
import AnimatedCounter from '@/components/animated-counter';
import vluContent from '@/lib/data/vlu_content.json';

export default function KPIsPage() {
  const { kpis_medicion, indicadores_anuales_exito } = vluContent;

  const kpiCategories = [
    {
      category: 'conciencia',
      title: 'Conciencia de Marca',
      icon: Eye,
      color: 'bg-blue-500',
      metrics: kpis_medicion.conciencia
    },
    {
      category: 'engagement',
      title: 'Engagement',
      icon: Users,
      color: 'bg-green-500',
      metrics: kpis_medicion.engagement
    },
    {
      category: 'conversion',
      title: 'Conversión',
      icon: ShoppingCart,
      color: 'bg-orange-500',
      metrics: kpis_medicion.conversion
    },
    {
      category: 'retencion',
      title: 'Retención',
      icon: Heart,
      color: 'bg-purple-500',
      metrics: kpis_medicion.retencion
    }
  ];

  const annualTargets = [
    { label: 'Aumento en Ingresos', current: 45, target: 45, unit: '%' },
    { label: 'Tasa de Ocupación', current: 65, target: 65, unit: '%' },
    { label: 'Reservas Directas', current: 25, target: 25, unit: '%' },
    { label: 'Aumento ADR', current: 20, target: 20, unit: '%' },
    { label: 'Seguidores Redes', current: 100, target: 100, unit: '%' },
    { label: 'Reseñas Totales', current: 360, target: 360, unit: '' },
    { label: 'Satisfacción General', current: 8.5, target: 8.5, unit: '/10' },
    { label: 'Tasa de Referencia', current: 25, target: 25, unit: '%' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={BarChart3}
          title="KPIs y Métricas"
          description="Sistema integral de medición que evalúa el éxito de la estrategia de comunicación y medios a través de indicadores clave de rendimiento"
          className="mb-16"
        />

        {/* Objetivos Anuales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-vlu-dark border-2 border-vlu-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white font-bold">Objetivos Anuales 2025-2026</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {annualTargets.map((target, index) => (
                  <div key={target.label} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-4xl font-black text-white mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.3)' }}>
                      <AnimatedCounter 
                        end={target.current} 
                        suffix={target.unit}
                        duration={2000 + index * 200}
                      />
                    </div>
                    <p className="text-white font-semibold text-sm drop-shadow-md">{target.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* KPI Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {kpiCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-vlu-primary">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-vlu-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Indicadores de Éxito por Categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Indicadores Anuales de Éxito
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(indicadores_anuales_exito).map(([category, indicators], index) => (
              <Card key={category} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl text-vlu-primary capitalize">
                    {category.replace('_', ' ')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {indicators.map((indicator, indicatorIndex) => (
                      <div key={indicatorIndex} className="flex items-start space-x-3">
                        <Target className="h-4 w-4 text-vlu-secondary mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{indicator}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Dashboard de Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Dashboard de Seguimiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoreo en Tiempo Real</h3>
                  <p className="text-gray-600 text-sm">
                    Seguimiento diario de métricas clave con alertas automáticas
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reportes Semanales</h3>
                  <p className="text-gray-600 text-sm">
                    Análisis detallado de performance por campaña y canal
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimización Continua</h3>
                  <p className="text-gray-600 text-sm">
                    Ajustes estratégicos basados en datos y performance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benchmarks y Comparativas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Benchmarks de la Industria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { metric: 'Tasa de Ocupación', vlu: '65%', industry: '55%', status: 'superior' },
                  { metric: 'Engagement Rate', vlu: '4.5%', industry: '2.8%', status: 'superior' },
                  { metric: 'Reservas Directas', vlu: '25%', industry: '15%', status: 'superior' },
                  { metric: 'Satisfacción Cliente', vlu: '8.5/10', industry: '7.8/10', status: 'superior' }
                ].map((benchmark) => (
                  <div key={benchmark.metric} className="text-center p-4 bg-white rounded-lg border-2 border-gray-200 shadow-md">
                    <h4 className="font-bold text-gray-900 mb-3">{benchmark.metric}</h4>
                    <div className="space-y-3">
                      <div className="bg-vlu-primary/10 rounded-lg p-3">
                        <p className="text-sm font-semibold text-vlu-primary">VLU Target</p>
                        <p className="text-2xl font-black text-vlu-dark drop-shadow-sm">{benchmark.vlu}</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm font-semibold text-gray-700">Industria</p>
                        <p className="text-xl font-bold text-gray-800">{benchmark.industry}</p>
                      </div>
                      <Badge 
                        className={benchmark.status === 'superior' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {benchmark.status === 'superior' ? '↗ Superior' : '→ Competitivo'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
