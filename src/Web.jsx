import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  Box,
  CssBaseline,
  IconButton,
  Drawer,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";   // Website
import SettingsIcon from "@mui/icons-material/Settings";   // API
import BrushIcon from "@mui/icons-material/Brush";         // UI


export default function Web() {

  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menu = ["home","about","experience","skills","projects","freelance","contact"];

  // ✅ THEME
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#00d4ff" },
      background: {
        default: darkMode ? "#0d1117" : "#fbfbf4",
      },
    },
    typography: {
      fontFamily: "'Poppins','Inter',sans-serif",
      h2: { fontWeight: 700, letterSpacing: "2px" },
      h4: { fontWeight: 600 },
      body1: { fontSize: "15px", lineHeight: 1.7 },
    },
  });

  // ✅ SCROLL ACTIVE
  useEffect(() => {
    const handleScroll = () => {
      menu.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  // ✅ CARD STYLE
  const sectionCard = {
    p: 5,
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
    background: darkMode
      ? "rgba(255,255,255,0.05)"
      : "rgba(255,255,255,0.9)",
    color: darkMode ? "#fff" : "#111",
    boxShadow: darkMode
      ? "0 10px 40px rgba(0,0,0,0.6)"
      : "0 10px 30px rgba(0,0,0,0.1)",
    mb: 5,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ✅ GLOBAL BOX + KEYFRAMES */}
      <Box
        sx={{
          "@keyframes slideFade": {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },

          backgroundImage: `
            linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.9)),
            url('/bg.jpg')
          `,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          
        }}
      >

        {/* ✅ NAVBAR */}
        <AppBar
          position="sticky"
          sx={{
            backdropFilter: "blur(12px)",
            background: darkMode
              ? "rgba(0,0,0,0.6)"
              : "rgba(255,255,255,0.95)",
          }}
        >
          <Toolbar>
  <Box
  onClick={() => scrollToSection("home")}
  sx={{
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  }}
>
  <Box
    sx={{
      px: 2,
      py: 1,

      borderRadius: "30px",

      fontWeight: "bold",
      fontSize: "16px",

      cursor: "pointer",

      display: "inline-block",

      background: "linear-gradient(135deg,#00d4ff,#007cf0)",
      color: "#fff",

      boxShadow: "0 5px 15px rgba(0,212,255,0.4)",

      transition: "all 0.3s ease",

      "&:hover": {
        transform: "scale(1.08)",
        boxShadow: "0 10px 25px rgba(0,212,255,0.7)",
      },
    }}
  >
    Mahesh.dev
  </Box>
</Box>



            {/* Desktop */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {menu.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color:
                      active === item
                        ? "#00d4ff"
                        : darkMode
                        ? "#fff"
                        : "#222",
                    borderBottom:
                      active === item ? "2px solid #00d4ff" : "none",
                  }}
                >
                  {item.toUpperCase()}
                </Button>
              ))}
            </Box>

            {/* Mobile */}
            <IconButton
              sx={{ display: { md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>

            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* ✅ MOBILE DRAWER */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              width: 260,
              p: 3,
              background: darkMode
                ? "linear-gradient(#0d1117,#161b22)"
                : "#fff",
            }}
          >
            {menu.map((item) => (
              <Button
                key={item}
                fullWidth
                onClick={() => scrollToSection(item)}
                sx={{
                  justifyContent: "flex-start",
                  mb: 2,
                  fontWeight: "bold",
                  color:
                    active === item
                      ? "#00d4ff"
                      : darkMode
                      ? "#e6edf3"
                      : "#333",
                  "&:hover": {
                    color: "#00d4ff",
                    transform: "translateX(5px)",
                  },
                }}
              >
                {item.toUpperCase()}
              </Button>
            ))}
          </Box>
        </Drawer>

        {/* ✅ HERO */}
        <Container id="home">
          <Box sx={{ ...sectionCard, textAlign: "center" }}>
            <Avatar
              src="/profile.jpg"
              sx={{ width: 120, height: 120, mx: "auto" }}
            />

            {/* ✅ Animated Welcome */}
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "3px",
                textTransform: "uppercase",
                background: "linear-gradient(90deg,#00d4ff,#007cf0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0,
                animation: "slideFade 1.5s ease forwards",
                animationDelay: "0.5s",
                mt: 2,
              }}
            >
              👋 Welcome to My Portfolio
            </Typography>

            {/* ✅ Name */}
            <Typography
              variant="h2"
              sx={{
                mt: 2,
                background: "linear-gradient(90deg,#00d4ff,#007cf0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0,
                animation: "slideFade 1.5s ease forwards",
                animationDelay: "1s",
              }}
            >
              SAJJA MAHESH BABU
            </Typography>

            {/* ✅ Typing */}
            <Box sx={{ height: "35px", mt: 1 }}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "FastAPI Backend Engineer",
                  2000,
                  "MySQL Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: "20px", fontWeight: "bold" }}
              />
            </Box>

            {/* ✅ Button */}
            <Box mt={3}>
              <Button
                variant="contained"
                href="/resume.pdf"
                download
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  background: "linear-gradient(135deg,#00d4ff,#007cf0)",
                  color: "#fff",
                  boxShadow: "0 8px 25px rgba(0,212,255,0.5)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Download Resume
              </Button>
            </Box>
          </Box>
        </Container>

        {/* ✅ ABOUT */}
        
      {/* ✅ ABOUT (PREMIUM UI) */}
