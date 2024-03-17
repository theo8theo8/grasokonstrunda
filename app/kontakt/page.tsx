import styles from "@/styles/style.module.css";
import Image from "next/image";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout title="Gräsö konstrunda - Kontakt">
        <div className={styles.contact}>
          <h1>Kontaktinformation</h1>
          <p>
            <b>Kyll Hellberg: </b>073-914 04 31
          </p>
          <p>
            <b>Ulla Gerbrand: </b>070-575 59 67
          </p>
          <a
            href="mailto:info@grasokonstrunda.se"
            target="_blank"
            rel="noreferrer"
          >
            info@grasokonstrunda.se
          </a>
          <a
            href="https://www.facebook.com/groups/663788286968932/?fref=ts"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/facebook-logo.webp"
              alt="Facebook"
              width={128}
              height={64}
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "auto",
              }}
            />
          </a>
        </div>
      </Layout>
    </>
  );
}
