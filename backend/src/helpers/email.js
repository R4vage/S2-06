import nodemailer from "nodemailer";
import { transportVar, transportVar2 } from "./.transportVar.js";

export const emailToken = async (user) => {
  const { email, name, token } = user;
  const transport = nodemailer.createTransport(transportVar2);
  const info = await transport.sendMail({
    from: '"GamaGames - User Accounts" <gamagames@outlook.es>',
    to: email,
    subject: "GamaGames - Confirm your account",
    text: "Confirm your GamaGames account",
    html: `<p>Hi ${name}, please validate your e-mail</p>
          <p> Your account is almost ready, just click the button to confirm your account</p>
          <button><a href="http://localhost:3000/confirmed/${token}"> Click Here </a></button>
          <p> If you havent registered to GamaGames, please ignore this e-mail </p>`
  });
};

export const emailForgot = async (user) => {
  const { email, name, token } = user;
  const transport = nodemailer.createTransport(transportVar2);
  const info = await transport.sendMail({
    from: '"GamaGames - User Accounts" <gamagames@outlook.es>',
    to: email,
    subject: "GamaGames - Password forgotten",
    text: "Please, change yout password",
    html: `<p>Hi ${name}, please change your password</p>
          <p> Please, click the next link to change your password</p>
          <button><a href="http://localhost:3000/forgot/${token}"> Click Here </a></button>
          <p> If you havent forgotten your password, please ignore this e-mail </p>`
  });
};
