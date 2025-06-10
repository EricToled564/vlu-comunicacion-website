
'use client';

import { motion } from 'framer-motion';
import { Search, Eye, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/section-header';
import vluContent from '@/lib/data/vlu_content.json';

export default function CustomerJourneyPage() {
  const { viaje_cliente } = vluContent;

  const journeyStages = [
    {
      stage: 'descubrimiento',
      title: 'Descubrimiento',
      icon: Search,
      color: 'bg-blue-500',
      description: 'El cliente potencial se da cuenta de VLU por primera vez',
      data: viaje_cliente.descubrimiento
    },
    {
      stage: 'consideracion',
      title: 'Consideración',
      icon: Eye,
      color: 'bg-green-500',
      description: 'Evaluación activa de VLU como opción de hospedaje',
      data: viaje_cliente.consideracion
    },
    {
      stage: 'conversion',
      title: 'Conversión',
      icon: ShoppingCart,
      color: 'bg-orange-500',
      description: 'Decisión de reserva y completación de la transacción',
      data: viaje_cliente.conversion
    },
    {
      stage: 'retencion',
      title: 'Retención',
      icon: Heart,
      color: 'bg-purple-500',
      description: 'Construcción de lealtad y generación de advocacy',
      data: viaje_cliente.retencion
    }
  ];

  const tacticIcons: { [key: string]: string } = {
    'Contenido teaser': '👀',
    'Influencer partnerships': '🤝',
    'SEO local': '🔍',
    'Testimonios': '💬',
    'Tours virtuales': '🏨',
    'Comparaciones con competencia': '⚖️',
    'Ofertas tiempo limitado': '⏰',
    'Paquetes exclusivos': '🎁',
    'Reserva directa incentivos': '💰',
    'Programa lealtad': '⭐',
    'UGC amplificación': '📸',
    'Experiencias exclusivas': '✨'
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={ArrowRight}
          title="Viaje del Cliente"
          description="Estrategia integral que guía a los clientes desde el descubrimiento inicial hasta convertirse en embajadores leales de la marca VLU"
          className="mb-16"
        />

        {/* Journey Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-vlu-primary to-vlu-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Proceso de Transformación del Cliente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {journeyStages.map((stage, index) => (
                  <div key={stage.stage} className="flex items-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                        <stage.icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-blue-100">{stage.title}</p>
                    </div>
                    {index < journeyStages.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-vlu-secondary mx-4 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Journey Stages */}
        <div className="space-y-8">
          {journeyStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${stage.color} rounded-lg flex items-center justify-center`}>
                      <stage.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-vlu-primary">{stage.title}</CardTitle>
                      <p className="text-gray-600">{stage.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Objetivos</h4>
                      <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                        {stage.data.objetivos}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tácticas Específicas</h4>
                      <div className="space-y-2">
                        {stage.data.tacticas.map((tactica, tacticaIndex) => (
                          <div key={tacticaIndex} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                            <span className="text-lg">{tacticIcons[tactica] || '📋'}</span>
                            <span className="text-gray-700">{tactica}</span>
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

        {/* Touchpoints Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Puntos de Contacto por Etapa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold text-vlu-primary mb-3">Descubrimiento</h3>
                  <div className="space-y-2">
                    {['Redes Sociales', 'SEO/SEM', 'Influencers', 'Referidos'].map((touchpoint) => (
                      <Badge key={touchpoint} variant="outline" className="w-full justify-center">
                        {touchpoint}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-vlu-primary mb-3">Consideración</h3>
                  <div className="space-y-2">
                    {['Sitio Web', 'Reviews', 'Tours Virtuales', 'Comparadores'].map((touchpoint) => (
                      <Badge key={touchpoint} variant="outline" className="w-full justify-center">
                        {touchpoint}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-vlu-primary mb-3">Conversión</h3>
                  <div className="space-y-2">
                    {['Reserva Directa', 'OTAs', 'Call Center', 'WhatsApp'].map((touchpoint) => (
                      <Badge key={touchpoint} variant="outline" className="w-full justify-center">
                        {touchpoint}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-vlu-primary mb-3">Retención</h3>
                  <div className="space-y-2">
                    {['Email Marketing', 'Programa Lealtad', 'Eventos Exclusivos', 'UGC'].map((touchpoint) => (
                      <Badge key={touchpoint} variant="outline" className="w-full justify-center">
                        {touchpoint}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Customer Personas Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Personalización por Segmento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    segment: 'Escapistas',
                    focus: 'Desconexión y relajación',
                    journey: 'Búsqueda de tranquilidad → Evaluación de amenidades → Reserva de experiencias wellness'
                  },
                  {
                    segment: 'Nómadas Digitales',
                    focus: 'Productividad y conectividad',
                    journey: 'Verificación de WiFi → Espacios de trabajo → Reserva de estancias largas'
                  },
                  {
                    segment: 'Buscadores de Bienestar',
                    focus: 'Transformación personal',
                    journey: 'Programas wellness → Testimonios transformación → Paquetes integrales'
                  },
                  {
                    segment: 'Entusiastas de Aventura',
                    focus: 'Actividades emocionantes',
                    journey: 'Deportes acuáticos → Videos de acción → Paquetes de aventura'
                  },
                  {
                    segment: 'Exploradores Culturales',
                    focus: 'Autenticidad local',
                    journey: 'Experiencias culturales → Inmersión local → Tours auténticos'
                  },
                  {
                    segment: 'Celebradores',
                    focus: 'Eventos especiales',
                    journey: 'Espacios para eventos → Servicios de celebración → Paquetes grupales'
                  }
                ].map((persona, index) => (
                  <div key={persona.segment} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-vlu-primary mb-2">{persona.segment}</h4>
                    <p className="text-sm text-gray-600 mb-2">{persona.focus}</p>
                    <p className="text-xs text-gray-500">{persona.journey}</p>
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
