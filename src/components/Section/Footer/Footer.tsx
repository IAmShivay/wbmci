import React from "react";
import {
  Typography,
  Box,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "relative",
        color: "#ffffff",
        py: { xs: 6, sm: 7, md: 8, lg: 9 },
        background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
        borderTop: "3px solid rgba(255, 255, 255, 0.1)",
        borderRadius: { xs: "25px 25px 0 0", md: "30px 30px 0 0" },
        minHeight: { xs: "140px", sm: "160px", md: "180px", lg: "200px" },
        display: "flex",
        alignItems: "center",
        boxShadow: "0 -4px 20px rgba(0, 53, 179, 0.3), 0 -2px 8px rgba(0, 0, 0, 0.1)",
        mt: { xs: 4, sm: 5, md: 6 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Box
          textAlign="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, sm: 2.5, md: 3 }
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            color="#ffffff"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.4rem", lg: "1.5rem" },
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              letterSpacing: "0.5px",
              lineHeight: { xs: 1.3, md: 1.4 }
            }}
          >
            Made with ❤️ by Durgapur Education Foundation
          </Typography>
          <Typography
            variant="body1"
            color="rgba(255, 255, 255, 0.9)"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" },
              opacity: 0.95,
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              letterSpacing: "0.3px",
              lineHeight: { xs: 1.4, md: 1.5 }
            }}
          >
            Empowering Healthcare Education Since 2015
          </Typography>

          {/* Decorative Element */}
          <Box
            sx={{
              width: { xs: "60px", sm: "80px", md: "100px" },
              height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
              borderRadius: "1px",
              mt: { xs: 1, md: 1.5 }
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
