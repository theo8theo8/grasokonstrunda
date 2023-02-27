import styles from '@/styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link'

export default function Topbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.navbar_logo}>
                <Image
                    src="/logo.png"
                    alt="Gräsö Konstrunda 2023"
                    quality={100}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 15vw, 6vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }} />
            </Link>
            <Link href="/" >START</Link>
            <Link href="/karta" >KARTA ÖVER GRÄSÖ</Link>
            <Link href="/konstnarer" >KONSTNÄRER</Link>
            <Link href="/fika" >FIKA</Link>
            <Link href="/kontakt" >KONTAKT</Link>
        </div>
    );
}