import GlobalNav from './components/GlobalNav'
import LocalNav from './components/LocalNav'
import CompareHero from './components/CompareHero'
import ProductCards from './components/ProductCards'
import ComparisonGrid from './components/ComparisonGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalNav />
      <LocalNav />
      <main>
        <CompareHero />
        <ProductCards />
        <ComparisonGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
