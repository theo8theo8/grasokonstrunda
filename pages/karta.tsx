import styles from '@/styles/Home.module.css'
import ImageMapper, { CustomArea } from 'react-img-mapper';
import {MAP} from '@/components/coords'
import { useState } from 'react';
import MapInfo from '@/components/mapInfo';
import Layout from '@/components/layout';

export default function Home() {
  const [showInfo, setShowInfo] = useState<CustomArea|undefined>(undefined);
  const [showName, setShowName] = useState<string|undefined>('');//TODO: Fixa så att namnet visas när man hovrar över en siffra
  let width = 451;
  if(window.innerHeight < 900) {
    width = window.innerHeight/3;
  }
  return (
    <>
      <Layout title="Gräsö Konstrunda - Karta">
        <div className={styles.clickMap}>  
          <div id='box1' className={styles.box1}>
            <ImageMapper
              responsive={true}
              parentWidth={width}
              imgWidth={451}
              src={'/karta_2022.png'}
              onMouseEnter={(area) => setShowName(area.id)}
              onMouseLeave={() => setShowName('')}
              onClick={(area) => setShowInfo(area)}
              map={MAP}
            />
          </div>
          <div className={styles.box2}>
            <MapInfo showInfo={showInfo}/>
          </div>
        </div>
      </Layout>
    </>
  )
}
