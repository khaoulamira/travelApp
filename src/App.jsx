
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => { AOS.init({ duration: 1500, }); }, []);

  return (
    <>
    
      <Header/>
      <Hero/> 
    </>
  )
}

export default App
