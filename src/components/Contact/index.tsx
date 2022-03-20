import { useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './styles.module.scss';
import swal from 'sweetalert';
export function Contact(){

    function formCad(event) {
        event.preventDefault();
      
        const data = new FormData(event.target);
      
        const userName = data.get('name');
        const userPhone = data.get('telefone');
        const userEmail = data.get('email');
        const userAssunto = data.get('assunto');
        const userMensagem = data.get('mensagem');

        fetch("http://localhost:3000/api/contato", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: userName,
                phone: userPhone,
                email: userEmail,
                assunto:userAssunto,
                mensagem: userMensagem,
            }),

        }).then((response) =>{
            if(response.ok){
                
                swal({
                    title: "Tudo certo",
                    text: "Sua mensagem foi enviada com sucesso.",
                    icon: "success",
                  });
            } else{
                swal({
                    title: "Oops...",
                    text: "Verifique seus dados e tente novamente mais tarde.",
                    icon: "error",
                  });
            }
        }).catch(error => {
            swal({
                title: "Oops...",
                text: "Verifique seus dados e tente novamente mais tarde.",
                icon: "error",
              })
        })

      };
    return(
        <>
            <section className={`${styles.contact} section`} id="contact">
                <div className={`${styles.contact__container} container`}>
                    <div className={styles.contact__img}>
                        <Image
                            src="/images/celularContact.webp"
                            alt="Icone beneficios"
                            width="312"
                            height="630"
                            className={styles.icon__about}
                        />
                    </div>
                    <div className={styles.contact__form}>
                        <form onSubmit={formCad}  className={styles.form}>
                            <div className={styles.group__form}>
                                <h3 className={styles.form__title}>
                                    Entre em Contato
                                </h3>
                            </div>
                            <div className={styles.group__form}>
                                <label htmlFor="name" className={styles.label}>Nome Completo</label>
                                <input  className={styles.input} type="text" id='name' name='name' placeholder=' Digite seu nome' required/>
                            </div>
                            <div className={styles.group__form}>
                                <label htmlFor="telefone"  className={styles.label}>Telefone</label>
                                <input  className={styles.input} type="number" id='telefone' name='telefone' placeholder='Insira seu telefone com DDD' required/>
                            </div>
                            <div className={styles.group__form}>
                                <label htmlFor="email"  className={styles.label}>Email</label>
                                <input  className={styles.input} type="email" id='email' name='email' placeholder=' Ex: seunome@gmail.com' required/>
                            </div>
                            <div className={styles.group__form}>
                                <label htmlFor="assunto"  className={styles.label}>Assunto</label>
                                <input  className={styles.input} type="text" id='assunto' name='assunto' placeholder=' Digite o assunto' required/>
                            </div>
                            <div className={styles.group__form}>
                                <label htmlFor="mensagem"  className={styles.label}>Mensagem</label>
                                <textarea  className={styles.textarea} rows={3}  id='mensagem' name='mensagem' placeholder=' Escreva sua mensagem...'required></textarea>
                            </div>
                            <div className={styles.btn__content}>
                                <button className={styles.btn__send} type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}