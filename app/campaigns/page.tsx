
'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/section-header';
import vluContent from '@/lib/data/vlu_content.json';

export default function CampaignsPage() {
  const { calendario_campanas } = vluContent;

  const getSegmentColor = (segment: string) => {
    const colors: { [key: string]: string } = {
      'Escapistas': 'bg-blue-100 text-blue-800',
      'Nómadas Digitales': 'bg-green-100 text-green-800',
      'Buscadores de Bienestar': 'bg-purple-100 text-purple-800',
      'Entusiastas de Aventura': 'bg-orange-100 text-orange-800',
      'Exploradores Culturales': 'bg-indigo-100 text-indigo-800',
      'Celebradores': 'bg-pink-100 text-pink-800',
      'Ejecutivos': 'bg-gray-100 text-gray-800',
      'Wedding Planners': 'bg-rose-100 text-rose-800',
      'Todos los Segmentos': 'bg-yellow-100 text-yellow-800'
    };
    
    for (const [key, value] of Object.entries(colors)) {
      if (segment.includes(key)) return value;
    }
    return 'bg-gray-100 text-gray-800';
  };

  const getChannelIcon = (channel: string) => {
    switch (channel.toLowerCase()) {
      case 'instagram': return '📸';
      case 'tiktok': return '🎵';
      case 'facebook': return '👥';
      case 'youtube': return '📺';
      case 'linkedin': return '💼';
      default: return '📱';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Calendar}
          title="Campañas Estratégicas"
          description={`${calendario_campanas.total_campanas} campañas diseñadas específicamente para maximizar la ocupación y posicionamiento de VLU Tequesquitengo durante el período ${calendario_campanas.periodo}`}
          className="mb-16"
        />

        {/* Resumen de Campañas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-vlu-primary to-vlu-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Estrategia de Campañas Anuales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-vlu-secondary mb-2">{calendario_campanas.total_campanas}</div>
                  <p className="text-blue-100">Campañas Totales</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vlu-secondary mb-2">12</div>
                  <p className="text-blue-100">Meses de Cobertura</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vlu-secondary mb-2">5</div>
                  <p className="text-blue-100">Canales Digitales</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Grid de Campañas */}
        <div className="grid gap-8">
          {calendario_campanas.campanas.map((campana, index) => (
            <motion.div
              key={campana.nombre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-vlu-primary mb-2">
                        {campana.nombre}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{campana.periodo}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {campana.objetivo_segmento.split(', ').map((segmento) => (
                        <Badge 
                          key={segmento} 
                          className={getSegmentColor(segmento)}
                          variant="outline"
                        >
                          <Users className="h-3 w-3 mr-1" />
                          {segmento}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-vlu-primary" />
                        Concepto Creativo
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {campana.concepto_creativo}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Canales Primarios
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {campana.canales_primarios.map((canal) => (
                          <Badge key={canal} variant="secondary" className="bg-vlu-secondary/10 text-vlu-primary">
                            <span className="mr-1">{getChannelIcon(canal)}</span>
                            {canal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {campana.kpis && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-vlu-primary" />
                        KPIs Específicos
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {campana.kpis.map((kpi, kpiIndex) => (
                          <div key={kpiIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-vlu-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-600 text-sm">{kpi}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas de Campañas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Distribución de Campañas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-vlu-primary mb-2">Q2-Q3</div>
                  <p className="text-gray-600">Campañas de Verano</p>
                  <p className="text-sm text-gray-500">3 campañas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-vlu-primary mb-2">Q4</div>
                  <p className="text-gray-600">Temporada Alta</p>
                  <p className="text-sm text-gray-500">3 campañas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-vlu-primary mb-2">Q1</div>
                  <p className="text-gray-600">Renovación</p>
                  <p className="text-sm text-gray-500">4 campañas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-vlu-primary mb-2">Q2</div>
                  <p className="text-gray-600">Eventos Especiales</p>
                  <p className="text-sm text-gray-500">4 campañas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
