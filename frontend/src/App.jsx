import { CssBaseline } from "@mui/material";
import "./App.css";
import HomePage from "./pages/HomePage";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
