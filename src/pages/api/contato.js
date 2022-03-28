// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
var postmark = require("postmark");
export default async (req, res) => {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const { nome, telefone, email, assunto, mensagem } = req.body;

    /* Envaindo o email */
    var client = new postmark.Client(process.env.POSTMARK_CLIENT_ID);

    var result = await client.sendEmail({
      From: '"Site Neoset corretora"',
     /*  To: "contato@neosetcorretora.com.br", */
      To: "tutoriabancodedados@gmail.com",
      ReplyTo: email,
      Subject: assunto,
      TextBody: `Nome: ${nome} - Telefone: ${telefone} -  Email: ${email}  - Assunto: ${assunto} - Mensagem: ${mensagem}`,
      HtmlBody: `<p><strong>Nome: </strong>${nome}</p><br />
      <p><strong>Email: </strong>${email}</p><br />
      <p><strong>Assunto: </strong>${assunto}</p><br />
      <p>${mensagem}</p>
      <br /><br />
      <p>Enviado pelo formulário de contato no site: <a href="https://novo-site-kpg.vercel.app/">https://www.neosetcorretora.com/</a></p>`,
  });

  if (result.Message == "OK") {
    res.status(200).json({
        error: false,
        message: "Mensagem enviada com sucesso. Em breve nosso time entrará em contato",
    });
} else {
    res.status(500).json({
        error: true,
        message:
            "Desculpe, algo deu errado. Verifique os dados que inseriu no formulário e tente novamente mais tarde.",
    });
}
};
