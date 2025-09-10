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
        justifyContent: 'center',
        padding: { xs: "40px 40px", md: "90px 20px" },
        width: "90%",
        animation: "fadeIn 2s ease-in-out",
        mt: 0,
        height: { xs: "auto", md: "100vh"}, // altura completa en desktop
        overflowY: { xs: "auto", md: "hidden"}, // scroll solo en mobile
        boxSizing: 'border-box', // para que el padding no afecte el tamaño total
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          borderRadius: "20px",
          padding: { xs: "20px", md: "40px" },
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(6px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            marginBottom: { xs: "20px", md: "30px" },
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #000, 0 0 20px #00e0ff",
            fontWeight: 700,
            textAlign: "center"
          }}
        >
          Certifications & CV
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, md: 4 },
            mb: { xs: 3, md: 5 },
            width: "100%",
            overflowY: { xs: "auto", md: "visible" },
            maxHeight: { xs: "calc(100vh - 120px)", md: "auto" },
            paddingRight: { xs: "10px", md: 0 },
            paddingTop: { xs: 2, md: 0 },
            paddingBottom: { xs: 2, md: 0 },
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-thumb": { backgroundColor: "#00e0ff", borderRadius: "4px" },
            "&::-webkit-scrollbar-track": { backgroundColor: "rgba(255,255,255,0.1)" }
          }}
        >
          {[certDev, certQA, certCypress].map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Certificate ${index + 1}`}
              sx={{
                width: { xs: "90%", md: "30%" },
                height: "auto",
                borderRadius: 2,
                objectFit: "contain",
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

        <Button
          href={cvPDF}
          target="_blank"
          variant="contained"
          startIcon={<PictureAsPdfIcon />}
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            padding: { xs: "8px 16px", md: "10px 20px" },
            fontSize: { xs: "0.8rem", md: "1rem" },
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
