import Head from "next/head";
import styles from "@/styles/style.module.css";
import Topbar from "./topbar";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "default title" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <main className={styles.main}>
        <Topbar />
        {children}
      </main>
    </>
  );
}
