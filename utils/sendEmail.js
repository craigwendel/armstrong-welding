import fetch from 'node-fetch';
console.log(process.env.SENDGRID_API_KEY);

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendEmail = async ({ name, email, phone, message }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: 'wendelcraig@gmail.com',
            },
          ],
          subject: `Quote / Information Inquiry from ${name}`,
        },
      ],
      from: {
        email,
        name,
      },
      content: [
        {
          type: 'text/html',
          value: `Name: ${name}
                  Email: ${email}
                  Phone: ${phone}
                  Message: ${message}
          `,
        },
      ],
    }),
  });
};

export { sendEmail };
