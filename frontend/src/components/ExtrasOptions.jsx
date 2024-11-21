import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import SupportIcon from "@mui/icons-material/Support";
import SmsIcon from "@mui/icons-material/Sms";
import SecurityIcon from "@mui/icons-material/Security";

const ExtrasOptions = () => {
  return (
    <Box>
      {/* Premium Support Option */}
      <ExtrasOptionCard
        icon={<SupportIcon sx={{ fontSize: 40, color: "#1976D2" }} />}
        title="Premium customer support"
        description="Skip the queue and get faster assistance when reaching out customer support."
        price={3.48}
      />

      {/* SMS Reminders Option */}
      <ExtrasOptionCard
        icon={<SmsIcon sx={{ fontSize: 40, color: "#1976D2" }} />}
        title="Send me SMS reminders"
        description="Stay in the loop! Receive instant booking approval and departure alerts via SMS."
        price={2.0}
      />

      {/* Insurance Option */}
      <ExtrasOptionCard
        icon={<SecurityIcon sx={{ fontSize: 40, color: "#1976D2" }} />}
        title="Add insurance to my ride"
        description={
          <Box>
            <Typography variant="body2" gutterBottom>
              The policy covers injuries sustained during the booked ride. Any
              necessary claims for personal trauma will be submitted to the
              policy supplier, CheckDi. For the supplier's full terms and
              conditions, please visit{" "}
              <Link href="#" color="primary">
                here
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              The prices listed below include all passengers and trips booked.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Accidental personal trauma - US$2,881
            </Typography>
            <Typography variant="body2" gutterBottom>
              Accident medical cost - US$288
            </Typography>
          </Box>
        }
        price={9.07}
        defaultChecked={true}
      />
    </Box>
  );
};

const ExtrasOptionCard = ({
  icon,
  title,
  description,
  price,
  defaultChecked = false,
}) => {
  return (
    <Box
      sx={{
        p: 3,
        mb: 2,
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        "&:hover": {
          borderColor: "#1976D2",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box>{icon}</Box>
        <Box sx={{ flex: 1 }}>
          <FormControlLabel
            control={<Checkbox defaultChecked={defaultChecked} />}
            label={
              <Box>
                <Typography variant="subtitle1">{title}</Typography>
                <Box sx={{ mt: 1 }}>
                  {typeof description === "string" ? (
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  ) : (
                    description
                  )}
                </Box>
              </Box>
            }
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" color="primary">
            + US${price.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExtrasOptions;
