import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Tagline } from "@/components/Tagline/Tagline";
import { ClientQuote } from "@/components/ClientQuote/ClientQuote";
import { Quote } from "../components/Quote/Quote";
import { About } from "@/components/About/About";
import { PlanContainer } from "@/components/PlanContainer/PlanContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <ClientQuote />
      <Tagline />
      <PlanContainer />
    </main>
  );
}
