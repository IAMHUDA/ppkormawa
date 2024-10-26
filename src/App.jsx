import React, { useState, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import './App.css'
import Berita from "./pages/Berita"
import Lokasi from "./pages/Lokasi"
import Luaran from "./pages/Luaran"
import Program from "./pages/Program"
import About from "./pages/About"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ScrollToTop from "./server/ScrollToTop"

// Impor GIF loader
import loaderGif from "./assets/image/image2/loader.gif" // Pastikan untuk menambahkan file GIF loader

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true)
      // Simulasi loading gambar
      await new Promise(resolve => setTimeout(resolve, 2000))
      setLoading(false)
    }

    loadImages()
  }, [location])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <img src={loaderGif} alt="Loading..." />
      </div>
    )
  }

  return (
    <div className="bg-black w-full h-screen">
      <ScrollToTop />
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
