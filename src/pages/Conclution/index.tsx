import { Container, Divider, Typography } from "@mui/material";

const Conclution = () => {
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
        Conclusión
      </Typography>
      <Typography align="justify" variant="body1">
        La prostitución es un problema complejo en Colombia que requiere una
        respuesta integral y centrada en las personas. Es importante reconocer
        que los trabajadores sexuales tienen derechos y merecen protección y
        apoyo. Al abordar la prostitución en Colombia, debemos centrarnos en
        mejorar las oportunidades económicas y sociales, combatir el trato de
        personas y el tráfico de drogas, y brindar apoyo y protección a los
        trabajadores sexuales.
      </Typography>
    </Container>
  );
};

export default Conclution;
