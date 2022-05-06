import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b26c6090b3e2d9",
      pass: "9eeb9aa6d4fb41"
    }
  });

export class NodeMailerAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Matheus Soutto <dev.msoutto@gmail.com>',
        subject,
        html: body
    });
    }

}