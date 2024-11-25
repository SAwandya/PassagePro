import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RegisterView from "./RegisterView";
import SignupView from "./SignupView";
import LoginView from "./LoginView";

const AuthModal = ({ open, onClose }) => {
  const [view, setView] = useState("register");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ p: 4, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {view === "register" && <RegisterView onViewChange={setView} />}
        {view === "signup" && <SignupView onViewChange={setView} />}
        {view === "login" && <LoginView onViewChange={setView} />}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
