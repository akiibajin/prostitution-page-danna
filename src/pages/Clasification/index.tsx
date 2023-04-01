import { ExpandLess, ExpandMore, Check, Warning } from "@mui/icons-material";
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

const Clasification = () => {
  const [openCauses, setOpenCauses] = useState<boolean>(true);
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
      <Button color="inherit" onClick={() => setOpenCauses((prev) => !prev)}>
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
          Clasificación
        </Typography>
        {openCauses ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={openCauses} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton>
            <ListItemText>
              La prostitución en Colombia puede clasificarse de diferentes
              maneras, dependiendo de la perspectiva que se adopte. Aquí te
              presento algunas posibles formas de clasificarla:
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Desde el punto de vista de la explotación:</strong> Muchas
              personas que trabajan en la industria del sexo en Colombia son
              víctimas de explotación y violencia, por lo que se podría
              clasificar la prostitución como una forma de explotación sexual.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Desde el punto de vista de la salud:</strong> La
              prostitución en Colombia tiene un alto riesgo de transmisión de
              enfermedades de transmisión sexual, lo que podría clasificarse
              como un problema de salud pública.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Desde el punto de vista socioeconómico:</strong> Muchas
              personas que trabajan en la industria del sexo en Colombia lo
              hacen por necesidad económica, debido a la falta de oportunidades
              laborales y la pobreza. Por lo tanto, la prostitución podría
              clasificarse como un problema socioeconómico.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Desde el punto de vista cultural:</strong> La prostitución
              ha sido parte de la cultura y la historia de Colombia durante
              mucho tiempo, lo que podría clasificarse como un fenómeno
              cultural.
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </Container>
  );
};

export default Clasification;
