import styles from '@/styles/Home.module.css'
import PlaceInfo from './placeInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function MapInfo({showInfo}) {
    if (showInfo == undefined) {
        return (
                <div className={styles.infoBox}>
                    <p>
                        <b>Klicka på en av siffrorna för att se mer information!</b>
                    </p>
                    <div className={styles.download}>
                        <a href="/Flyer_A4_2022.pdf" download>
                            <FontAwesomeIcon icon={faFileArrowDown}/>
                        </a>
                        <p>
                            Ladda ned en pdf av kartan!
                        </p>
                    </div>
                </div>
                )
    }
    return (
        <PlaceInfo place={showInfo.id}/>
    )
  }
  