import { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/imgs/incapp.png";
import CustomLink from "../ui-components/CustomLink";
import { Button, Divider } from "@mui/material";

const pages = [
  {
    name: "Justificación",
    path: "justificacion",
  },
  {
    name: "Objetivos",
    path: "objetivos",
  },
  {
    name: "Ventajas y Desventajas",
    path: "ventajas-desventajas",
  },
  {
    name: "Causas y Consecuencias",
    path: "causas-consecuencias",
  },
  {
    name: "Clasificación",
    path: "clasificacion",
  },
  {
    name: "Conclusión",
    path: "conclusion",
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CustomLink to="/">
            <img src={logo} width="50px" />
          </CustomLink>
          <Typography
            variant="h6"
            noWrap
            component="title"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              paddingLeft: "10px",
            }}
          >
            <CustomLink to="/">Prostitución</CustomLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, path }) => (
                <Fragment>
                  <Divider></Divider>
                  <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <CustomLink key={path} to={path}>
                        {name}
                      </CustomLink>
                    </Typography>
                  </MenuItem>
                </Fragment>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="title"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontSize: "15px",
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Prostitución
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "5px" },
            }}
          >
            {pages.map(({ name, path }) => (
              <Fragment>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ height: "20px" }}
                ></Divider>
                <CustomLink key={name} to={path}>
                  <Button color="inherit">{name}</Button>
                </CustomLink>
              </Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
