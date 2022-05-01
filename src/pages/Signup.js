import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
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

class SignUp extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }
   handleChange(e) {
      let name = e.target.name
      let value = e.target.value
      this.setState({ [name]: value })
   }
   handleSubmit(e) {
      e.preventDefault();
      let apiUrl = `${config.api.host}/register`

      if (this.state.password === this.state.confirm_password) {
         var formData = new FormData();
         formData.append("name", this.state.name);
         formData.append("email", this.state.email);
         formData.append("password", this.state.password);
         formData.append("address", this.state.address);

         axios.post(apiUrl, formData, {
            crossDomain: false,
            enablePreflight: false
         }).then((response) => {
            if (response.data.message == 'success') {
               window.localStorage.setItem('user', response.data.userid)
               NotificationManager.success('', 'Account Created Successful.');
               setTimeout(function () {
                  window.location.href = '/form';
               }, 1000)
            } else {
               NotificationManager.error('', `${response.data.message}`);
            }
         })
      } else {
         NotificationManager.error('', 'Password not matched.');
      }
   }
   render() {
      const theme = createTheme()
      return (
         <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
               <CssBaseline />
               <Box
                  sx={{
                     marginTop: 8,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     width: '60ch'
                  }}
               >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                     <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     Sign Up
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
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handleChange}
                     />
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
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        onChange={this.handleChange}
                     />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="address"
                        label="Address"
                        type="textarea"
                        id="address"
                        multiline
                        rows={4}
                        onChange={this.handleChange}
                     />

                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ background: '#ff631b' }}
                     >
                        Sign Up
                     </Button>
                     <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <Link to="/login" variant="body2">
                           {'Already have an account? Sign in'}
                        </Link>
                     </div>
                  </Box>
               </Box>
            </Container>
            <NotificationContainer />
         </ThemeProvider>
      )
   }
}

export default SignUp
