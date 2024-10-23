
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AOS from "aos";
import "aos/dist/aos.css"
import Popular from './components/Popular';

function App() {
  useEffect(() => { AOS.init({ duration: 1500, }); }, []);

  return (
    <>
      <Header/>
      <Hero /> 
      <Popular/>
    </>
  )
}

export default App
