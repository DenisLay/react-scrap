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

function Header() {  

  const [sideBarVisibility, setSideBarVisibility] = React.useState(false)

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
        <Drawer anchor='left'
                open={sideBarVisibility}
                onClose={() => setSideBarVisibility(!sideBarVisibility)}>
          <div style={{width: 200, display: 'flex', flexDirection: 'column'}}>
            <Button color="inherit">Main</Button>
            <Button color="inherit">Tests</Button>
            <Button color="inherit">Lab</Button>
            <Button color="inherit">Spiders</Button>
          </div>
        </Drawer>
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
