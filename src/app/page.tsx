import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Tagline } from "@/components/Tagline/Tagline";
import { ClientQuote } from "@/components/ClientQuote/ClientQuote";
import { Quote } from "../components/Quote/Quote";
import { About } from "@/components/About/About";
import { SwiperPlans } from "../components/SwiperPlans/SwiperPlans";
import { PlanContainer } from "@/components/PlanContainer/PlanContainer";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <ClientQuote />
      <Tagline />
      <div className={styles.desktop}>
        <PlanContainer />
      </div>
      <div className={styles.mobile}>
        <SwiperPlans />
      </div>
      <Footer />
    </main>
  );
}
