import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import { Footer } from "@/components/Footer/Footer";
import { ClientForm } from "@/components/ClientForm/ClientForm";

//todo desktop view header should still be black

export default function NewClientForm() {
  return (
    <main className={styles.main}>
      <Header permanentBgColor={true} scrollValue={0} />
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Ready to Take Charge?</h2>
        <p className={styles.formParagraph}>
          Complete our new client form and I’ll reach out within a few days to
          discuss your personalized fitness plan!
        </p>
        <ClientForm />
      </div>

      {/* <div className={styles.footerContainer}>
        <Footer />
      </div> */}
    </main>
  );
}
