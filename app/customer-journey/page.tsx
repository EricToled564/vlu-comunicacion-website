
import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'

export default function CustomerJourneyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Customer Journey"
          description="Analiza el recorrido completo del cliente a través de todos los puntos de contacto"
        />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Etapas del Journey</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Awareness</span>
                <span className="text-sm text-blue-600">2,340 usuarios</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Consideration</span>
                <span className="text-sm text-green-600">1,890 usuarios</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">Decision</span>
                <span className="text-sm text-yellow-600">945 usuarios</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Purchase</span>
                <span className="text-sm text-purple-600">234 usuarios</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium">Retention</span>
                <span className="text-sm text-indigo-600">189 usuarios</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Puntos de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Redes Sociales</span>
                <span className="text-xs text-muted-foreground ml-auto">45%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Email Marketing</span>
                <span className="text-xs text-muted-foreground ml-auto">32%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Sitio Web</span>
                <span className="text-xs text-muted-foreground ml-auto">18%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Publicidad Digital</span>
                <span className="text-xs text-muted-foreground ml-auto">5%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
