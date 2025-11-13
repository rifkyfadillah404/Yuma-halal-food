import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BentoSnackDetail from './pages/BentoSnackDetail'
import MuslimAksesorisDetail from './pages/MuslimAksesorisDetail'
import FamilyTripDetail from './pages/FamilyTripDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bento-snack" element={<BentoSnackDetail />} />
          <Route path="/muslim-aksesoris" element={<MuslimAksesorisDetail />} />
          <Route path="/family-trip" element={<FamilyTripDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
