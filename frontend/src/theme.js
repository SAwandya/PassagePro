import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#FF5722",
    },
    secondary: {
      main: "#0000FF",
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#FF5722",
        },
        thumb: {
          backgroundColor: "#fff",
          border: "2px solid #FF5722",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#666666",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
  },
});

export default theme;
