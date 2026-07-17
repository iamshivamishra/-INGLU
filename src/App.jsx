import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import WhatIsInglu from './components/WhatIsInglu'
import Framework from './components/Framework'
import E3Model from './components/E3Model'
import EcosystemTabs from './components/EcosystemTabs'
import BrandsStrip from './components/BrandsStrip'
import SuccessStories from './components/SuccessStories'
import UpcomingEvents from './components/UpcomingEvents'
import WhoAreYou from './components/WhoAreYou'
import LiveFeed from './components/LiveFeed'
import Footer from './components/Footer'
import About from './components/About'

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhatIsInglu />
      <Framework />
      <E3Model />
      <EcosystemTabs />
      <BrandsStrip />
      <SuccessStories />
      <UpcomingEvents />
      <WhoAreYou />
      <LiveFeed />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App