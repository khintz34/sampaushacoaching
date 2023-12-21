import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Tagline } from "@/components/Tagline/Tagline";
import { ClientQuote } from "@/components/ClientQuote/ClientQuote";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Tagline />
      <ClientQuote />
    </main>
  );
}
