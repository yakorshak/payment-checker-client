import { Typography, Grid, Button, useMediaQuery } from '@mui/material'
import Head from 'next/head'
import Header from '../components/common/Header'
import BaseContainer from '../layouts/BaseContainer'
import FullWidthLayout from '../layouts/FullWidthLayout'
import theme from '../config/theme'
import MainStepper from '../components/home/MainStepper'
import MainCharacterPng from '../components/home/MainCharacterPng'
import Image from 'next/image'
import logo1 from '../../public/images/logo1.jpg'
import logo2 from '../../public/images/logo2.jpg'
import logo3 from '../../public/images/logo3.jpg'
import BlankLayout from '../layouts/BlankLayout'
import { useRouter } from 'next/router'

const Home = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Payment Checker</title>
        <meta name="description" content="Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlankLayout>
        <Header>
          <Button
            color="secondary"
            size="medium"
            variant="text"
            sx={{ mr: '20px' }}
            onClick={() => router.push('/signup')}
          >
            Join as a company
          </Button>
          <Button
            color="secondary"
            size="medium"
            variant="outlined"
            onClick={() => router.push('/login')}
          >
            Sign in
          </Button>
        </Header>
        <FullWidthLayout
          backgroundColor={theme?.palette?.primary?.main}
          height={'100vh'}
        >
          <BaseContainer>
            <Grid paddingTop={'200px'} container columns={12}>
              <Grid item xs={12}>
                <Typography
                  variant={isSmallScreen ? 'h6' : 'h4'}
                  fontWeight={700}
                  color="white"
                  textAlign={'center'}
                >
                  Payment Checker is a win-win platform that allows people
                  simple get extra money helping gaming companies check the
                  workability of their pay solutions
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: '50px' }}>
                <Typography
                  variant={isSmallScreen ? 'h6' : 'h5'}
                  textAlign={'center'}
                  color="white"
                >
                  Become a checker spending a few minutes to earn your money.
                  Its easy-peasy!
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                justifyContent={'right'}
                sx={{ pr: '10px', pt: '20px' }}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => router.push('/signup')}
                >
                  Find a job
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ pl: '10px', pt: '20px' }}>
                <Button
                  color="secondary"
                  onClick={() => router.push('/signup')}
                >
                  Find checkers
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  pl: '10px',
                  pt: '20px',
                }}
              >
                {!isSmallScreen && <MainCharacterPng></MainCharacterPng>}
              </Grid>
            </Grid>
          </BaseContainer>
        </FullWidthLayout>
        <BaseContainer>
          <Grid container columns={12}>
            <Grid item xs={8}></Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'right',
              }}
            >
              <Typography variant="h2" fontWeight={500} marginTop={'20px'}>
                How it works?
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '150px',
              }}
            >
              <MainStepper></MainStepper>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                fontWeight={500}
                marginTop={'100px'}
                marginBottom={'30px'}
              >
                Our partners
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12} display="flex" justifyContent={'center'}>
              <Image src={logo1} alt="logo1" height={200} width={250}></Image>
            </Grid>
            <Grid item sm={4} xs={12} display="flex" justifyContent={'center'}>
              <Image src={logo2} alt="logo2" height={200} width={200}></Image>
            </Grid>
            <Grid item sm={4} xs={12} display="flex" justifyContent={'center'}>
              <Image src={logo3} alt="logo3" height={200} width={200}></Image>
            </Grid>
          </Grid>
        </BaseContainer>
        <FullWidthLayout backgroundColor={theme?.palette?.primary?.main}>
          <BaseContainer>
            <Typography
              padding={'30px 0px 30px 0px'}
              color={'white'}
              textAlign={'center'}
            >
              © 2023 Payment-checker.com
            </Typography>
          </BaseContainer>
        </FullWidthLayout>
      </BlankLayout>
    </div>
  )
}

export default Home
