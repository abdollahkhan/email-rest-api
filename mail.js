const nodemailer = require('nodemailer');
const { DEFAULT_EMAIL_SUBJECT } = require('./constant');
const {htmlTemplate} = require('./template.js');

exports.mail = async (recipient) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_AUTH_USERNAME,
      pass: process.env.SMTP_AUTH_PASSWORD
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `${process.env.SENDER_EMAIL}`,
      to: `${recipient}`,
      subject: DEFAULT_EMAIL_SUBJECT,
      html: `${htmlTemplate()}`
    });

    console.log('Message sent: %s', info.messageId);
    return info.messageId
  } catch (e) {
    console.log(e);
  }
};
