
import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionHeader from '@/components/section-header'

export default function KPIsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Indicadores Clave de Rendimiento"
          description="Monitorea el desempeño de todas las iniciativas de comunicación"
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Tasa de Apertura</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-green-600">24.5%</span>
              <span className="text-sm text-green-600">↗ +2.3%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">vs. mes anterior</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">CTR (Click Through Rate)</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">3.8%</span>
              <span className="text-sm text-blue-600">↗ +0.5%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">vs. mes anterior</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Engagement Rate</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-purple-600">12.7%</span>
              <span className="text-sm text-red-600">↘ -1.2%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">vs. mes anterior</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Conversión</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-orange-600">2.1%</span>
              <span className="text-sm text-green-600">↗ +0.3%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">vs. mes anterior</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">ROI</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-green-600">340%</span>
              <span className="text-sm text-green-600">↗ +15%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">vs. mes anterior</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Alcance</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-indigo-600">45.2K</span>
              <span className="text-sm text-green-600">↗ +8.7%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">vs. mes anterior</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
