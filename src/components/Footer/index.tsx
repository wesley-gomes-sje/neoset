import Link from 'next/link';
import Image from "next/image";
import { RiWhatsappLine, RiMailLine, RiPhoneLine} from "react-icons/ri";
import styles from './styles.module.scss';

export function Footer(){
    return(
        <>
            <section className={`${styles.footer}`}>
                <div className={`${styles.footer__container} container`}>
                    <div className={styles.footer__content}>
                        <div className={styles.footer__logo}>
                            <Link href="/">
                                <a className={styles.nav__logo}>
                                <Image
                                    src="/images/logoBranca.svg"
                                    alt="Logo empresa"
                                    width={180}
                                    height={130}
                                >
                                </Image>
                                </a>

                            </Link>
                            
                        </div>
                        <div className={styles.sociais}>
                                <div className={styles.btn}>
                                    <Link href="https://www.instagram.com/neosetcorretora/">
                                        <Image
                                            src="/images/instagram.svg"
                                            alt="Logo empresa"
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                     
                                </div>
                                <div className={styles.btn}>
                                    <Link href="https://www.facebook.com/neosetcorretora/" >
                                        <Image
                                            src="/images/facebook.svg"
                                            alt="Logo empresa"
                                            width={50}
                                            height={50}
                                        />
                                      </Link>
                                      
                                </div>
                        </div>
                        <div className={styles.contact}>
                            <h3 className={styles.contact__title}>Contatos:</h3>
                            <div className={styles.contact__content}>
                                <div className={`${styles.zap}`}>
                                    <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+os+Planos+Neoset.&app_absent=0">
                                        <a target="_blank" className={styles.btn__whatsapp}> <RiPhoneLine size={25}/> <RiWhatsappLine size={25}/>(21) 980069549 </a>
                                    </Link>
                                </div>
                                <div className={`${styles.zap}`}>
                                    <Link href="https://api.whatsapp.com/send/?phone=5521980069549&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+os+Planos+Neoset.&app_absent=0">
                                        <a target="_blank" className={styles.btn__whatsapp}> <RiMailLine size={25}/>contato@neosetcorretora.com.br</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.copy}>
                        <div className={styles.copy__text}>
                            <span className={styles.span}>Feito com ❤ por <Link href="https://www.agenciawash.com.br/"><a target="_blank" className={styles.span}>Agência wash</a></Link></span>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}