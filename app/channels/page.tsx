
import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Canales de Comunicación"
          description="Gestiona todos los canales de comunicación disponibles"
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <h3 className="text-lg font-semibold mb-2">Email Marketing</h3>
            <p className="text-2xl font-bold text-primary">12,450</p>
            <p className="text-sm text-muted-foreground">Suscriptores activos</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <h3 className="text-lg font-semibold mb-2">Redes Sociales</h3>
            <p className="text-2xl font-bold text-primary">8,920</p>
            <p className="text-sm text-muted-foreground">Seguidores totales</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <h3 className="text-lg font-semibold mb-2">SMS</h3>
            <p className="text-2xl font-bold text-primary">3,240</p>
            <p className="text-sm text-muted-foreground">Contactos móviles</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <h3 className="text-lg font-semibold mb-2">Push Notifications</h3>
            <p className="text-2xl font-bold text-primary">15,680</p>
            <p className="text-sm text-muted-foreground">Dispositivos registrados</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
