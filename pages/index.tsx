import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/topbar'
import Bottombar from '@/components/bottombar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gräsö Konstrunda 2023</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"/>
        <meta name="description" content="Gräsö Konstrunda 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <Topbar />
        <div style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
          <Image
            src = "/map_black.png"
            alt = "Bild på Gräsö"
            width = {320}
            height = {320}
            layout="intrinsic"
            className = {styles.map}
          />
          <div className={styles.indexText}>
            <p>
              <b>Kom till Gräsö konstrunda i sommar!</b><br/> <br/> 
              Vecka 28 smyckar konstnärer sina hem, sjöbodar,<br/> 
              lador och bygdegårdar med sin konst!<br/> 
              Konstutställningarna är utspridda över hela ön<br/> 
              och ni får möjlighet att uppleva den härliga atmosfär<br/> 
              och natur som finns på Gräsö.<br/> <br/> 
              <b>
                Varmt välkommen till Gräsö konstrunda!<br/><br/> 
                Kartan är nu uppdaterad med årets platser och konstnärer!
              </b>
            </p>
            <h1>
              <br/> 
              V.28 10-16 juli 2023
            </h1>
            <h2>
            <br/> 
              Kl. 12-17 alla dagar!
            </h2>
            {/* <Image
            /> */}
          </div>
        </div>
        <Bottombar />
      </main>

    </>
  )
}
