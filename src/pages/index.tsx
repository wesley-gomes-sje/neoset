import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Home.module.scss";

export default function Home() {

  const gridYou= [
    {
      icon:"",
      text: "Seguro de Vida"
    },
    {
      icon:"",
      text: "Seguro Viagem"
    },
    {
      icon:"",
      text: "Seguro Fiança"
    },
    {
      icon:"",
      text: "Consorcio"
    },
    {
      icon:"",
      text: "Plano Saúde Pet"
    },
    {
      icon:"",
      text: "Seguro Automóvel"
    },
    {
      icon:"",
      text: "Seguro Residencial"
    },
    {
      icon:"",
      text: "Plano de Saúde e Odonto"
    },
    {
      icon:"",
      text: "Previdencia Privada"
    },
    {
      icon:"",
      text: "Seguro Resgatável"
    },
    {
      icon:"",
      text: "Seguro de responsabilidade civil"
    },
    {
      icon:"",
      text: "Seguro equipamentos portáteis"
    },
  ]
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
                <Link href="#you">
                  <div className={styles.btn}>
                      <a className={styles.btn__budget}>Para você</a>
                  </div>
                </Link>
                <Link href="#company">
                  <div className={styles.btn__segundo}>
                    <a className={styles.btn__client}>Para sua Empresa</a>
                  </div>
                </Link>
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
                <Link href="#you">
                  <div className={styles.btn}>
                      <a className={styles.btn__budget}>Para você</a>
                  </div>
                </Link>

                <Link href="#company">
                  <div className={styles.btn__segundo}>
                    <a className={styles.btn__client}>Para sua Empresa</a>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        </section>
        <section className={`${styles.you} section`} id="you">
          <div className={`${styles.you__container} container`}>
            <div className={styles.you__data}>
              <div className={styles.you__header}>
                <h3 className={styles.you__tile}> Para você:</h3>
                <p className={styles.you__tile}> 
                  Proteção para você, sua família, patrimônio
                  e invetimentos, confira todos os serviços:
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
