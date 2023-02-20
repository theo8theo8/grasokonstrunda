import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Topbar() {
    return(
        <div className={styles.navbar}>
            <div style={{width: '100%',height: 'inherit', position: 'relative'}}>
                <Image
                    src="/logo.png"
                    alt="Gräsö Konstrunda 2023"
                    layout='fill'
                    objectFit='contain'
                    quality={100}
                />
            </div>
            <a href="/" >START</a>
            <a href="/karta" >KARTA ÖVER GRÄSÖ</a>
            <a href="/konstnarer" >KONSTNÄRER</a>
            <a href="/fikapaus" >FIKAPAUS</a>
            <a href="/kontakt" >KONTAKT</a>
        </div>
    )
}