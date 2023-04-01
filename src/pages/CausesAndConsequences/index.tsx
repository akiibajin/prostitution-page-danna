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

const CausesAndConsequences = () => {
  const [openCauses, setOpenCauses] = useState<boolean>(true);
  const [openConsequences, setOpenConsequences] = useState<boolean>(false);
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
          Causas
        </Typography>
        {openCauses ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={openCauses} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Pobreza:</strong> La falta de oportunidades económicas y
              la extrema pobreza pueden llevar a algunas personas a trabajar en
              la industria del sexo como una forma de ganar dinero.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Discriminación:</strong> Las mujeres y las personas LGBT
              pueden enfrentar discriminación en otros entornos laborales, lo
              que puede llevar a algunos a recurrir a la prostitución como única
              opción para obtener ingresos.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Violencia domestica:</strong> Algunas mujeres pueden
              sentirse atrapadas en relaciones abusivas y recurrir a la
              prostitución como una forma de independencia económica.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check sx={{ marginRight: "10px" }}></Check>
            <ListItemText>
              <strong>Trata de personas:</strong> La trata de personas con
              multas de explotación sexual es una de las principales causas de
              la prostitución en Colombia. Muchas mujeres son engañadas o
              secuestradas y forzadas a trabajar en la industria del sexo.
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider></Divider>
      <Button
        color="inherit"
        onClick={() => setOpenConsequences((prev) => !prev)}
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
          Consecuencias
        </Typography>
        {openConsequences ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={openConsequences} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              <strong>Explotación y violencia:</strong> Los trabajadores
              sexuales en Colombia a menudo enfrentan explotación, violencia y
              discriminación. Pueden ser víctimas de abuso físico y emocional
              por parte de clientes, proxenetas y otros miembros de la industria
              del sexo.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              <strong>Enfermedades de transmisión sexual:</strong> La
              prostitución en Colombia tiene un alto riesgo de transmisión de
              enfermedades de transmisión sexual, lo que puede afectar la salud
              y el bienestar de los trabajadores sexuales y sus clientes.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              <strong>Estigma social:</strong> La prostitución es estigmatizada
              en la sociedad colombiana y puede afectar la calidad de vida y el
              bienestar emocional de los trabajadores sexuales.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              <strong>Trata de personas:</strong> La prostitución en Colombia a
              menudo está relacionado con la trata de personas, lo que significa
              que las personas son forzadas a trabajar en la industria del sexo
              contra su voluntad.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Warning sx={{ marginRight: "10px" }}></Warning>
            <ListItemText>
              <strong>Problemas legales:</strong> La prostitución es ilegal en
              Colombia y los trabajadores sexuales pueden enfrentar problemas
              legales y sanciones por su trabajo.
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Divider></Divider>
      <Typography variant="body1" align="justify">
        En resumen, la prostitución en Colombia puede tener graves consecuencias
        para los trabajadores sexuales y sus comunidades, y es importante
        abordar las causas subyacentes de la prostitución para reducir su
        impacto. Esto incluye trabajar para reducir la pobreza y la
        discriminación, combatir la trata de personas y garantizar la seguridad
        y los derechos de los trabajadores sexuales
      </Typography>
    </Container>
  );
};

export default CausesAndConsequences;
