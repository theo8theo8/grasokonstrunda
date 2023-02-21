import styles from '@/styles/Home.module.css'
import PlaceInfo from './placeInfo'


export default function MapInfo({showInfo}) {
    if (showInfo == undefined) {
        return (
                <div className={styles.infoBox}>
                    <p>
                        <b>Klicka på en av siffrorna för att se mer information!</b>
                    </p>
                </div>
                )
    }
    return (
        <PlaceInfo place={showInfo.id}/>
    )
  }
  