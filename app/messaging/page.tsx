
'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Target, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/section-header';
import vluContent from '@/lib/data/vlu_content.json';

export default function MessagingPage() {
  const { marca, arquitectura_mensajes } = vluContent;

  const messagingPillars = [
    {
      title: 'Garantía de Calidad',
      message: 'Excelencia consistente que Airbnb no puede garantizar',
      icon: Star,
      color: 'bg-yellow-500',
      description: 'Diferenciación clara frente a la competencia de alojamientos temporales'
    },
    {
      title: 'Servicio Profesional',
      message: 'Experiencia en hospitalidad 24/7 a tu servicio',
      icon: CheckCircle,
      color: 'bg-green-500',
      description: 'Énfasis en la atención profesional y disponibilidad constante'
    },
    {
      title: 'Experiencias Auténticas',
      message: 'Cultura genuina de Morelos, no atracciones turísticas',
      icon: Target,
      color: 'bg-blue-500',
      description: 'Conexión real con la cultura local y experiencias únicas'
    },
    {
      title: 'Justificación de Valor',
      message: 'Experiencias de lujo curadas que valen cada peso',
      icon: MessageSquare,
      color: 'bg-purple-500',
      description: 'Comunicación clara del valor y retorno de inversión'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={MessageSquare}
          title="Arquitectura de Mensajes"
          description="Mensajes universales que refuerzan la propuesta de valor única de VLU Tequesquitengo y establecen diferenciación competitiva clara"
          className="mb-16"
        />

        {/* Posicionamiento Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-vlu-primary to-vlu-accent text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Posicionamiento de Marca</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-xl md:text-2xl text-center leading-relaxed text-blue-100 italic">
                "{marca.posicionamiento}"
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>

        {/* Propuesta de Valor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="border-2 border-vlu-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-vlu-primary">Propuesta de Valor Central</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-center font-semibold text-gray-800 leading-relaxed">
                {marca.propuesta_valor}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pilares de Mensajes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pilares de Comunicación
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {messagingPillars.map((pilar, index) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${pilar.color} rounded-lg flex items-center justify-center`}>
                        <pilar.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-vlu-primary">{pilar.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg font-semibold text-gray-800 mb-4 italic border-l-4 border-vlu-secondary pl-4">
                      "{pilar.message}"
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">{pilar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Aplicación de Mensajes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Aplicación Estratégica</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistencia</h3>
                  <p className="text-gray-600 text-sm">
                    Todos los mensajes se aplican de manera consistente en todas las campañas y puntos de contacto
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adaptación</h3>
                  <p className="text-gray-600 text-sm">
                    Los mensajes se adaptan al tono y formato específico de cada canal digital
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diferenciación</h3>
                  <p className="text-gray-600 text-sm">
                    Cada mensaje refuerza la ventaja competitiva única de VLU frente a alternativas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guías de Implementación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Guías de Implementación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-vlu-primary mb-3">Tono de Comunicación</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">✅ Usar:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Lenguaje profesional pero cálido</li>
                        <li>• Términos que evocan exclusividad</li>
                        <li>• Referencias a experiencias auténticas</li>
                        <li>• Comparaciones sutiles con competencia</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">❌ Evitar:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Lenguaje genérico de hospitalidad</li>
                        <li>• Promesas que no podemos cumplir</li>
                        <li>• Comparaciones directas agresivas</li>
                        <li>• Términos que minimicen el valor</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-vlu-primary mb-3">Palabras Clave Estratégicas</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Santuario', 'Exclusivo', 'Auténtico', 'Profesional', 'Garantizado',
                      'Curado', 'Experiencia', 'Bienestar', 'Transformación', 'Escape'
                    ].map((palabra) => (
                      <Badge key={palabra} variant="outline" className="text-vlu-primary border-vlu-primary">
                        {palabra}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
