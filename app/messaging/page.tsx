
import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'

export default function MessagingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Gestión de Mensajes"
          description="Crea, programa y envía mensajes a través de todos los canales"
        />
        
        <div className="mt-8 space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Mensajes Recientes</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Newsletter Semanal</h4>
                  <p className="text-sm text-muted-foreground">Enviado a 12,450 suscriptores</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Enviado</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Actualización de Producto</h4>
                  <p className="text-sm text-muted-foreground">Programado para mañana 9:00 AM</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Programado</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Campaña de Engagement</h4>
                  <p className="text-sm text-muted-foreground">En proceso de creación</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Borrador</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
