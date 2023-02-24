import styles from '@/styles/Home.module.css'
import Image from "next/image";

export default function Topbar() {
    return (
        <div className={styles.navbar}>
            <a href="/" style={{width:"6vw", height:"5vh"}}>
                <Image
                    src="/logo.png"
                    alt="Gräsö Konstrunda 2023"
                    quality={100}
                    width={500}
                    height={500}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }} />
            </a>
            <a href="/" >START</a>
            <a href="/karta" >KARTA ÖVER GRÄSÖ</a>
            <a href="/konstnarer" >KONSTNÄRER</a>
            <a href="/fika" >FIKA</a>
            <a href="/kontakt" >KONTAKT</a>
        </div>
    );
}