<Container id="about">
  <Box sx={sectionCard}>

    <Typography variant="h4" textAlign="center">
      About Me
    </Typography>

    <Grid container spacing={3} mt={2} alignItems="center">

      {/* ✅ LEFT SIDE - TEXT */}
      <Grid item xs={12} md={7}>
        <Typography
          sx={{
            fontSize: "15px",
            lineHeight: 1.8,
            opacity: 0.9
          }}
        >
          I am a <b>Full Stack Developer</b> with hands-on experience in building
          scalable web applications using <b>React.js</b> and <b>FastAPI</b>.
          I specialize in designing clean user interfaces, developing secure APIs,
          and creating high-performance dashboards.

          <br /><br />

          I have worked on real-world projects like task management systems,
          authentication platforms, and data-driven dashboards. My focus is always
          on writing clean code, improving performance, and delivering a great user experience.
        </Typography>

      </Grid>

      {/* ✅ RIGHT SIDE - SKILL HIGHLIGHTS */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >

          {[
            "⚡ Full Stack Development",
            "⚡ API Design & Integration",
            "⚡ Modern UI/UX (MUI)",
            "⚡ Scalable Backend Systems"
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                p: 2,
                borderRadius: "12px",

                background: darkMode ? "#161b22" : "#fff",

                transition: "0.3s",

                '&:hover': {
                  transform: "translateX(5px)",
                  background: "linear-gradient(135deg,#00d4ff,#007cf0)",
                  color: "#fff"
                }
              }}
            >
              <Typography fontWeight="bold">
                {item}
              </Typography>
            </Box>
          ))}

        </Box>
      </Grid>

    </Grid>

  </Box>
</Container>
      {/* ✅ EXPERIENCE (PREMIUM UI) */}
<Container id="experience">
  <Box sx={sectionCard}>

    <Typography variant="h4" textAlign="center">
      Experience
    </Typography>

    {/* ✅ WORK ITEMS */}
    <Box mt={3}>

      {[
        {
          company: "CommScope",
          role: "Full Stack Developer",
          period: "2025 – Present",
          desc: "Developed full-stack applications using React.js and FastAPI, built dashboards, and improved performance."
        },
        {
          company: "Mediacreche",
          role: "Associate Engineer",
          period: "2025",
          desc: "Built responsive UI, integrated backend APIs, and created reusable components."
        }
      ].map((exp, i) => (

        <Box
          key={i}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: "15px",

            position: "relative",
            paddingLeft: "25px",

            background: darkMode ? "#161b22" : "#fff",

            transition: "0.3s",

            borderLeft: "4px solid #00d4ff",  // ✅ timeline line

            '&:hover': {
              transform: "translateY(-8px)",
              boxShadow: "0 12px 35px rgba(0,212,255,0.2)"
            }
          }}
        >

          {/* ✅ DOT INDICATOR */}
          <Box
            sx={{
              position: "absolute",
              left: "-8px",
              top: "20px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#00d4ff",
              boxShadow: "0 0 10px #00d4ff"
            }}
          />

          {/* ✅ HEADER */}
          <Typography fontWeight="bold" fontSize="18px">
            {exp.role} – {exp.company}
          </Typography>

          {/* ✅ PERIOD */}
          <Typography fontSize="13px" opacity={0.7}>
            {exp.period}
          </Typography>

          {/* ✅ DESCRIPTION */}
          <Typography mt={1} fontSize="14px">
            {exp.desc}
          </Typography>

        </Box>

      ))}

    </Box>

  </Box>
