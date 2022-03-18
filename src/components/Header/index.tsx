import { useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { 
    RiCloseFill,
    RiMenuFill

 } from "react-icons/ri";
export function Header(){
    const [activeMenu, setActiveMenu] = useState(false);
    return(
        <>
            <header className={`${styles.header}`}>
                <nav className={`${styles.nav} container`}>
                    <Link href="/">
                        <a className={styles.nav__logo}>
                           <Image
                            src="/images/logo.svg"
                            alt="Logo empresa"
                            width={150}
                            height={63}
                           >

                           </Image>
                        </a>
                    </Link> 
                    <div className={`${styles.nav__menu} ${activeMenu && (styles.showMenu)}`} id="nav-menu">
                        <ul className={styles.nav__list}>
                            <li className={styles.nav__item}>
                                <Link href="/">
                                    <a className={styles.nav__link}>Início</a>
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="#services">
                                    <a className={styles.nav__link}>Serviços</a>
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="#about">
                                    <a className={styles.nav__link}>Quem Somos</a>
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="#contact">
                                    <a className={styles.nav__link}>Contato</a>
                                </Link>
                            </li>
                            <div className={styles.btn}>
                                <a className={styles.btn__budget}>Orçamento</a>
                            </div>
                            <div className={styles.btn__segundo}>
                                <a className={styles.btn__client}>Sou Cliente</a>
                            </div>
                        </ul>
                        <div className={styles.nav__close} id="nav-close">
                           <RiCloseFill size={30} onClick={() => setActiveMenu(false)} />
                        </div>
                    </div>
                    <div className={styles.nav__toggle} id="nav-toggle">
                       <RiMenuFill size={30} onClick={() => setActiveMenu(true)}/>
                    </div>
                </nav>
            </header>
       </>
    )
}