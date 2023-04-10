import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import Header from '../../components/common/Header'
import BlankLayout from '../../layouts/BlankLayout'
import BaseContainer from '../../layouts/BaseContainer'

const SignUp = () => {
  return (
    <div>
      <BlankLayout>
        <Header></Header>
        <BaseContainer>
          <Box className={'content-center'} margin={'0 250px 0 250px'}>
            <Grid container columns={12}>
              <Grid item sm={12}>
                <Typography variant="h5" fontWeight={700} marginBottom={'20px'}>
                  Sign up to Payment Checker
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
              <Grid item sm={12} marginBottom={'15px'}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="I want to be a checker"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="checker"
                      control={<Radio />}
                      label="I want to be a checker"
                    />
                    <FormControlLabel
                      value="company"
                      control={<Radio />}
                      label="I am a company"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item sm={7}>
                <Button variant="contained">Sign up</Button>
              </Grid>
              <Grid item sm={5}>
                <Button variant="text">I have an account</Button>
              </Grid>
            </Grid>
          </Box>
        </BaseContainer>
      </BlankLayout>
    </div>
  )
}

export default SignUp
