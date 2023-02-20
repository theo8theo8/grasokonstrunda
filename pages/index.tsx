import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/sidebar'
import bg from '@/public/bkgrnd_gul.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gräsö Konstrunda 2023</title>
        <meta name="description" content="Gräsö Konstrunda 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{backgroundImage: `url(${bg.src})`}}>
        <Sidebar />
        <Image
          src = "/map_black.png"
          alt = "Bild på Gräsö"
          width = {320}
          height = {320}
          layout="intrinsic"
          className = {styles.map}
        />
      </main>

    </>
  )
}
