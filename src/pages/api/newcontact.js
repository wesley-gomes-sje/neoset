const nodemailer = require('nodemailer')
export default function sendEmail(req, res){
    let transporter = nodemailer.createTransport({
        host: 'smtp.uhserver.com',
        port: 587,
        secure: false,
        auth: {
            user:process.env.USERMAIL,
            pass:process.env.PASSMAIL,
        },
    })

    transporter.sendMail({
        From: "Site Neoset corretora",
     /*  To: "contato@neosetcorretora.com.br", */
      To: "tutoriabancodedados@gmail.com",
      ReplyTo: req.body.email,
      Subject: "Contato através do site",
      TextBody: `Nome: ${req.body.nome} - Telefone: ${req.body.telefone} -  Email: ${req.body.email} - Mensagem: ${req.body.mensagem}`,
      HtmlBody: `<p><strong>Nome: </strong>${req.body.nome}</p><br />
      <p><strong>Email: </strong>${req.body.email}</p><br />
      <p>${req.body.mensagem}</p>
      <br /><br />
      <p>Enviado pelo formulário de contato no site: <a href="https://neoset.vercel.app/">https://www.neosetcorretora.com.br/</a></p>`,
    }).then((response) => {res.send(response)})
      .catch((error) => {res.send(error)})
}