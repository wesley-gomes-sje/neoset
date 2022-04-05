import { useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './styles.module.scss';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
                            src="/images/logoBranca.svg"
                            alt="Logo empresa"
                            width={150}
                            height={100}
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
                                <a className={styles.nav__link}>
                                    Serviços
                                    <MdOutlineKeyboardArrowDown
                                        size={25}
                                        className={styles.nav__link__arrow}
                                    />
                                </a>
                                <ul className={styles.nav__submenu}>
                                    <li className={styles.nav__item__sub}>
                                        <Link href="#you">
                                        <a
                                            onClick={() => {
                                            setActiveMenu(false);
                                            }}
                                        >
                                            Para Você
                                        </a>
                                        </Link>
                                    </li>
                                    <li className={styles.nav__item__sub}>
                                        <Link href="#company">
                                        <a
                                            onClick={() => {
                                            setActiveMenu(false);
                                            }}
                                        >
                                            Para Sua Empresa
                                        </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="#about">
                                    <a className={styles.nav__link}>Sobre</a>
                                </Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="#contact">
                                    <a className={styles.nav__link}>Contato</a>
                                </Link>
                            </li>
                            <div className={styles.btns}>
                                <div className={styles.btn}>
                                    <Link href="https://www.instagram.com/neosetcorretora/">
                                        <Image
                                            src="/images/instagram.svg"
                                            alt="Logo empresa"
                                            width={40}
                                            height={40}
                                        />
                                    </Link>
                                </div>
                                <div className={styles.btn}>
                                    <Link href="https://www.facebook.com/neosetcorretora/" >
                                        <Image
                                            src="/images/facebook.svg"
                                            alt="Logo empresa"
                                            width={40}
                                            height={40}
                                        />
                                      </Link>  
                                </div>
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