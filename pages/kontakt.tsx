import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/topbar'
import Image from 'next/image'

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
        <div className={styles.contact}>
          <h1>Kontaktinformation</h1>
          <p><b>Kyll Hellberg: </b>073-914 04 31</p>
          <p><b>Ulla Gerbrand: </b>070-575 59 67</p>
          <a href="mailto:info@grasokonstrunda.se">info@grasokonstrunda.se</a>
          <a href="https://www.facebook.com/groups/663788286968932/?fref=ts">
            <Image
              src = "/facebook-logo.png"
              alt = "Facebook"
              width = {128}
              height = {64}
              layout="intrinsic"
            />
          </a>
        </div>
      </main>

    </>
  )
}
