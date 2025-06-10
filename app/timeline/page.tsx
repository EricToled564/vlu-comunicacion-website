
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/section-header';
import vluContent from '@/lib/data/vlu_content.json';

export default function TimelinePage() {
  const { fases_implementacion, proximos_pasos } = vluContent;

  const phases = [
    {
      phase: 'fase_1',
      title: 'Fase 1: Lanzamiento de Verano',
      data: fases_implementacion.fase_1,
      color: 'bg-blue-500',
      status: 'upcoming'
    },
    {
      phase: 'fase_2',
      title: 'Fase 2: Consolidación Otoño-Invierno',
      data: fases_implementacion.fase_2,
      color: 'bg-orange-500',
      status: 'upcoming'
    },
    {
      phase: 'fase_3',
      title: 'Fase 3: Expansión y Optimización',
      data: fases_implementacion.fase_3,
      color: 'bg-green-500',
      status: 'upcoming'
    }
  ];

  const milestones = [
    { date: '15 Jun 2025', event: 'Inicio Campaña Verano al Lago', type: 'launch' },
    { date: '1 Jul 2025', event: 'Lanzamiento Cruce Teques Experience', type: 'campaign' },
    { date: '15 Sep 2025', event: 'Evaluación Fase 1', type: 'review' },
    { date: '1 Oct 2025', event: 'Inicio Vaivén + Wellness', type: 'campaign' },
    { date: '15 Dic 2025', event: 'Evaluación Fase 2', type: 'review' },
    { date: '8 Ene 2026', event: 'Lanzamiento Renueva-te 2026', type: 'campaign' },
    { date: '14 Jun 2026', event: 'Evaluación Final y Planificación 2027', type: 'review' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'launch': return '🚀';
      case 'campaign': return '📢';
      case 'review': return '📊';
      default: return '📅';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Calendar}
          title="Cronograma de Implementación"
          description="Roadmap detallado de las tres fases de implementación de la estrategia de comunicación y medios durante el período 2025-2026"
          className="mb-16"
        />

        {/* Timeline Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-vlu-primary to-vlu-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Estrategia de Implementación por Fases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {phases.map((phase, index) => (
                  <div key={phase.phase} className="space-y-2">
                    <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center mx-auto`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-100">{phase.title}</h3>
                    <p className="text-sm text-blue-200">{phase.data.periodo}</p>
                    <Badge className={getStatusColor(phase.status)}>
                      {phase.status === 'upcoming' ? 'Próximo' : phase.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Phases */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-vlu-primary">{phase.title}</CardTitle>
                        <div className="flex items-center text-gray-600 mt-1">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{phase.data.periodo}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(phase.status)}>
                      {phase.status === 'upcoming' ? 'Próximo' : phase.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-vlu-primary" />
                        Campañas Incluidas
                      </h4>
                      <div className="space-y-2">
                        {phase.data.campanas.map((campana) => (
                          <Badge key={campana} variant="outline" className="mr-2 mb-2">
                            {campana}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-vlu-primary" />
                        Métricas de Éxito
                      </h4>
                      <div className="space-y-2">
                        {phase.data.metricas_exito.map((metrica, metricaIndex) => (
                          <div key={metricaIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-vlu-secondary mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{metrica}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Hitos Clave del Proyecto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl">{getMilestoneIcon(milestone.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{milestone.event}</h4>
                        <Badge variant="outline">{milestone.date}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Próximos Pasos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Próximos Pasos Inmediatos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {proximos_pasos.map((paso, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-vlu-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{paso}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Implementation Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-vlu-accent to-vlu-secondary text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Calendario de Revisiones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">Semanal</div>
                  <p className="text-blue-100">Revisiones de performance de campaña</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Mensual</div>
                  <p className="text-blue-100">Evaluaciones estratégicas y ajustes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Trimestral</div>
                  <p className="text-blue-100">Análisis integral y optimización</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
