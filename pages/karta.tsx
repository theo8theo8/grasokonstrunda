import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/topbar'
import ImageMapper, { CustomArea } from 'react-img-mapper';
import {MAP} from '@/components/coords'
import { useState } from 'react';
import MapInfo from '@/components/mapInfo';

export default function Home() {
  const [showInfo, setShowInfo] = useState<CustomArea|undefined>(undefined);
  const [showName, setShowName] = useState<string|undefined>('');//TODO: Fixa så att namnet visas när man hovrar över en siffra
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
        <div className={styles.clickMap}>  
          <div style={{gridArea: 1/2}}>
            <ImageMapper  src={'/karta_2022.png'} onMouseEnter={(area) => setShowName(area.id)} onMouseLeave={() => setShowName('')} onClick={(area) => setShowInfo(area)} map={MAP} />
          </div>
          <div style={{gridArea: 1/3}}>
            <MapInfo showInfo={showInfo}/>
          </div>
        </div>
      </main>
    </>
  )
}
