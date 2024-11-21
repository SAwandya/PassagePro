import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#FF5722",
    },
    secondary: {
      main: "#0000FF",
    },
  },
});

export default theme;
