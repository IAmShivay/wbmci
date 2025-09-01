import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Modal,
  Fade,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import StandaloneForm from "../PopupForm/PopupForm";

interface Hospital {
  id: number;
  name: string;
  description: string;
  image: string;
  redirectUrl: string;
}

const hospitals: Hospital[] = [
  {
    id: 1,
    name: "IQ City Knowledge & Health campus",
    description: "Comprehensive medical education with state-of-the-art facilities and experienced faculty.",
    image: "https://iqcity.in/wp-content/uploads/2019/10/logo.png",
    redirectUrl: "/iqcity.in",
  },
  {
    id: 2,
    name: "Gouri Devi Hospital & Research Institute",
    description: "Professional nursing education with hands-on clinical training and modern healthcare practices.",
    image: "https://gouridevihospitals.com/wp-content/uploads/2024/01/logo-3.png",
    redirectUrl: "/gouridevihospitals.com",
  },
  {
    id: 3,
    name: "East West Institute of Medical Sciences & Research",
    description: "Advanced pharmaceutical education focusing on drug development and healthcare solutions.",
    image: "https://eastwestmedical.in/assets/BlackLogo-CpuD5bhO.png",
    redirectUrl: "/eastwestmedical.in",
  },
  {
    id: 4,
    name: "Icare Institute of Medical Sciences",
    description: "General Nursing and Midwifery program with comprehensive healthcare training.",
    image: "https://icaremedicalcollege.in/assets/images/ICARE_LOGO.png",
    redirectUrl: "/icaremedicalcollege.in",
  },
  {
    id: 5,
    name: "Sanakamedical",
    description: "Postgraduate medical specialization programs with advanced clinical training.",
    image: "https://sanakamedical.com/assets/Loader-BmSY7evn.svg",
    redirectUrl: "/sanakamedical.com",
  },
  {
    id: 6,
    name: "KPC Medical College",
    description: "Comprehensive healthcare services with modern medical facilities and expert care.",
    image: "https://images.shiksha.com/mediadata/images/1600746904phpQtmv9f.jpg",
    redirectUrl: "/kpcmedicalcollege.in",
  },
];

