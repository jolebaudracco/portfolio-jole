import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import taskManagerImag from '../assets/mern.jpg'
import yelpcampImg from '../assets/yelpcamp.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Task Manager App',
      description: 'A full-stack MERN application to create, edit, delete and manage tasks. Features include CRUD operations, responsive UI, and persistent storage via MongoDB.',
      liveUrl: 'https://mern-jole.onrender.com/',
      githubUrl: 'https://github.com/jolebaudracco/mern-Jole',
      image: taskManagerImag
    },
    {
      title: 'YelpCamp Clone',
      description: 'A campground listing app inspired by Yelp. Built with Node.js, Express, and MongoDB, it features user authentication, reviews, image uploads, and full CRUD capabilities.',
      liveUrl: 'https://yelp-camp-ma19.onrender.com/',
      githubUrl: 'https://github.com/jolebaudracco/Yelp-camp',
      image: yelpcampImg
    }
  ]

  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
            fontSize: "40px",
            marginBottom: "30px",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #000, 0 0 20px #00e0ff",
            fontWeight: 700,
            textAlign: "center"
        }}
        >
        Projects
        </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: '340px',
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: '#fff',
              boxShadow: '4px 6px 12px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1rem'
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
            <Typography variant="body2" sx={{ margin: '0.5rem 0', color: '#555' }}>
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<OpenInNewIcon />}
                href={project.liveUrl}
                target="_blank"
              >
                View Project
              </Button>
              <Button
                variant="outlined"
                endIcon={<GitHubIcon />}
                href={project.githubUrl}
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Projects
