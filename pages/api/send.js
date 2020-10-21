require('dotenv').config();
const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, phone, email, message } = req.body;

  const content = {
    to: 'wendelcraig@gmail.com',
    from: 'wendelcraig@gmail.com',
    subject: `New Message From - ${name}`,
    text: message,
    html: `
    <p>Message from <b>${name}</b></p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
