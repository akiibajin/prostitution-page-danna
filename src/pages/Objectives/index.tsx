import { ExpandLess, ExpandMore, Check } from "@mui/icons-material";
import {
  Collapse,
  Container,
  Divider,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  List,
} from "@mui/material";
import { useState } from "react";

const Objectives = () => {
  const [open, setOpen] = useState<boolean>(false);
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
        Generales
      </Typography>
      <Typography variant="body1" align="justify">
        Identificar las leyes que regulan las prácticas sexuales en Colombia.
      </Typography>
      <Divider></Divider>
      <Button color="inherit" onClick={() => setOpen((prev) => !prev)}>
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
          Especificos
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton>
            <Check></Check>
            <ListItemText>
              Investigar leyes que regulan las prácticas sexuales en Colombia.
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Check></Check>
            <ListItemText>
              Identificar los lugares turísticos con mayor explotación sexual en
              Colombia.
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </Container>
  );
};

export default Objectives;
