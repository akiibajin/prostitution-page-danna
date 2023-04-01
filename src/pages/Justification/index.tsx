import { Divider, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const Justification = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Divider></Divider>
      <Typography
        variant="h1"
        align="center"
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          paddingLeft: "10px",
          fontSize: { xs: "40px", md: "80px" },
        }}
      >
        Justificación
      </Typography>
      <Typography variant="body1" align="justify">
        La investigación propuesta busco dar solución (dar una mirada) a los
        derechos humanos de las personas involucradas a las prácticas sexuales
        que se convierte en explotación sexual, proxenetismo y el turismo
        sexual, siendo una prestación de servicio sexual por el cual se tiene
        una retribución económica y se recibe un servicio.
      </Typography>
    </Container>
  );
};

export default Justification;
