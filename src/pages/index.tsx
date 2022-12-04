import { Typography, Grid, Button } from '@mui/material'
import Head from 'next/head'
import Header from '../components/common/Header'
import BaseContainer from '../layouts/BaseContainer'
import FullWidthLayout from '../layouts/FullWidthLayout'
import theme from '../config/theme'
import MainStepper from '../components/home/MainStepper'
import MainCharacterPng from '../components/home/MainCharacterPng'
import Image from 'next/image'
import s2b from '../../public/images/s2b.png'
import bwin from '../../public/images/bwin.png'
import bet365 from '../../public/images/bet365.png'
import BlankLayout from '../layouts/BankLayout'

const Home = () => {
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
          >
            Join as a company
          </Button>
          <Button color="secondary" size="medium" variant="outlined">
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
                  variant="h4"
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
                <Typography variant="h5" textAlign={'center'} color="white">
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
                <Button color="secondary" variant="contained">
                  Find a job
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ pl: '10px', pt: '20px' }}>
                <Button color="secondary">Find checkers</Button>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  pl: '10px',
                  pt: '20px',
                }}
              >
                <MainCharacterPng></MainCharacterPng>
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
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '150px',
              }}
            >
              <MainStepper></MainStepper>
            </Grid>
            <Grid xs={12}>
              <Typography
                variant="h2"
                fontWeight={500}
                marginTop={'100px'}
                marginBottom={'30px'}
              >
                Our partners
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Image src={bet365} alt="bet365" height={110} width={200}></Image>
            </Grid>
            <Grid xs={4} marginTop={'-50px'}>
              <Image src={s2b} alt="s2b" height={200} width={200}></Image>
            </Grid>
            <Grid xs={4}>
              <Image src={bwin} alt="wh" height={70} width={200}></Image>
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
              © 2022 Payment-checker.com
            </Typography>
          </BaseContainer>
        </FullWidthLayout>
      </BlankLayout>
    </div>
  )
}

export default Home
