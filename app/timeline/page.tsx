
import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Cronología de Actividades"
          description="Visualiza el historial completo de actividades de comunicación"
        />
        
        <div className="mt-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-6">Actividades Recientes</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Campaña Q1 2025 iniciada</h4>
                  <p className="text-sm text-muted-foreground">Se lanzó la nueva campaña de productos estratégicos</p>
                  <span className="text-xs text-muted-foreground">Hace 2 horas</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">KPI actualizado</h4>
                  <p className="text-sm text-muted-foreground">Tasa de apertura mejoró al 24.5%</p>
                  <span className="text-xs text-muted-foreground">Hace 4 horas</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Mensaje programado</h4>
                  <p className="text-sm text-muted-foreground">Newsletter semanal programada para mañana</p>
                  <span className="text-xs text-muted-foreground">Hace 6 horas</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Nuevo canal agregado</h4>
                  <p className="text-sm text-muted-foreground">Canal de WhatsApp Business configurado</p>
                  <span className="text-xs text-muted-foreground">Ayer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
