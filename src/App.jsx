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
import ForBrands from './components/ForBrands'
import CampusBuzz from './components/CampusBuzz'
import Artists from './components/Artists'
import Careers from './components/Careers'
import CaseStudies from './components/CaseStudies'
import Colleges from './components/Colleges'
import Contact from './components/Contact'
import Creators from './components/Creators'
import Ecosystem from './components/Ecosystem'
import Events from './components/Events'
import Fomo from './components/Fomo'

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
        <Route path="/for-brands" element={<ForBrands />} />
        <Route path="/campus-buzz" element={<CampusBuzz />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/events" element={<Events />} />
        <Route path="/fomo" element={<Fomo />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App  