import { Check, ExpandLess, ExpandMore, Warning } from "@mui/icons-material";
import {
  Button,
  Collapse,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Advantages = () => {
  const [openAdvantage, setOpenAdvantage] = useState<boolean>(true);
  const [openDisadvantage, setOpenDisadvantage] = useState<boolean>(false);
  return (
    <Container
      sx={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Divider></Divider>
      <Button color="inherit" onClick={() => setOpenAdvantage((prev) => !prev)}>
        <Typography
          variant="h2"
          sx={{
            mr: 2,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            paddingLeft: "10px",
            fontSize: { xs: "30px", md: "60px" },
          }}
          align="center"
        >
          Ventajas
        </Typography>
        {openAdvantage ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={openAdvantage} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              Algunas personas que trabajan en la industria del sexo en Colombia
              pueden ganar más dinero en un día de trabajo que en un trabajo
              formal en todo un mes.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              En algunos casos, la prostitución puede ser una forma de
              independencia para las mujeres que han sido víctimas de la
              violencia doméstica o la discriminación en otros entornos
              laborales.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              La prostitución puede ser vista como una forma de satisfacer las
              necesidades sexuales de las personas que de otra manera no tendrán
              acceso a ellas, como personas con discapacidades o problemas de
              salud mental.
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider></Divider>
      <Button
        color="inherit"
        onClick={() => setOpenDisadvantage((prev) => !prev)}
      >
        <Typography
          variant="h2"
          sx={{
            mr: 2,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            paddingLeft: "10px",
            fontSize: { xs: "30px", md: "60px" },
          }}
          align="center"
        >
          Desventajas
        </Typography>
        {openDisadvantage ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={openDisadvantage} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              La prostitución en Colombia es ilegal ya menudo se asocia con la
              explotación, la violencia y la trata de personas.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              Los trabajadores sexuales en Colombia a menudo enfrentan estigma
              social y discriminación, lo que puede afectar su calidad de vida y
              bienestar emocional.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              La prostitución en Colombia tiene un alto riesgo de transmisión de
              enfermedades de transmisión sexual y puede ser peligroso para la
              salud de los trabajadores sexuales y sus clientes.
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </Container>
  );
};

export default Advantages;
