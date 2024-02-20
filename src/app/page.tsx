"use client";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Tagline } from "@/components/Tagline/Tagline";
import { ClientQuote } from "@/components/ClientQuote/ClientQuote";
import { About } from "@/components/About/About";
import { SwiperPlans } from "../components/SwiperPlans/SwiperPlans";
import { PlanContainer } from "@/components/PlanContainer/PlanContainer";
import { Footer } from "@/components/Footer/Footer";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const option = { threshold: 0.3 };
  const aboutRef = useRef();
  const homeRef = useRef();
  const plansRef = useRef(null);
  const testimonialsRef = useRef();

  //! do I need these?
  const [aboutRefView, aboutVis] = useInView(option);

  //! type of this??
  function scrollTo(el: any) {
    let item = el.current;
    item.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className={styles.main}>
      <Hero passedRef={homeRef} />
      <About passedRef={aboutRef} />
      <ClientQuote passedRef={testimonialsRef} />
      <Tagline />
      <div ref={plansRef}>
        <div className={styles.desktop}>
          <PlanContainer />
        </div>
        <div className={styles.mobile}>
          <SwiperPlans />
        </div>
      </div>
      <Footer
        onClickAbout={() => {
          scrollTo(aboutRef);
        }}
        onClickHome={() => {
          scrollTo(homeRef);
        }}
        onClickTestimonials={() => {
          scrollTo(testimonialsRef);
        }}
        onClickPlans={() => {
          scrollTo(plansRef);
        }}
      />
    </main>
  );
}
