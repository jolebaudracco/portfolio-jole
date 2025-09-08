import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import certDev from '../assets/certificates/CERTIFICADO WEB DEVELOPER.jpg';
import certQA from '../assets/certificates/Certificate of QA.jpg';
import certCypress from '../assets/certificates/cypress course - image.jpg';
import cvPDF from '../assets/CV - DEV & QA TESTER - 2025.pdf';

const Certifications = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        padding: "90px 20px",
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        height:'100%',
        animation: "fadeIn 2s ease-in-out",
        mt:8
      }}
    >
      {/* Contenedor con fondo */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(6px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'center',
          // width: "100%",
          maxWidth: "1100px",
          height:'100%'
        }}
      >
        <Typography
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
          Certifications & CV
        </Typography>

        {/* Imágenes de certificados */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mb: 5
          }}
        >
          {[certDev, certQA, certCypress].map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Certificate ${index + 1}`}
              sx={{
                width: { xs: "90vw", md: "30%" },
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.7)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 40px rgba(0, 224, 255, 0.5)"
                }
              }}
            />
          ))}
        </Box>

        {/* Botón para ver CV */}
        <Button
          href={cvPDF}
          target="_blank"
          variant="contained"
          startIcon={<PictureAsPdfIcon />}
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            padding: "10px 20px",
            backgroundColor: "#eeeeee",
            color: "#000",
            '&:hover': {
              backgroundColor: "#00e0ff",
              color: "#000",
              boxShadow: "0 0 15px #00e0ff"
            }
          }}
        >
          View My CV
        </Button>
      </Box>
    </Box>
  );
};

export default Certifications;
