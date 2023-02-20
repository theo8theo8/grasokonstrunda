import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Sidebar() {
    return(
        <div className={styles.navbar}>
            <a href="/" >Start</a>
            <a href="/karta" >Karta</a>
            <a href="/konstnarer" >Konstnärer</a>
            <a href="/fikapaus" >Fikapaus</a>
            <a href="/kontakt" >Kontakt</a>
            <div className={styles.spons_not_link}>               
                <p className={styles.boldp}>
                Medarrangör:
                </p>
            </div> 
            <a
            href="https://www.nbv.se/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src="/logos/nbv_logo.png"
                alt="Nykterhetsrörelsens bildningsverksamhet"
                className={styles.vercelLogo}
                layout="intrinsic"
                width={150}
                height={100}
                priority
            />
            </a>
            <div className={styles.spons_not_link}>               
                <p className={styles.boldp}>
                Stödjande företag:
                </p>
            </div> 
            <a
            href="https://www.ica.se/butiker/nara/osthammar/ica-sjoboden-1542/start/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src="/logos/ICAny.png"
                alt="ICA Nära Sjöboden"
                className={styles.vercelLogo}
                layout="intrinsic"
                width={100}
                height={100}
                priority
            />
            </a>
            <a
            href="https://www.byggvaruhuset.nu/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src="/logos/OregrundsBygg.png"
                alt="Byggvaruhuset Öregrund"
                className={styles.vercelLogo}
                layout="intrinsic"
                width={100}
                height={100}
                priority
            />
            </a>
            <div className={styles.spons_not_link}>
                <Image
                src="/logos/CEN_Carpenter_1.jpg"
                alt="CEN Carpenter"
                className={styles.vercelLogo}
                layout="intrinsic"
                width={100}
                height={100}
                priority
                />
            </div>
            <a
            href="https://tidtryck.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src="/logos/Tidtryck.png"
                alt="Tidtryck"
                className={styles.vercelLogo}
                layout="intrinsic"
                width={100}
                height={100}
                priority
            />
            </a>
            <div className={styles.spons_not_link_row}>               
                <p>
                    Sidan uppdaterades
                </p>
                <p>
                    2021-09-01
                </p>
            </div> 
        </div>
    )
}