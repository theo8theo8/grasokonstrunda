import Image from "next/image";
import styles from '@/styles/style.module.css'
import Bottombar from '@/components/bottombar'
import Layout from '@/components/layout'

export default function Home() {
  return <>
    <Layout title="Gräsö konstrunda 2023">
      <div className = {styles.index}>
        <Image
          src = "/map_black.webp"
          alt = "Bild på Gräsö"
          width = {320}
          height = {320}
          quality = {100}
          className = {styles.map}
          priority
        />
        <div className={styles.indexText}>
          <h2>Kom till Gräsö konstrunda i sommar!<br/><br/> </h2>
          <p>
            Vecka 28 smyckar konstnärer sina hem, sjöbodar,<br/> 
            lador och bygdegårdar med sin konst!<br/> 
            Konstutställningarna är utspridda över hela ön<br/> 
            och ni får möjlighet att uppleva den härliga atmosfär<br/> 
            och natur som finns på Gräsö.<br/> <br/> 
            <b>
              Varmt välkommen till Gräsö konstrunda!<br/><br/> 
              Kartan är ännu inte uppdaterad med 2023 års platser och konstnärer!
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
        </div>
      </div>
      <Bottombar />
    </Layout>
  </>;
}
