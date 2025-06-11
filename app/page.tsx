import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'
import AnimatedCounter from '@/components/animated-counter'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Dashboard de Comunicación VLU"
          description="Gestión estratégica de comunicación y análisis de datos"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Campañas Activas</h3>
            <AnimatedCounter end={12} />
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Canales</h3>
            <AnimatedCounter end={8} />
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">KPIs Monitoreados</h3>
            <AnimatedCounter end={24} />
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Mensajes Enviados</h3>
            <AnimatedCounter end={1547} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Navegación Rápida</h3>
            <div className="space-y-3">
              <a href="/campaigns" className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <h4 className="font-medium">Campañas</h4>
                <p className="text-sm text-muted-foreground">Gestionar campañas de comunicación</p>
              </a>
              <a href="/channels" className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <h4 className="font-medium">Canales</h4>
                <p className="text-sm text-muted-foreground">Administrar canales de comunicación</p>
              </a>
              <a href="/kpis" className="block p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <h4 className="font-medium">KPIs</h4>
                <p className="text-sm text-muted-foreground">Monitorear indicadores clave</p>
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Actividad Reciente</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Nueva campaña creada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">KPI actualizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Mensaje programado</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
