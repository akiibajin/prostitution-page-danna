import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          paddingLeft: "10px",
          fontSize: { xs: "50px", md: "100px" },
        }}
        align="center"
      >
        La prostitución
      </Typography>
      <Typography variant="body1" align="justify">
        La prostitución es una actividad que ha existido en Colombia durante
        siglos y continúa siendo una realidad en la actualidad. A pesar de que
        la prostitución es legal en Colombia, la trata de personas y la
        explotación sexual siguen siendo graves problemas en el país. La mayoría
        de las personas que se dedican a la prostitución en Colombia son mujeres
        y niñas, aunque también hay hombres y niños involucrados en esta
        actividad. Muchas de estas personas son víctimas de la pobreza, la falta
        de oportunidades y la discriminación, lo que las lleva a buscar
        alternativas de subsistencia en la prostitución. El turismo sexual y la
        explotación de menores son prácticas ilegales y condenables que han sido
        objeto de campañas de sensibilización y acción por parte del gobierno y
        organizaciones civiles. A pesar de esto, estas prácticas todavía
        persisten en algunos lugares del país. En Colombia, existen esfuerzos
        por parte del gobierno y de organizaciones no gubernamentales para
        ofrecer alternativas de trabajo y educación a las personas que se
        dedican a la prostitución y para proteger a las víctimas de la trata de
        personas y la explotación sexual. Sin embargo, aún hay un largo camino
        por recorrer para garantizar la protección y los derechos de todas las
        personas involucradas en esta actividad.
      </Typography>
    </Container>
  );
};

export default Home;
