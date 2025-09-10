import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = ({ setSelectedScreen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", icon: <HomeIcon />, screen: "home" },
    { label: "About Me", icon: <AccountCircleIcon />, screen: "about me" },
    { label: "Certifications", icon: <WorkspacePremiumIcon />, screen: "certifications" },
    { label: "Projects", icon: <GitHubIcon />, screen: "projects" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "rgba(128, 131, 133, 0.98)",
        backdropFilter: "blur(5px)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 0",
        zIndex: 1000,
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.45)",
      }}
    >
      {/* Logo / Título */}
      <Box sx={{ ml: 2 }}>
        <Typography
          sx={(theme) => ({
            fontSize: "32px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "20px", // más chico en mobile
            },
            color: "#eeeeee",
            fontFamily: "'Orbitron', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow:
              "0 0 5px rgba(128, 131, 133, 0.98), 0 0 15px rgba(59, 173, 255, 0.08)",
            fontWeight: 700,
            cursor: "default",
          })}
        >
          Jole's Code
        </Typography>
      </Box>

      {/* Botones desktop */}
      <Box
        sx={(theme) => ({
          mr: 2,
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            display: "none", // ocultar botones en mobile
          },
        })}
      >
        {menuItems.map((item) => (
          <Button
            key={item.screen}
            variant="outlined"
            onClick={() => setSelectedScreen(item.screen)}
            sx={{
              color: "#eeeeee",
              borderColor: "rgba(128, 131, 133, 0.98)",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow:
                "0 0 5px rgba(128, 131, 133, 0.98), 0 0 10px rgba(52, 53, 54, 0.98)",
              "&:hover": {
                backgroundColor: "rgba(128, 131, 133, 0.98)",
                color: "#000",
                borderColor: "rgba(52, 53, 54, 0.98)",
                boxShadow:
                  "0 0 10px rgba(52, 53, 54, 0.98), 0 0 20px rgba(52, 53, 54, 0.98)",
              },
              mr: 3,
            }}
          >
            {item.label} {item.icon}
          </Button>
        ))}
      </Box>

      {/* Menú hamburguesa en mobile */}
      <Box
        sx={(theme) => ({
          display: "none",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            mr: 1,
          },
        })}
      >
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenuOpen}
        >
          <MenuIcon sx={{ color: "#eeeeee" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(128, 131, 133, 0.98)",
              color: "#eeeeee",
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.screen}
              onClick={() => {
                setSelectedScreen(item.screen);
                handleMenuClose();
              }}
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {item.icon} <Box sx={{ ml: 1 }}>{item.label}</Box>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default NavBar;
