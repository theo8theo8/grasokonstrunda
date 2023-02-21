import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/topbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gräsö Konstrunda 2023</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"/>
        <meta name="description" content="Kontakt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <Topbar />
        <div>
          <h1>Kontaktinformation</h1>
          <p><b>Kyll Hellberg: </b>0739140431</p>
          <p><b>Ulla Gerbrand: </b>0705755967</p>
          
        </div>
      </main>

    </>
  )
}