const HospitalCards: React.FC = () => {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(() => {
    // Check if user has already submitted a form (stored in localStorage)
    return localStorage.getItem('sanaka_lead_submitted') === 'true';
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCardClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);

    // If user has already submitted a form, show success popup directly
    if (hasSubmittedForm) {
      setSuccessDialogOpen(true);
    } else {
      // First time user - show the form modal
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedHospital(null);
  };

  const handleFormSubmit = () => {
    // Mark user as having submitted a form (store in localStorage)
    localStorage.setItem('sanaka_lead_submitted', 'true');
    setHasSubmittedForm(true);

    // Close the form modal and show success dialog
    handleCloseModal();
    setSuccessDialogOpen(true);
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: { xs: 2, sm: 4, md: 5, lg: 6 },
          px: { xs: 1, sm: 3, md: 4, lg: 5 },
          backgroundColor: "#f8f9fa",
          minHeight: { xs: "auto", sm: "600px", md: "700px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1600px",
            margin: "0 auto",
            width: "100%",
            px: { xs: 0, sm: 1, md: 2 },
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 3, sm: 5, md: 6 },
              px: { xs: 1, sm: 3, md: 4 },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#0035B3",
                mb: { xs: 2, sm: 2.5, md: 3 },
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
                textShadow: "0 2px 4px rgba(0, 53, 179, 0.1)",
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              }}
            >
              Our Partner Hospitals & Institutes
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: { xs: "100%", sm: "600px", md: "800px" },
                mx: "auto",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                px: { xs: 1, sm: 2 },
              }}
            >
              Discover excellence in medical education and healthcare through our
              trusted network of premier institutions
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 1.5, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{
              width: "100%",
              margin: 0,
              px: { xs: 0, sm: 2, md: 3 },
            }}
          >
          {hospitals.map((hospital, index) => (
            <Grid item xs={12} sm={6} md={4} key={hospital.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: { xs: 300, sm: 340, md: 370, lg: 400 },
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: { xs: "12px", sm: "16px", md: "20px" },
                    boxShadow: "0 4px 20px rgba(0, 53, 179, 0.1)",
                    border: "1px solid rgba(0, 53, 179, 0.05)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(0, 53, 179, 0.2)",
                      transform: "translateY(-4px)",
                    },
                  }}
                  onClick={() => handleCardClick(hospital)}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "180px", sm: "200px", md: "220px" },
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f8f9fa",
                        padding: { xs: 1, sm: 1.5, md: 2 },
                      }}
                    >
                      <Box
                        component="img"
                        src={hospital.image}
                        alt={hospital.name}
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          objectPosition: "center",
                          transition: "transform 0.3s ease, filter 0.3s ease",
                          filter: "brightness(1) contrast(1.05)",
                          imageRendering: "high-quality",
                          WebkitImageRendering: "high-quality",
                          MozImageRendering: "high-quality",
                          msImageRendering: "high-quality",
                          "&:hover": {
                            transform: "scale(1.03)",
                            filter: "brightness(1.05) contrast(1.1)",
                          },
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                        loading="lazy"
                      />
                    </Box>

                    {/* Content Overlay - only for background effect if needed */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
                        height: "60%",
                        pointerEvents: "none",
                      }}
                    />
                    <CardContent
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 2,
                        color: "white",
                        width: "100%",
                        p: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                        background: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        minHeight: { xs: "120px", sm: "140px", md: "160px" },
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          mb: { xs: 1, sm: 1.5, md: 2 },
                          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" },
                          textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6)",
                          lineHeight: { xs: 1.2, sm: 1.25, md: 1.3 },
                          textAlign: { xs: "center", sm: "left" },
                        }}
                      >
                        {hospital.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.95,
                          lineHeight: { xs: 1.4, sm: 1.45, md: 1.5 },
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem", lg: "1rem" },
                          textShadow: "0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)",
                          display: "-webkit-box",
                          WebkitLineClamp: { xs: 3, sm: 4, md: 4 },
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textAlign: { xs: "center", sm: "left" },
                          px: { xs: 1, sm: 0 },
                        }}
                      >
                        {hospital.description}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>

      {/* Enhanced Lead Form Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "relative",
              width: { xs: "95%", sm: "85%", md: "70%", lg: "60%", xl: "50%" },
              maxWidth: { xs: "400px", sm: "500px", md: "600px" },
              maxHeight: { xs: "90vh", sm: "85vh", md: "90vh" },
              overflow: "auto",
              bgcolor: "background.paper",
              borderRadius: { xs: 2, sm: 3, md: 4 },
              boxShadow: "0 8px 32px rgba(0, 53, 179, 0.2)",
              border: "1px solid rgba(0, 53, 179, 0.1)",
              outline: "none",
            }}
          >
            <Box
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderBottom: 1,
                borderColor: "rgba(0, 53, 179, 0.1)",
                background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
                borderRadius: { xs: "8px 8px 0 0", sm: "12px 12px 0 0", md: "16px 16px 0 0" },
              }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                component="h2"
                textAlign="center"
                sx={{
                  color: "#ffffff",
                  fontWeight: "600",
                  fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                {selectedHospital?.name} - Inquiry Form
              </Typography>
            </Box>
            <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
              <StandaloneForm onSubmitSuccess={handleFormSubmit} />
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={handleCloseSuccessDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            pb: 1,
            pt: 3,
            px: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(76, 175, 80, 0.3)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                ✓
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: "#2E7D32",
                textAlign: "center",
              }}
            >
              Thank You!
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ px: 3, pb: 2 }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {hasSubmittedForm && modalOpen === false
              ? "Thank you for your interest! Our executive will contact you ASAP regarding your previous inquiry."
              : "Your inquiry has been submitted successfully. Our executive will contact you ASAP based on your query."
            }
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#666",
              fontSize: "1rem",
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            Meanwhile, if you want you can reach out to us on given numbers:
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              p: 2,
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
              border: "1px solid #e9ecef",
            }}
          >
            <Typography
              component="a"
              href="tel:+917477798949"
              sx={{
                color: "#0035B3",
                fontSize: "1.1rem",
                fontWeight: "600",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              📞 +91 74777 98949
            </Typography>
            <Typography
              component="a"
              href="tel:+917477798950"
              sx={{
                color: "#0035B3",
                fontSize: "1.1rem",
                fontWeight: "600",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              📞 +91 74777 98950
            </Typography>
            <Typography
              component="a"
              href="tel:+917063592396"
              sx={{
                color: "#0035B3",
                fontSize: "1.1rem",
                fontWeight: "600",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              📞 +91 70635 92396
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, px: 3 }}>
          <Button
            onClick={handleCloseSuccessDialog}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #0035B3 0%, #002a8f 100%)",
              color: "white",
              fontWeight: "600",
              px: 4,
              py: 1.5,
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 4px 12px rgba(0, 53, 179, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #002a8f 0%, #001f6b 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 6px 16px rgba(0, 53, 179, 0.4)",
              },
            }}
          >
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HospitalCards;
