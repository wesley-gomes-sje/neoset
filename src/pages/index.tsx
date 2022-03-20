import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Home.module.scss";

export default function Home() {

  const gridYou= [
    {
      icon:"/images/iconecoracao.svg",
      text: "Seguro de Vida"
    },
    {
      icon:"/images/aviao.svg",
      text: "Seguro Viagem"
    },
    {
      icon:"/images/consorcio.svg",
      text: "Seguro Fiança"
    },
    {
      icon:"/images/money.svg",
      text: "Consorcio"
    },
    {
      icon:"/images/pet.svg",
      text: "Plano Saúde Pet"
    },
    {
      icon:"/images/carro.svg",
      text: "Seguro Automóvel"
    },
    {
      icon:"/images/casa.svg",
      text: "Seguro Residencial"
    },
    {
      icon:"/images/medico.svg",
      text: "Plano de Saúde e Odonto"
    },
    {
      icon:"/images/idoso.svg",
      text: "Previdencia Privada"
    },
    {
      icon:"/images/emprestimo.svg",
      text: "Seguro Resgatável"
    },
    {
      icon:"/images/danos.svg",
      text: "Seguro de responsabilidade civil"
    },
    {
      icon:"/images/celular.svg",
      text: "Seguro equipamentos portáteis"
    },
  ]
  const gridCompany= [
    {
      icon:"/images/vidagrupo.svg",
      text: "Seguro de Vida em Grupo"
    },
    {
      icon:"/images/odonto.svg",
      text: "Plano de Saúde e Odonto"
    },
    {
      icon:"/images/condominio.svg",
      text: "Condomínio"
    },
    {
      icon:"/images/veiculos.svg",
      text: "Seguro Veículos"
    },
    {
      icon:"/images/garantia.svg",
      text: "Seguro Garantia"
    },
    {
      icon:"/images/engenharia.svg",
      text: "Riscos de Engenharia"
    },
    {
      icon:"/images/frotas.svg",
      text: "Seguro Frota Veículos"
    },
    {
      icon:"/images/complementar.svg",
      text: "Previdencia Complementar"
    },
    {
      icon:"/images/diretores.svg",
      text: "Seguro Diretores & Oficiais"
    },
    {
      icon:"/images/patrimonial.svg",
      text: "Seguro Patrimonial Empresárial"
    },
    {
      icon:"/images/terceiros.svg",
      text: "Seguro de responsabilidade civil"
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
                    <a>Para sua Empresa</a>
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
                <h3 className={styles.you__title}> Para você:</h3>
                <p className={styles.you__subtitle}> 
                  Proteção para você, sua família, patrimônio
                  e investimentos, confira todos os serviços:
                </p>
              </div>
                <div className={styles.you__grid}>
                  {gridYou.map((item:any) =>(
                    <div className={styles.you__card} key={item.icon}>
                      <div className={styles.you__icon}>
                        <Image
                          src={item.icon}
                          alt="Icone beneficios"
                          width="35"
                          height="35"
                          className={styles.icon__you}
                        />
                      </div>
                      <div className={styles.you__description}>
                        <p className={styles.you__text}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="https://api.whatsapp.com/send/?phone=5521991122034&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Plano+família.&app_absent=0">
                  <a target="_blank"  className={`${styles.btn__budget} ${styles.active}`}>Orçamento</a>
                </Link>
            </div>
            <div className={styles.you__img}>
                <Image
                  src="/images/familia.webp"
                  alt="Icone beneficios"
                  width="500"
                  height="409"
                  className={styles.icon__you}
                />

              <div className={`${styles.disable}`}>
                <Link href="https://api.whatsapp.com/send/?phone=5521991122034&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Plano+família.&app_absent=0">
                  <a target="_blank" className={styles.btn__budget}>Orçamento</a>
                </Link>
              </div>
              </div>
          </div>
        </section>
        <section className={`${styles.company} section`} id="company">
          <div className={`${styles.company__container} container`}>
            <div className={styles.company__img}>
                <Image
                  src="/images/empresarial.webp"
                  alt="Icone beneficios"
                  width="500"
                  height="409"
                  className={styles.icon__company}
                />

                <div className={`${styles.disable}`}>
                  <Link href="https://api.whatsapp.com/send/?phone=5521991122034&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Plano+Empresarial.&app_absent=0">
                    <a target="_blank" className={styles.btn__budget}>Orçamento</a>
                  </Link>
                </div>
              </div>
            <div className={styles.company__data}>
              <div className={styles.company__header}>
                <h3 className={styles.company__title}> Para sua empresa:</h3>
                <p className={styles.company__subtitle}> 
                  Proteção completa para sua empresa, com a Neoset você pode mais, 
                  confira nossos serviços:
                </p>
              </div>
                <div className={styles.company__grid}>
                  {gridCompany.map((item:any) =>(
                    <div className={styles.company__card} key={item.icon}>
                      <div className={styles.company__icon}>
                        <Image
                          src={item.icon}
                          alt="Icone beneficios"
                          width="35"
                          height="35"
                          className={styles.icon__company}
                        />
                      </div>
                      <div className={styles.company__description}>
                        <p className={styles.company__text}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="https://api.whatsapp.com/send/?phone=5521991122034&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Plano+Empresarial.&app_absent=0">
                  <a target="_blank"  className={`${styles.btn__budget} ${styles.active}`}>Orçamento</a>
                </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
