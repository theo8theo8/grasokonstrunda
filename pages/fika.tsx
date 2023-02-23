import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Layout title="Gräsö Konstrunda - Fika">
        <div className={styles.fika}>
          <div className={styles.box}>
            <div style={{flexDirection:'row', display:'flex'}}>
              <div>
                <Image 
                src="/symbol_fika.jpg"
                alt="Fika-symbol"
                layout='responsive'
                quality={100}
                width={500}
                height={500}
                />
              </div>
              <div className={styles.boxheader}>
                <h3>Café</h3>
                <p><em>Är ni sugna på att besöka några mysiga caféer eller lunchställen kan vi tipsa om dessa.</em></p>
              </div>
            </div>
            <p>Rävsten <b>(1)</b>, här finns lunch och fika.</p>
            <p>Gräsö Camping Restaurang Doppingen <b>(7)</b> erbjuder fika, mat, glass, bad m.m samt tillgång till handikapptoalett.</p>
            <p>Anders Matsgården <b>(13)</b>, ett café - Antikviteter, vintage, retro och en Silverutställning - äldre silver från trakten.</p>
            <p>Sist men inte minst Norrboda Bygdegård <b>(15)</b>, ett café med tillgång till handikapptoalett.</p>
            <p>Konstrundans fikasymbol visar dig vägen!</p>
          </div>
          <div className={styles.box}>
            <div className={styles.boxheader}>
              <h3>Enklare fika</h3>
              <p><em>Fem utställningsplatser serverar enklare fika.</em></p>
            </div>
            <p>Bjurön <b>(3)</b>, Högklyke <b>(4)</b>, Muskaregrund <b>(5)</b>, Församlingshemmet <b>(6)</b> samt på plats nummer <b>(20)</b> Hamnen Källskärsudden.</p>
          </div>
          <div className={styles.box}>
            <div style={{flexDirection:'row', display:'flex'}}>
              <div> 
                <Image 
                src="/symbol_musik.jpg"
                alt="Musik-symbol"
                layout='responsive'
                quality={100}
                width={500}
                height={500}
                />
              </div>
              <h3 className={styles.boxheader}>Musik</h3>
            </div>
            <p>Lyssna till folkmusik varje dag 15.00 i Högklyke <b>(4)</b>.</p>
            <p>Musik dyker upp när man minst anar det vid Församlingshemmet <b>(6)</b>.</p>
            <p>Musik spelas även i Lökäng <b>(18)</b> måndag, onsdag, fredag och lördag 12.00.</p>
          </div>
        </div>
      </Layout>
    </>
  )
}
