import Image from "next/image";
import styles from "@/styles/style.module.css";
import Bottombar from "@/components/bottombar";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout title="Gräsö konstrunda 2023">
        <div className={styles.index}>
          <Image
            src="/map_black.webp"
            alt="Bild på Gräsö"
            width={320}
            height={320}
            quality={100}
            className={styles.indexMap}
            priority
          />
          <div className={styles.indexText}>
            <h2>
              Kom till Gräsö konstrunda i sommar!
              <br />
              <br />{" "}
            </h2>
            <p>
              Vecka 28 smyckar konstnärer sina hem, sjöbodar, lador och
              bygdegårdar med sin konst!
              <br />
              Konstutställningarna är utspridda över hela ön och ni får
              möjlighet att uppleva den härliga atmosfär och natur som finns på
              Gräsö.
              <br /> <br />
              <b>
                Varmt välkommen till Gräsö konstrunda!
                <br />
                <br />
                Kartan kommer under maj månad att uppdateras med 2024 års
                platser och konstnärer!
              </b>
            </p>
            <h1>
              <br />
              V.28 8-14 juli 2024
            </h1>
            <h2>
              <br />
              Kl. 12-17 alla dagar!
            </h2>
          </div>
        </div>
        <Bottombar />
      </Layout>
    </>
  );
}
