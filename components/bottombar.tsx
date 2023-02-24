import styles from '@/styles/Home.module.css'
import Image from "next/image";

export default function Bottombar() {
    return (
        <div className={styles.bottbar}>
            <div style={{marginRight: '10vw'}}>               
                <p><b>Medarrangör:</b></p>
                <a
                href="https://www.nbv.se/"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <div style={{width: '12vw',height: '70%', position: 'relative'}}>
                        <Image
                            src="/logos/nbv_logo.png"
                            alt="Nykterhetsrörelsens bildningsverksamhet"
                            className={styles.vercelLogo}
                            priority
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain"
                            }} />
                    </div>
                </a>
            </div> 
            
            <div style={{display: 'flex', alignItems: 'center',flexDirection: 'column'}}>             
                <p><b>Stödjande företag:</b></p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <a
                    href="https://www.ica.se/butiker/nara/osthammar/ica-sjoboden-1542/start/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/logos/ICAny.png"
                        alt="ICA Nära Sjöboden"
                        className={styles.vercelLogo}
                        width={100}
                        height={100}
                        priority
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
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
                        width={100}
                        height={100}
                        priority
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    </a>
                    <div className={styles.spons_not_link}>
                        <Image
                            src="/logos/CEN_Carpenter_1.jpg"
                            alt="CEN Carpenter"
                            className={styles.vercelLogo}
                            width={100}
                            height={100}
                            priority
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
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
                        width={100}
                        height={100}
                        priority
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    </a>
                    
                </div>              
                <p>Sidan uppdaterades 2023-02-20</p>
            </div>  
        </div>
    );
}