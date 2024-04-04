import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import "./AppBar.css"
import logo from "../../assets/logos/apmc-logo-no-bg.png"
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <img src={logo} alt="Logo" className="logo" />
          <Button > <Typography className="appBarButton">Home</Typography></Button>
          <Button > <Typography className="appBarButton">About Us</Typography></Button>
          <Button > <Typography className="appBarButton">Events</Typography></Button>
          <Box sx={{ flexGrow: 1 }} /> 
          <Button style={{ backgroundColor: 'red' }}> <Typography className="joinUsText">Join Us</Typography></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

