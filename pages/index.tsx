import Image from "next/image";
import styles from '@/styles/Home.module.css'
import Bottombar from '@/components/bottombar'
import Layout from '@/components/layout'

export default function Home() {
  return <>
    <Layout title="Gräsö Konstrunda 2023">
      <div style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
        <Image
          src = "/map_black.png"
          alt = "Bild på Gräsö"
          width = {320}
          height = {320}
          className = {styles.map}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
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
    </Layout>
  </>;
}
