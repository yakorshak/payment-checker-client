import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import Header from '../../components/common/Header'
import BlankLayout from '../../layouts/BlankLayout'
import BaseContainer from '../../layouts/BaseContainer'

const LogIn = () => {
  return (
    <div>
      <BlankLayout>
        <Header></Header>
        <BaseContainer>
          <Box className={'content-center'} margin={'0 250px 0 250px'}>
            <Grid container columns={12}>
              <Grid item sm={12}>
                <Typography variant="h5" fontWeight={700} marginBottom={'20px'}>
                  Log in to Payment Checker
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: '20px' }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: '20px' }}
                />
              </Grid>
              <Grid item sm={7}>
                <Button variant="contained">Log in</Button>
              </Grid>
              <Grid item sm={5}>
                <Button variant="text">Forgot password</Button>
              </Grid>
            </Grid>
          </Box>
        </BaseContainer>
      </BlankLayout>
    </div>
  )
}

export default LogIn
