import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import photo from '../assets/photo.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", // ocupa toda la altura de la pantalla
        px: 2,
        py: { xs: 6, sm: 4 }, // 👈 más espacio arriba/abajo en mobile
        // border:'1px solid red',
        animation: "fadeIn 2s ease-in-out",
        borderRadius: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.9)",
      }}
      >
      {/* Contenedor con fondo oscuro sutil */}
      <Box
        sx={(theme) => ({
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "950px",
          [theme.breakpoints.down("sm")]: {
            padding: "20px", // menos padding en mobile
          },
        })}
      >
        {/* Avatar y nombre */}
        <Avatar
          alt="photo"
          src={photo}
          sx={(theme) => ({
            width: 280,
            height: 280,
            marginBottom: "20px",
            border: "3px solid rgba(128, 131, 133, 0.98)",
            boxShadow:
              "0 0 20px rgba(128, 131, 133, 0.98), 0 0 40px rgba(128, 131, 133, 0.98)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
            [theme.breakpoints.down("sm")]: {
              width: 180,
              height: 180, // más chico en mobile
            },
          })}
        />

        <Typography
          sx={(theme) => ({
            fontSize: "40px",
            marginBottom: "10px",
            color: "#eeeeee",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #000, 0 0 20px #00e0ff",
            fontWeight: 700,
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "26px",
            },
          })}
        >
          Hi! I'm Jorgelina Baudracco
        </Typography>

        <Typography
          sx={(theme) => ({
            fontSize: "24px",
            color: "#eeeeee",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            textAlign: "center",
            mt: 4,
            textShadow: "0 0 6px #000",
            [theme.breakpoints.down("sm")]: {
              fontSize: "18px",
              mt: 2,
            },
          })}
        >
          Full Stack Developer | QA Manual
        </Typography>

        <Typography
          sx={(theme) => ({
            fontSize: "18px",
            color: "#cccccc",
            fontStyle: "italic",
            mt: 2,
            fontFamily: "'Orbitron', sans-serif",
            opacity: 0.9,
            textShadow: "0 0 3px #000",
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
            },
          })}
        >
          "Code with purpose, create with passion."
        </Typography>

        {/* Descripción */}
        <Typography
          sx={(theme) => ({
            fontSize: "24px",
            color: "#eeeeee",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 600,
            textAlign: "center",
            mt: 4,
            mb: 4,
            textShadow: "0 0 6px #000",
            [theme.breakpoints.down("sm")]: {
              fontSize: "16px",
              mt: 2,
              mb: 3,
            },
          })}
        >
          I love building clean, interactive, and accessible web experiences that solve real-world problems.
        </Typography>

        {/* Botón */}
        <Button
          variant="contained"
          sx={(theme) => ({
            color: "#000",
            backgroundColor: "#eeeeee",
            padding: "10px 25px",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            letterSpacing: "1px",
            borderRadius: "30px",
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#00e0ff",
              color: "#000",
              boxShadow: "0 0 10px #00e0ff",
            },
            [theme.breakpoints.down("sm")]: {
              padding: "8px 18px",
              fontSize: "14px",
            },
          })}
        >
          Contact Me!
        </Button>

        {/* Íconos sociales */}
        <Box 
          sx={(theme) => ({
            display: "flex",
            gap: 3,
            mt: 4,
            [theme.breakpoints.down("sm")]: {
              gap: 2,
              mt: 3,
            },
          })}
          >
            <a
            href="https://github.com/jolebaudracco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={(theme) => ({
                fontSize: 40,
                color: "#eeeeee",
                "&:hover": { color: "#00e0ff" },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 30,
                },
              })}
            />
          </a>
          <a href="yole126@gmail.com">
            <EmailIcon
              sx={(theme) => ({
                fontSize: 40,
                color: "#eeeeee",
                "&:hover": { color: "#00e0ff" },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 30,
                },
              })}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jole-baudracco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={(theme) => ({
                fontSize: 40,
                color: "#eeeeee",
                "&:hover": { color: "#00e0ff" },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 30,
                },
              })}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;



