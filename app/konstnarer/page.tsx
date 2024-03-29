import AllArtists from "@/components/allArtists";
import Image from "next/image";
import styles from "@/styles/style.module.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gräsö konstrunda - Utställare",
};

export default function Home() {
  return (
    <>
      <div className={styles.whereGo}>
        <div className={styles.whereSkylt}>
          <Image
            src="/skylt.webp"
            alt="Skylt till utställningsplats"
            quality={100}
            width={500}
            height={500}
            sizes="(max-width: 768px) 14vw, 5vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
        <p className={styles.whereText}>
          Konstrundans <br />
          skyltar visar dig <br />
          vägen till alla
          <br /> konstutställningar!
        </p>
      </div>
      <AllArtists />
    </>
  );
}
