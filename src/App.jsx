import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Box from '@mui/material/Box'
import NavBar from './components/NavBar'


function App(){
  const [selectedScreen, setSelectedScreen] = useState('home')
  console.log("🚀JB ~ App ~ selectedScreen:", selectedScreen)
  
  
  return (
    <>
    {/* Caja Maestra */}
      <Box sx={(theme) => ({
    background: 'linear-gradient(to right, #2c2c2c 0%, #eeeeee 50%, #2c2c2c 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2, // padding lateral para que no quede pegado en mobile
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start', // que los componentes no se queden todos al medio
      paddingTop: theme.spacing(4), // un poco de espacio arriba
    },
  })}
>
        {selectedScreen === "home" && <Home /> }
        {selectedScreen === "about me" && <AboutMe /> }
        {selectedScreen === "certifications" && <Certifications /> }
        {selectedScreen === "projects" && <Projects /> }
        <NavBar setSelectedScreen={setSelectedScreen} />
      </Box>
    </>
  )
}



export default App
