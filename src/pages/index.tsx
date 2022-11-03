import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button variant="contained">Hello World</Button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
