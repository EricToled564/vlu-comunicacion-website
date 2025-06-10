
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-vlu-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/vlu-logo.png"
                  alt="VLU Tequesquitengo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">VLU Tequesquitengo</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu santuario exclusivo junto al lago para bienestar, recreación y experiencias auténticas de Morelos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Estrategia</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/campaigns" className="text-gray-300 hover:text-vlu-secondary transition-colors text-sm">
                Campañas
              </Link>
              <Link href="/messaging" className="text-gray-300 hover:text-vlu-secondary transition-colors text-sm">
                Arquitectura de Mensajes
              </Link>
              <Link href="/kpis" className="text-gray-300 hover:text-vlu-secondary transition-colors text-sm">
                KPIs y Métricas
              </Link>
            </nav>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-vlu-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">Tequesquitengo, Morelos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-vlu-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+52 (777) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-vlu-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@vlutequesquitengo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 VLU Tequesquitengo. Estrategia de Comunicación y Medios.
          </p>
        </div>
      </div>
    </footer>
  );
}
