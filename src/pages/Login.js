import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleGuest = this.handleGuest.bind(this)
   }
   handleChange(e) {
      let name = e.target.name
      let value = e.target.value
      this.setState({ [name]: value })
   }
   handleGuest(e) {
      window.localStorage.setItem('guest', 'Guest');
      window.location.href = '/form';
   }
   handleSubmit(e) {
      e.preventDefault();
      let apiUrl = `${config.api.host}/login`

      var formData = new FormData();
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);

      axios.post(apiUrl, formData, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         if (response.data.message == 'success') {
            window.localStorage.setItem('user', response.data.userid)
            NotificationManager.success('', 'Login Successful.');
            setTimeout(function () {
               var catalog = window.localStorage.getItem('catalog');
               if (catalog) {
                  window.location.href = '/pay';
               } else {
                  window.location.href = '/form';
               }
            }, 1000)
         } else {
            NotificationManager.error('', 'Invalid Credentials.');
         }
      })
   }
   render() {
      const theme = createTheme()
      return (
         <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="sm">
               <CssBaseline />
               <Box
                  sx={{
                     marginTop: 8,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center'
                  }}
               >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                     <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     Sign in
                  </Typography>
                  <Box
                     component="form"
                     onSubmit={this.handleSubmit}
                     noValidate
                     sx={{ mt: 1, width: '60ch' }}
                  >
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handleChange}
                     />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleChange}
                     />
                     <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                     />
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ background: '#ff631b' }}
                     >
                        Sign In
                     </Button>
                     <div style={{ textAlign: 'center' }}>
                        <span>OR</span>
                     </div>
                     <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ background: '#ff631b' }}
                        onClick={this.handleGuest}
                     >
                        As a guest
                     </Button>
                     <Grid container>
                        <Grid item xs>
                           <Link to="/">
                              <span>Forgot password?</span>
                           </Link>
                        </Grid>
                        <Grid item>
                           <Link to="/signup">Don't have an account? Sign Up</Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Container>
            <NotificationContainer />
         </ThemeProvider>
      )
   }
}
export default Login
