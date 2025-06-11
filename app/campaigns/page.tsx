import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Gestión de Campañas"
          description="Administra y monitorea todas las campañas de comunicación"
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Campaña Q1 2025</h3>
            <p className="text-sm text-muted-foreground mb-4">Lanzamiento de productos estratégicos</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Activa</span>
              <span className="text-sm text-muted-foreground">85% completada</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Comunicación Interna</h3>
            <p className="text-sm text-muted-foreground mb-4">Mejora de comunicación organizacional</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">En progreso</span>
              <span className="text-sm text-muted-foreground">60% completada</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Engagement Digital</h3>
            <p className="text-sm text-muted-foreground mb-4">Incremento de presencia en redes</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Planificada</span>
              <span className="text-sm text-muted-foreground">25% completada</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
