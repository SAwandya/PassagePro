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
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});

export default theme;
