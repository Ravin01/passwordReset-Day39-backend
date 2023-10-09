import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ravinganapathi@gmail.com',
    pass: 'jpjv qdkz gsdk epbi'
  }
});

export const mailOptions = {
  from: 'ravinganapathi@gmail.com',
  to: '',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
