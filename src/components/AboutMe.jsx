import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pcCode from '../assets/aboutmeimg/pc-code.jpg';
import lapCoding from '../assets/aboutmeimg/lap-coding.jpg';

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt:8,
        width: "1400px",
        maxWidth: "1400px",
        animation: "fadeIn 2s ease-in-out",
      }}
    >
      {/* Contenedor principal con fondo */}
      <Box
        sx={{
          borderRadius: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.9)",
          paddingTop: "10px",
          paddingBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // width: "100%",
          // maxWidth: "1250px"
        }}
      >
        {/* Título */}
        <Typography
          sx={{
            fontSize: "40px",
            marginBottom: "30px",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #000, 0 0 20px #00e0ff",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          About Me
        </Typography>

        {/* Imágenes */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mb: 5
          }}
        >
          <Box
            component="img"
            src={pcCode}
            alt="Coding PC"
            sx={{
              width: { xs: "90vw", md: "45%" },
              height: "auto",
              borderRadius: 2,
              objectFit: "cover",
              boxShadow: "0 0 30px rgba(0, 0, 0, 0.8)",
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 0 50px rgba(0, 0, 0, 1)',
              }
            }}
          />

          <Box
            component="img"
            src={lapCoding}
            alt="Laptop Coding"
            sx={{
              width: { xs: "90vw", md: "45%" },
              height: "auto",
              borderRadius: 2,
              objectFit: 'cover',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 0 50px rgba(0, 0, 0, 1)',
              }
            }}
          />
        </Box>

        {/* Texto scrollable */}
        <Box
          sx={{
            maxHeight: '45vh',
            padding: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "#eeeeee",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 300,
              textAlign: "center",
              textShadow: "0 0 8px #000",
              // maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            I'm a Full Stack Developer with a solid QA background, combining creativity and precision to build robust digital experiences.
            <br /><br />
            Specializing in JavaScript, React, Node.js, and MongoDB, I focus on writing clean, scalable, high-performance code — with a sharp eye for detail. My QA roots mean I don’t just build functional features; I build ones that last.
            <br /><br />
            From automating tests to designing pixel-perfect UIs and building real-time APIs, I aim for elegant, user-centered solutions.
            <br /><br />
            I’m a fast learner, problem-solver, and passionate creator driven by purpose, design impact, and great user experience.
            <br /><br />
            🚀 Let’s build something meaningful together.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