</Container>


        {/* ✅ SKILLS */}
        <Container id="skills">
          <Box sx={sectionCard}>
            <Typography variant="h4">Skills</Typography>

            <Grid container spacing={3} mt={2}>
              {["React","FastAPI","Python","MySQL","MUI"].map((skill)=>(
                <Grid item xs={6} md={3} key={skill}>
                  <Box sx={{
                    p:3,textAlign:"center",borderRadius:"15px",
                    background: darkMode ? "#161b22":"#fff",
                    "&:hover":{
                      transform:"translateY(-10px)",
                      background:"linear-gradient(#00d4ff,#007cf0)",
                      color:"#fff"
                    }
                  }}>
                    {skill}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        {/* ✅ PROJECTS */}
<Container id="projects">
  <Box sx={sectionCard}>

    <Typography variant="h4" textAlign="center">
      Projects
    </Typography>

    <Grid container spacing={3} mt={2}>

      {[
        {
          title: "Project Tracker System",
          desc: "Task management system with dashboards, APIs, and role-based access."
        },
        {
          title: "User Management System",
          desc: "JWT authentication, user roles, and secure backend services."
        }
      ].map((project, i) => (

        <Grid item xs={12} md={6} key={i}>
          <Box
            sx={{
              p: 4,
              borderRadius: "15px",
              cursor: "pointer",

              background: darkMode ? "#161b22" : "#fff",
              transition: "0.3s",

              '&:hover': {
                transform: "translateY(-10px)",
                background: "linear-gradient(135deg,#00d4ff,#007cf0)",
                color: "#fff",
                boxShadow: "0 15px 40px rgba(0,212,255,0.4)"
              }
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {project.title}
            </Typography>

            <Typography mt={1} fontSize="14px">
              {project.desc}
            </Typography>

          </Box>
        </Grid>

      ))}

    </Grid>

  </Box>
</Container>
        {/* ✅ FREELANCE */}
<Container id="freelance">
  <Box sx={sectionCard}>

    <Typography variant="h4" textAlign="center">
      Freelance
    </Typography>

    <Grid container spacing={3} mt={2}>
      {[
        {
          title: "Website Development",
          desc: "Modern, responsive web apps using React.js",
          icon: <LanguageIcon sx={{ fontSize: 30 }} />
        },
        {
          title: "API Development",
          desc: "Secure and scalable backend APIs using FastAPI",
          icon: <SettingsIcon sx={{ fontSize: 30 }} />
        },
        {
          title: "UI Improvements",
          desc: "Enhancing UI with modern design and UX",
          icon: <BrushIcon sx={{ fontSize: 30 }} />
        }
      ].map((item, i) => (

        <Grid item xs={12} md={4} key={i}>
          <Box
            sx={{
              p: 3,
              borderRadius: "15px",
              textAlign: "center",
              cursor: "pointer",

              background: darkMode ? "#161b22" : "#fff",
              transition: "0.3s",

              '&:hover': {
                transform: "translateY(-10px)",
                background: "linear-gradient(135deg,#00d4ff,#007cf0)",
                color: "#fff",
                boxShadow: "0 15px 40px rgba(0,212,255,0.4)"
              }
            }}
          >
            {/* ✅ ICON */}
            <Box mb={1}>
              {item.icon}
            </Box>

            {/* ✅ TITLE */}
            <Typography fontWeight="bold" mt={1}>
              {item.title}
            </Typography>

            {/* ✅ DESC */}
            <Typography fontSize="14px" mt={1}>
              {item.desc}
            </Typography>

          </Box>
        </Grid>

      ))}
    </Grid>

  </Box>
</Container>


{/* ✅ CONTACT (TOP LEVEL UI) */}
<Container id="contact">
  <Box sx={{ ...sectionCard, textAlign: "center" }}>

    <Typography variant="h4">
      Contact
    </Typography>

    {/* ✅ HORIZONTAL BUTTONS */}
    <Box
      mt={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        flexWrap: "wrap",
      }}
    >

      
<a
  href="mailto:sajjamahesh143@gmail.com"
  style={{ textDecoration: "none" }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,

      px: 4,
      py: 1.8,
      borderRadius: "40px",

      fontWeight: "bold",
      fontSize: "16px",

      background: darkMode ? "#161b22" : "#fff",  // ✅ same as LinkedIn
      color: darkMode ? "#fff" : "#111",

      border: "1px solid #00d4ff",

      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease",

      "&:hover": {
        background: "linear-gradient(135deg,#00d4ff,#007cf0)",
        color: "#fff",
        transform: "scale(1.08)",
        boxShadow: "0 12px 30px rgba(0,212,255,0.6)",
      },
    }}
  >
    <EmailIcon />
    Email
  </Box>
</a>


      {/* ✅ LINKEDIN (FIXED ✅ NO NESTED TAG) */}
      <a
        href="https://www.linkedin.com/in/sajja-mahesh-babu-aa4316217/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,

            px: 4,
            py: 1.8,
            borderRadius: "40px",

            fontWeight: "bold",
            fontSize: "16px",

            background: darkMode ? "#161b22" : "#fff",
            color: darkMode ? "#fff" : "#111",

            border: "1px solid #00d4ff",

            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",

            "&:hover": {
              background: "linear-gradient(135deg,#00d4ff,#007cf0)",
              color: "#fff",
              transform: "scale(1.08)",
              boxShadow: "0 12px 30px rgba(0,212,255,0.6)",
            },
          }}
        >
          <LinkedInIcon />
          LinkedIn
        </Box>
      </a>

    </Box>

  </Box>
</Container>
 {/* ✅ FOOTER */}
<Box
  sx={{
    mt: 5,
    py: 3,

    textAlign: "center",

    borderTop: "1px solid",
    borderColor: darkMode ? "#222" : "#ddd",

    background: darkMode ? "#0d1117" : "#fff",
  }}
>

  {/* ✅ NAME / BRAND */}
  <Typography
    sx={{
      fontWeight: "bold",
      fontSize: "16px",

      background: "linear-gradient(90deg,#00d4ff,#007cf0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Mahesh.dev
  </Typography>

  {/* ✅ TAGLINE */}
  <Typography
    sx={{
      mt: 1,
      fontSize: "13px",
      opacity: 0.7,
    }}
  >
    Full Stack Developer | React.js | FastAPI
  </Typography>

  {/* ✅ COPYRIGHT */}
  <Typography
    sx={{
      mt: 1,
      fontSize: "12px",
      opacity: 0.6,
    }}
  >
    © {new Date().getFullYear()} Sajja Mahesh Babu. All rights reserved.
  </Typography>
 <Box
  mt={2}
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 3,
  }}
>

  {/* ✅ LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/sajja-mahesh-babu-aa4316217/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: "50%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        background: darkMode ? "#161b22" : "#fff",
        color: "#0A66C2",

        border: "1px solid #0A66C2",

        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",

        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px) scale(1.1)",
          background: "#0A66C2",
          color: "#fff",
          boxShadow: "0 10px 30px rgba(10,102,194,0.7)",
        },
      }}
    >
      <LinkedInIcon sx={{ fontSize: 26 }} />
    </Box>
  </a>

  {/* ✅ EMAIL */}
  <a
    href="mailto:sajjamahesh143@gmail.com"
    style={{ textDecoration: "none" }}
  >
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: "50%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        background: darkMode ? "#161b22" : "#fff",
        color: "#EA4335",

        border: "1px solid #EA4335",

        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",

        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px) scale(1.1)",
          background: "#EA4335",
          color: "#fff",
          boxShadow: "0 10px 30px rgba(234,67,53,0.7)",
        },
      }}
    >
      <EmailIcon sx={{ fontSize: 26 }} />
    </Box>
  </a>

</Box>

</Box>

    </Box>
    </ThemeProvider>
    );
}
