import styles from "@/styles/style.module.css";
import Image from "next/image";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout title="Gräsö konstrunda - Fika">
        <div className={styles.fika}>
          <div className={styles.box}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div className={styles.boxlogo}>
                <Image
                  src="/Cutlery.svg"
                  alt="Fika-symbol"
                  quality={100}
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className={styles.boxheader}>
                <h3>Café</h3>
                <p>
                  <em>
                    Är ni sugna på att besöka några mysiga caféer eller
                    lunchställen kan vi tipsa om dessa.
                  </em>
                </p>
              </div>
            </div>
            <p>
              Rävsten <b>(1)</b>, här finns lunch, fika och glass.
            </p>
            <p>
              Gräsö Camping Restaurang Doppingen <b>(8)</b> erbjuder fika, mat,
              glass, bad m.m samt tillgång till handikapptoalett.
            </p>
            <p>
              Sist men inte minst Norrboda Bygdegård <b>(16)</b>, ett café med
              tillgång till handikapptoalett.
            </p>
            <p>Konstrundans fikasymbol visar dig vägen!</p>
          </div>
          <div className={styles.box}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div className={styles.boxlogo}>
                <Image
                  src="/Kaffekopp.svg"
                  alt="Fika-symbol"
                  quality={100}
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className={styles.boxheader}>
                <h3>Enklare fika</h3>
                <p>
                  <em>Fem utställningsplatser serverar enklare fika.</em>
                </p>
              </div>
            </div>
            <p>
              Högklyke <b>(4)</b>, Muskaregrund <b>(5)</b>, Sundsborg 27{" "}
              <b>(7)</b>, Nötsveden IP <b>(9)</b> samt på plats nummer{" "}
              <b>(14)</b> Anders Matsgården.
            </p>
          </div>
          <div className={styles.box}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div className={styles.boxlogo}>
                <Image
                  src="/Guitar.svg"
                  alt="Musik-symbol"
                  quality={100}
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <h3 className={styles.boxheader}>Musik</h3>
            </div>
            <p>
              Musik dyker upp när man minst anar det vid Nötsvedens IP{" "}
              <b>(9)</b>.
            </p>
            <p>
              Musik spelas även i Lökäng <b>(19)</b> måndag, tisdag, och fredag
              klockan 12:30, lördag klockan 12.00.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
