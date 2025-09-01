import React, { useState, useCallback, useMemo } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  SelectChangeEvent,
} from "@mui/material";
import { leadRegister } from "../../app/leads/leadSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { states } from "./state";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
  place: string;
  createdAt?: string;
  updatedAt?: string;
}



const theme = createTheme({
  palette: {
    primary: {
      main: "#0035B3",
    },
    secondary: {
      main: "#4CAF50",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

interface StandaloneFormProps {
  onSubmitSuccess?: () => void;
}

const StandaloneForm: React.FC<StandaloneFormProps> = ({ onSubmitSuccess }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
    place: "",
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | SelectChangeEvent<string>
    ) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (name === "phoneNumber") {
        const isValidPhoneNumber = /^\d{10}$/.test(value);
        setPhoneError(
          isValidPhoneNumber ? null : "Phone number must be 10 digits."
        );
      }
      if (name === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailError(
          isValidEmail ? null : "Please enter a valid email address."
        );
      }
    },
    []
  );



  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate form fields
      if (!formData.name.trim()) {
        toast.error("Please enter your name");
        return;
      }
      if (!formData.email.trim()) {
        toast.error("Please enter your email");
        return;
      }
      if (emailError) {
        toast.error("Please enter a valid email address");
        return;
      }
      if (!formData.phoneNumber.trim()) {
        toast.error("Please enter your phone number");
        return;
      }
      if (phoneError) {
        toast.error("Please enter a valid phone number");
        return;
      }
      if (!formData.course) {
        toast.error("Please select a course");
        return;
      }
      if (!formData.place) {
        toast.error("Please select your place");
        return;
      }

      try {
        // Add timestamps to form data
        const currentTimestamp = new Date().toISOString();
        const formDataWithTimestamps = {
          ...formData,
          createdAt: currentTimestamp,
          updatedAt: currentTimestamp,
        };

        const result = await dispatch(leadRegister(formDataWithTimestamps));

        if (leadRegister.fulfilled.match(result)) {
          toast.success("Form submitted successfully! Our team will contact you soon.");

          // Reset form
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            course: "",
            place: "",
          });

          // Call the success callback if provided
          if (onSubmitSuccess) {
            setTimeout(() => {
              onSubmitSuccess();
            }, 1500);
          }
        } else if (leadRegister.rejected.match(result)) {
          // Handle specific error cases
          const errorPayload = result.payload;
          let errorMessage = "Something went wrong. Please try again.";

          if (typeof errorPayload === 'string') {
            errorMessage = errorPayload;
          } else if (errorPayload && typeof errorPayload === 'object') {
            const payload = errorPayload as any;
            if (payload.message) {
              errorMessage = payload.message;
            } else if (payload.error) {
              errorMessage = payload.error;
            }
          }

          toast.error(errorMessage);
        }
      } catch (err: any) {
        console.error("Form submission error:", err);
        toast.error("Network error. Please check your connection and try again.");
      }
    },
    [dispatch, formData, phoneError, emailError, onSubmitSuccess]
  );

  const isFormValid = useMemo(() => {
    return (
      !phoneError &&
      !emailError &&
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phoneNumber.trim() &&
      formData.course &&
      formData.place
    );
  }, [emailError, formData, phoneError]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "inherit",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          color="primary"
        >
          Registration Form
        </Typography>
        <TextField
          autoFocus
          margin="normal"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          margin="normal"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          error={!!emailError}
          helperText={emailError}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          margin="normal"
          name="phoneNumber"
          label="Mobile Number"
          type="tel"
          fullWidth
          variant="outlined"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!phoneError}
          helperText={phoneError}
          required
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
          <InputLabel id="course-label">Course</InputLabel>
          <Select
            labelId="course-label"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            label="Course"
            required
          >
            <MenuItem value="Pg(Md/Ms)">Pg(Md/Ms)</MenuItem>
            <MenuItem value="MBBS">MBBS</MenuItem>
            <MenuItem value="Bsc.nursing">Bsc.nursing</MenuItem>
            <MenuItem value="Gnm">Gnm</MenuItem>
            <MenuItem value="B.pharma">B.pharma</MenuItem>
            <MenuItem value="B.tech">B.tech</MenuItem>
            <MenuItem value="B.tech lateral">B.tech lateral</MenuItem>
            <MenuItem value="Diploma">Diploma</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
          <InputLabel id="place-label">Place</InputLabel>
          <Select
            labelId="place-label"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            label="Place"
            required
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          disabled={!isFormValid}
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#0035B3",
            color: "white",
            "&:hover": {
              bgcolor: "#002188",
            },
            py: 1.5,
            fontSize: "1.1rem",
            transition: "all 0.3s ease",
          }}
        >
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default React.memo(StandaloneForm);
