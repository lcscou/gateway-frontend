// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require("nodemailer");

type Data = {
  name: string
}

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSWORD,
    },
  });

  console.log(req.body)
  let info = await transporter.sendMail({
    from: `"Gateway form" <${req.body.email}>`,
    to: "<contact@gateway.com>",
    subject: "Você recebeu um contato do Gateway",
    text: req.body.message,
    html: `Message from: ${req.body.name}<br>Email: ${req.body.email}<br><br>${req.body.message}`,
  }).then((response: Data) => res.send(response))
    .catch((err: Data) => { res.send(err) })
}
