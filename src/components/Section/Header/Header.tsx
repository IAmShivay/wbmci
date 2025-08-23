import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: { xs: "0 0 20px 20px", md: "0 0 25px 25px" },
          boxShadow: "0 4px 20px rgba(0, 53, 179, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          border: "1px solid rgba(0, 53, 179, 0.1)",
          borderTop: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            px: { xs: 1, sm: 1.5, md: 2.5, lg: 3.5 },
            py: { xs: 0.8, sm: 1.2, md: 1.8 },
            minHeight: { xs: "60px", sm: "70px", md: "80px" },
            gap: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {/* Enhanced Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: { xs: "6px 12px", sm: "8px 16px" },
              borderRadius: { xs: "12px", sm: "15px" },
              background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
              boxShadow: "0 4px 15px rgba(0, 53, 179, 0.25)",
              transition: "all 0.3s ease",
              flexShrink: 0,
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 6px 20px rgba(0, 53, 179, 0.35)",
              }
            }}
            onClick={() => window.location.href = "/"}
          >
            {/* Logo Icon Container */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? 40 : 48,
                height: isMobile ? 40 : 48,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                mr: 2,
                backdropFilter: "blur(10px)",
              }}
            >
              <LocalHospitalIcon
                sx={{
                  fontSize: isMobile ? 24 : 28,
                  color: "#ffffff",
                }}
              />
            </Box>

            {/* Logo Text */}
            <Box>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  fontWeight: "800",
                  color: "#ffffff",
                  fontFamily: "'Inter', 'Roboto', sans-serif",
                  letterSpacing: "1px",
                  lineHeight: 1,
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                WBMCI
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: "500",
                  fontSize: isMobile ? "0.7rem" : "0.8rem",
                  lineHeight: 1,
                  display: "block",
                  mt: 0.5,
                  letterSpacing: "0.5px",
                }}
              >
              </Typography>
            </Box>
          </Box>

          {/* Right Side Navigation */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 0.8, md: 1.2 },
              flexGrow: 1,
              justifyContent: "flex-end",
              pr: { xs: 0, sm: 0.5, md: 1 },
              flexShrink: 0,
              minWidth: { xs: "auto", sm: "auto", md: "auto" },
            }}
          >
            {/* NEET Updates Button */}
            <Button
              onClick={() => window.location.href = "/neetupdates"}
              sx={{
                background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem" },
                px: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 0.8, sm: 1, md: 1.2 },
                minWidth: { xs: "auto", sm: "auto", md: "auto" },
                minHeight: { xs: "32px", sm: "36px", md: "40px" },
                borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                textTransform: "none",
                boxShadow: "0 3px 12px rgba(0, 53, 179, 0.3), 0 1px 4px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.6s",
                },
                "&:hover": {
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  color: "#0035B3",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0, 53, 179, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(0, 53, 179, 0.3)",
                  "&:before": {
                    left: "100%",
                  },
                },
                "&:active": {
                  transform: "translateY(-1px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0.5, sm: 0.7, md: 0.8 },
                }}
              >
                {!isMobile && <TrendingUpIcon sx={{ fontSize: { sm: 16, md: 18 } }} />}
                <Typography
                  sx={{
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    lineHeight: 1.2,
                    letterSpacing: { xs: "0.3px", sm: "0.4px", md: "0.5px" },
                    whiteSpace: "nowrap",
                    fontFamily: "'Inter', 'Roboto', sans-serif",
                  }}
                >
                  {isMobile ? "NEET" : "NEET Updates"}
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>


      {/* Enhanced Floating Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 30,
          right: isMobile ? 20 : 30,
          zIndex: 1000,
        }}
      >
        <Stack direction="column" spacing={1.5} alignItems="center">
          {/* WhatsApp Button */}
          <IconButton
            href="https://wa.me/919046228190"
            target="_blank"
            sx={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              color: "white",
              width: isMobile ? 56 : 64,
              height: isMobile ? 56 : 64,
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 8px 25px rgba(37, 211, 102, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <WhatsAppIcon sx={{ fontSize: isMobile ? 28 : 32 }} />
          </IconButton>

          {/* Phone Button 1 */}
          <IconButton
            href="tel:+917477798949"
            sx={{
              background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
              color: "white",
              width: isMobile ? 48 : 56,
              height: isMobile ? 48 : 56,
              borderRadius: "14px",
              boxShadow: "0 6px 20px rgba(0, 53, 179, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                background: "linear-gradient(135deg, #002a8f 0%, #001f6b 100%)",
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 8px 25px rgba(0, 53, 179, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PhoneIcon sx={{ fontSize: isMobile ? 20 : 24 }} />
          </IconButton>

          {/* Phone Button 2 */}
          <IconButton
            href="tel:+917063592396"
            sx={{
              background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
              color: "white",
              width: isMobile ? 48 : 56,
              height: isMobile ? 48 : 56,
              borderRadius: "14px",
              boxShadow: "0 6px 20px rgba(0, 53, 179, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                background: "linear-gradient(135deg, #002a8f 0%, #001f6b 100%)",
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 8px 25px rgba(0, 53, 179, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PhoneIcon sx={{ fontSize: isMobile ? 20 : 24 }} />
          </IconButton>
        </Stack>
      </motion.div>
    </>
  );
};

export default Header;
