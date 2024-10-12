import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import './App.css'
import Berita from "./pages/Berita"
import Lokasi from "./pages/Lokasi"
import Luaran from "./pages/Luaran"
import Program from "./pages/Program"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black w-full h-screen">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Berita" element={<Berita />} />
      <Route path="/Lokasi" element={<Lokasi/>} />
      <Route path="/Luaran" element={<Luaran />} />
      <Route path="/Program" element={<Program />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
