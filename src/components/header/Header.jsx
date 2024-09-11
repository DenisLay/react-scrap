import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/material';
import { NavLink } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

function Header() {

  const [sideBarVisibility, setSideBarVisibility] = React.useState(false)

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <SideBar sideBarVisibility={sideBarVisibility} setSideBarVisibility={setSideBarVisibility} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setSideBarVisibility(!sideBarVisibility)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scrapy Lab
          </Typography>
          <Container>

          </Container>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
