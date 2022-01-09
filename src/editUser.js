import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { formValidationSchema } from "./createUser";
import Button from "@mui/material/Button";
import { GlobalContext } from "./globalState";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export function Edit() {
  const theme = createTheme();

  const history = useHistory();

  const { editUser, users } = useContext(GlobalContext);
  const { index } = useParams();

  const userinfo = users[index];
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: userinfo.name,
        email: userinfo.email,
        password: userinfo.password,
        id: userinfo.id,
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        editUser(values);
        history.push("/usersList");
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit
          </Typography>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Full Name"
                    type="text"
                    error={errors.name && touched.name}
                    helperText={errors.name && touched.name && errors.name}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="email"
                    type="email"
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="password"
                    type="password"
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                color="success"
                variant="outlined"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
