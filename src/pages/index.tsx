import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
       <Head>
        <title>Neoset Corretora - A proteção que você merece</title>
      </Head>
      <main>
        <section className={`${styles.home} section`}>
        <div className={`${styles.home__container} container`}>
          <div className={styles.home__data}>
              <span className={styles.home__title__top}>
                Mais segurança
              </span>
              <h1 className={styles.home__title}>
                Proteção para <br /> você e sua fámilia
              </h1>
              <p className={styles.home__subtitle}>
                Com a <strong>Neoset corretora</strong>, você tem proteção completa, para quem 
                realmente importa e para seu patrimônio.
              </p>
              <div className={`${styles.buttons} ${styles.active}`}>
                <div className={styles.btn}>
                  <a className={styles.btn__budget}>Para você</a>
                </div>
                <div className={styles.btn__segundo}>
                  <a className={styles.btn__client}>Para sua Empresa</a>
                </div>
              </div>
          </div>
          <div className={styles.home__img}>
            <Image
            src="/images/Home.webp"
            alt="image Home"
            width="491"
            height="596"
            className={styles.img__home}
            />
            <div className={`${styles.buttons} ${styles.disable}`}>
                <div className={styles.btn}>
                  <a className={styles.btn__budget}>Para você</a>
                </div>
                <div className={styles.btn__segundo}>
                  <a className={styles.btn__client}>Para sua Empresa</a>
                </div>
              </div>
          </div>
        </div>
        </section>
      </main>
    </>
  )
}
