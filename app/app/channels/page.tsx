
'use client';

import { motion } from 'framer-motion';
import { Smartphone, Users, Video, Briefcase, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/section-header';
import vluContent from '@/lib/data/vlu_content.json';

export default function ChannelsPage() {
  const { estrategia_canales } = vluContent;

  const channelData = [
    {
      name: 'Instagram',
      icon: Camera,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      emoji: '📸',
      data: estrategia_canales.instagram,
      stats: { followers: '25K+', engagement: '4.2%', reach: 'Alto' }
    },
    {
      name: 'TikTok',
      icon: Smartphone,
      color: 'bg-gradient-to-r from-black to-gray-800',
      emoji: '🎵',
      data: estrategia_canales.tiktok,
      stats: { followers: '15K+', engagement: '6.8%', reach: 'Viral' }
    },
    {
      name: 'Facebook',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
      emoji: '👥',
      data: estrategia_canales.facebook,
      stats: { followers: '30K+', engagement: '3.1%', reach: 'Amplio' }
    },
    {
      name: 'YouTube',
      icon: Video,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      emoji: '📺',
      data: estrategia_canales.youtube,
      stats: { followers: '8K+', engagement: '5.5%', reach: 'Profundo' }
    },
    {
      name: 'LinkedIn',
      icon: Briefcase,
      color: 'bg-gradient-to-r from-blue-700 to-blue-800',
      emoji: '💼',
      data: estrategia_canales.linkedin,
      stats: { followers: '5K+', engagement: '2.8%', reach: 'B2B' }
    }
  ];

  const contentTypes: { [key: string]: string } = {
    'Fotografía hora dorada': '🌅',
    'Rituales de bienestar': '🧘',
    'Historias de transformación': '✨',
    'Contenido de alta energía': '⚡',
    'Desafíos de aventura': '🏄',
    'Metraje de acción': '🎬',
    'Celebraciones tradicionales': '🎉',
    'Educación cultural': '📚',
    'Reuniones familiares': '👨‍👩‍👧‍👦',
    'Videos preparación': '🎥',
    'Documentación transformación': '📹',
    'Tours virtuales': '🏨',
    'Retiros corporativos': '🏢',
    'Desarrollo profesional': '📈',
    'Balance vida-trabajo': '⚖️'
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Smartphone}
          title="Estrategia de Canales Digitales"
          description="Optimización específica para cada plataforma digital con enfoques únicos y tipos de contenido adaptados a las audiencias de cada canal"
          className="mb-16"
        />

        {/* Resumen de Canales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-vlu-primary to-vlu-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ecosistema Digital Integrado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4 text-center">
                {channelData.map((channel) => (
                  <div key={channel.name} className="space-y-2">
                    <div className="text-3xl">{channel.emoji}</div>
                    <div className="text-lg font-semibold">{channel.name}</div>
                    <div className="text-sm text-blue-100">{channel.stats.followers}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Canales Detallados */}
        <div className="space-y-8">
          {channelData.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover overflow-hidden">
                <div className={`h-2 ${channel.color}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${channel.color} rounded-xl flex items-center justify-center text-white text-2xl`}>
                        {channel.emoji}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-vlu-primary">{channel.name}</CardTitle>
                        <p className="text-gray-600 font-medium">{channel.data.enfoque}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm text-gray-500">Engagement</div>
                      <div className="text-xl font-bold text-vlu-primary">{channel.stats.engagement}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tipos de Contenido</h4>
                      <div className="space-y-2">
                        {channel.data.contenido_tipo.map((tipo) => (
                          <div key={tipo} className="flex items-center space-x-2">
                            <span className="text-lg">{contentTypes[tipo] || '📱'}</span>
                            <span className="text-gray-700">{tipo}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Métricas Clave</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Seguidores</span>
                          <Badge variant="outline">{channel.stats.followers}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Engagement Rate</span>
                          <Badge variant="outline">{channel.stats.engagement}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Alcance</span>
                          <Badge variant="outline">{channel.stats.reach}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Estrategia de Contenido Cross-Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Estrategia Cross-Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contenido Adaptado</h3>
                  <p className="text-gray-600 text-sm">
                    Cada pieza de contenido se adapta al formato y audiencia específica de cada plataforma
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Audiencia Segmentada</h3>
                  <p className="text-gray-600 text-sm">
                    Targeting específico por canal para maximizar relevancia y engagement
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vlu-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mensajes Consistentes</h3>
                  <p className="text-gray-600 text-sm">
                    Arquitectura de mensajes unificada manteniendo la identidad de marca
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Calendario de Publicación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frecuencia de Publicación Recomendada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { channel: 'Instagram', frequency: '1-2 posts/día', stories: '3-5 stories/día' },
                  { channel: 'TikTok', frequency: '1 video/día', stories: 'Trending diario' },
                  { channel: 'Facebook', frequency: '1 post/día', stories: '2-3 posts/semana' },
                  { channel: 'YouTube', frequency: '2 videos/semana', stories: '1 video largo/mes' },
                  { channel: 'LinkedIn', frequency: '3 posts/semana', stories: 'Contenido B2B' }
                ].map((item) => (
                  <div key={item.channel} className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-vlu-primary mb-2">{item.channel}</h4>
                    <p className="text-sm text-gray-600 mb-1">{item.frequency}</p>
                    <p className="text-xs text-gray-500">{item.stories}</p>
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
