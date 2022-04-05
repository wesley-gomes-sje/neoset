import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {Contact} from '../components/Contact';
import styles from "../styles/Home.module.scss";
import { RiWhatsappLine} from "react-icons/ri";

export default function Home() {

  const gridYou= [
    {
      icon:"/images/iconecoracao.svg",
      text: "Seguro de Vida"
    },
    {
      icon:"/images/medico.svg",
      text: "Plano de Saúde"
    },
    {
      icon:"/images/dente.svg",
      text: "Plano Odontológico"
    },
    {
      icon:"/images/carro.svg",
      text: "Seguro Automóvel"
    },
    {
      icon:"/images/pet.svg",
      text: "Plano Saúde Pet"
    },
    {
      icon:"/images/casa.svg",
      text: "Seguro Residencial"
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
      text: "Consórcio"
    },
   
    {
      icon:"/images/idoso.svg",
      text: "Previdência Privada"
    },
    {
      icon:"/images/danos.svg",
      text: "Seguro de Responsabilidade Civil"
    },
    {
      icon:"/images/celular.svg",
      text: "Seguro de Equipamentos Portáteis"
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
      text: "Seguro Transporte"
    },
    {
      icon:"/images/garantia.svg",
      text: "Seguro Garantia"
    },
    {
      icon:"/images/obra.svg",
      text: "Riscos de Engenharia"
    },
    {
      icon:"/images/carro.svg",
      text: "Seguro Frota Veículos"
    },
    {
      icon:"/images/complementar.svg",
      text: "Previdência Complementar"
    },
    {
      icon:"/images/emprestimo.svg",
      text: "Seguro Resgatável"
    },
    {
      icon:"/images/diretores.svg",
      text: "D&O - Responsabilidade Civil de Gestores."
    },
    {
      icon:"/images/patrimonial.svg",
      text: "Seguro Patrimonial Empresarial"
    },
    {
      icon:"/images/justica.svg",
      text: "Seguro de Responsabilidade Civil"
    },
  ]
  const gridPillars = [
    {
      icon:"/images/missao.svg",
      text:"MISSÃO",
      legend: "Nossa missão é oferecer uma efetiva consultoria em  seguros, transformando o relacionamento com nossos clientes em momentos de confiança e segurança, sempre com um atendimento personalizado."
    },
    {
      icon:"/images/visao.svg",
      text:"VISÃO",
      legend: "Ser referência no mercado de seguros como a melhor, mais eficiente e confiável corretora de seguros na visão dos clientes e seguradoras."
    },
    {
      icon:"/images/valores.svg",
      text:"VALORES",
      legend: "Trabalhamos com Honestidade, Transparência, Ética, Comprometimento e Responsabilidade."
    },
  ]
  return (
    <>
       <Head>
        <title>Neoset Corretora de Seguros - A proteção que você merece</title>
      </Head>
      <main>
        <section className={`${styles.home} section`}>
        <div className={`${styles.home__container} container`}>
          <div className={styles.home__data}>
              <span className={styles.home__title__top}>
                Mais segurança
              </span>
              <h1 className={styles.home__title}>
                Proteção para <br /> você e sua família
              </h1>
              <p className={styles.home__subtitle}>
                Com a <strong>Neoset Corretora de Seguros</strong>, você tem proteção completa, para quem 
                realmente importa e para seu patrimônio.
              </p>
              <div className={`${styles.buttons} ${styles.active}`}>
                <Link href="#you">
                  <div className={styles.btn}>
                      <a className={styles.btn__budget}>Para você</a>
                  </div>
                </Link>
                <Link href="#company">
                  <div className={styles.btn}>
                    <a className={styles.btn__budget}>Para sua Empresa</a>
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
                <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Seguro+Individual.&app_absent=0">
                  <a target="_blank"  className={`${styles.btn__budget} ${styles.active}`}>Faça uma Cotação</a>
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
                <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Seguro+Individual.&app_absent=0">
                  <a target="_blank" className={styles.btn__budget}>Faça uma Cotação</a>
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
                  <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Seguro+Empresarial.&app_absent=0">
                    <a target="_blank" className={styles.btn__budget}>Faça uma Cotação</a>
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
                <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+Seguro+Empresarial.&app_absent=0">
                  <a target="_blank"  className={`${styles.btn__budget} ${styles.active}`}>Faça uma Cotação</a>
                </Link>
            </div>
          </div>
        </section>
        <section className={`${styles.about} section`} id="about">
          <div className={`${styles.about__container} container`}>
            <div className={styles.about__data}>
              <div className={styles.about__header}>
                <h3 className={styles.about__title}> Sobre Nós</h3>
                <p className={styles.about__subtitle}> 
                  A Neoset Corretora de Seguros, nasce com mais de 25 anos de experiência
                  do <strong>seu sócio</strong> no mercado segurador. O conhecimento técnico acumulado
                  serve de base para o atendimento diferenciado e consultivo, onde em conjunto
                  com nossos clientes trabalhamos para desenhar soluções inovadoras e específicas,
                  e assim garantir a tranquilidade dos nossos clientes.
                </p>
              </div>
                <Link href="#pillars">
                  <a  className={`${styles.btn__budget} ${styles.active}`}>Saiba Mais</a>
                </Link>
                <div className={styles.about__stars}>
                  <Image
                    src="/images/stars.svg"
                    alt="Icone beneficios"
                    width="110"
                    height="19"
                    className={styles.icon__about}
                  />
                  <p className={styles.about__p}>
                    Recomendado por +100 clientes
                  </p>
                </div>
            </div>
            <div className={styles.about__img}>
                <Image
                  src="/images/sobre.webp"
                  alt="Icone beneficios"
                  width="500"
                  height="409"
                  className={styles.icon__about}
                />
              <div className={`${styles.disable}`}>
              <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+os+Planos+Neoset.&app_absent=0">
                  <a target="_blank" className={styles.btn__budget}>Saiba Mais</a>
                </Link>
              </div>
              </div>
          </div>
        </section>
        <section className={`${styles.pillars} section`} id="pillars">
          <div className={`${styles.pillars__container} container`}>
              <div className={styles.pillars__header}>
                    <h3 className={styles.pillars__title}>Nossos Pilares</h3>
                    <div className={styles.pillars__line}></div>
                    <p className={styles.pillars__subtitle}>Uma empresa com princípios e compromisso com sua proteção</p>
              </div>
                <div className={styles.pillars__grid}>
                    {gridPillars.map((item:any) =>(
                      <div className={styles.pillars__card} key={item.icon}>
                        <div className={styles.pillars__icon}>
                          <Image
                            src={item.icon}
                            alt="Icone beneficios"
                            width="45"
                            height="45"
                            className={styles.icon__about}
                          />
                        </div>
                          <h3 className={styles.pillars__card__title}>
                            {item.text}
                          </h3>
                          <p className={styles.pillars__card__subtitle}>
                            {item.legend}
                          </p>
                      </div>
                    ))}
                </div>    
          </div>
        </section>
        <Contact/>
        <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+os+Seguros+com+a+Neoset+Corretora.&app_absent=0">
        <a target="_blank" className={styles.btn__flutante}> <RiWhatsappLine size={55}/></a>
        </Link>
        
      </main>
    </>
  )
}
