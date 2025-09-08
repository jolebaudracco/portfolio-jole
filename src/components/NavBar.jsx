import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = ({setSelectedScreen}) => {
  return (
        <Box sx={{
          backgroundColor: "rgba(128, 131, 133, 0.98)",
          backdropFilter: "blur(5px)",
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems:'center',
          padding: '5px 0',
          zIndex: 1000,
          boxShadow: '0 5px 5px rgba(0, 0, 0, 0.45)',
        }}>
          <Box sx={{ml: 2}}>
            <Typography
              sx={{
                fontSize: "32px",
                color: "#eeeeee", // amarillo estilo Star Wars
                fontFamily: "'Orbitron', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "0 0 5px rgba(128, 131, 133, 0.98), 0 0 15px rgba(59, 173, 255, 0.08)",
                fontWeight: 700,
                cursor: "default"
              }}
              >
              Jole's Code
            </Typography>
          </Box>

          <Box sx={{mr: 2}}>
          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("home")}
            sx={{
              color: "#eeeeee",
              borderColor: "rgba(128, 131, 133, 0.98)",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px rgba(128, 131, 133, 0.98), 0 0 10px rgba(52, 53, 54, 0.98)",
              '&:hover': {
                backgroundColor: "rgba(128, 131, 133, 0.98)",
                color: "#000",
                borderColor: "rgba(52, 53, 54, 0.98)",
                boxShadow: "0 0 10px rgba(52, 53, 54, 0.98), 0 0 20px rgba(52, 53, 54, 0.98)",
              },
              mr: 3
            }}
          >
            Home <HomeIcon sx={{ ml: 1 }} />
          </Button>



          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("about me")}
            sx={{
              color: "#eeeeee",
              borderColor: "rgba(128, 131, 133, 0.98)",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px rgba(128, 131, 133, 0.98), 0 0 10px rgba(52, 53, 54, 0.98)",
              '&:hover': {
                backgroundColor: "rgba(128, 131, 133, 0.98)",
                color: "#000",
                borderColor: "rgba(52, 53, 54, 0.98)",
                boxShadow: "0 0 10px rgba(52, 53, 54, 0.98), 0 0 20px rgba(52, 53, 54, 0.98)",
              },
              mr: 3
            }}
          >
            About Me <AccountCircleIcon sx={{ ml: 1 }}/>
          </Button>


          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("certifications")}
            sx={{
              color: "#eeeeee",
              borderColor: "rgba(128, 131, 133, 0.98)",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px rgba(128, 131, 133, 0.98), 0 0 10px rgba(52, 53, 54, 0.98)",
              '&:hover': {
                backgroundColor: "rgba(128, 131, 133, 0.98)",
                color: "#000",
                borderColor: "rgba(52, 53, 54, 0.98)",
                boxShadow: "0 0 10px rgba(52, 53, 54, 0.98), 0 0 20px rgba(52, 53, 54, 0.98)",
              },
              mr: 3
            }}
          >
            Certification <WorkspacePremiumIcon sx={{ ml: 1 }}/>
          </Button>

          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("projects")}
            sx={{
              color: "#eeeeee",
              borderColor: "rgba(128, 131, 133, 0.98)",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px rgba(128, 131, 133, 0.98), 0 0 10px rgba(52, 53, 54, 0.98)",
              '&:hover': {
                backgroundColor: "rgba(128, 131, 133, 0.98)",
                color: "#000",
                borderColor: "rgba(52, 53, 54, 0.98)",
                boxShadow: "0 0 10px rgba(52, 53, 54, 0.98), 0 0 20px rgba(52, 53, 54, 0.98)",
              },
              mr: 3
            }}
          >
            Project <GitHubIcon sx={{ ml: 1 }} />
          </Button>
          </Box>
        </Box>
  )
}

export default NavBar