import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

const Justification = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        margin: "20px 0",
      }}
    >
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
