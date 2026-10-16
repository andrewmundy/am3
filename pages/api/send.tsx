import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method not allowed.');
  }

  const { email, message, name } = req.body || {};
  if (
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    typeof name !== 'string' ||
    !email.trim() ||
    !message.trim() ||
    !name.trim()
  ) {
    return res.status(400).send('Please fill out every field.');
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY2 || '');
  const content = {
    to: 'andrewmundy@gmail.com',
    // SendGrid only sends from verified senders, so send from the site
    // owner's address and let replies go to the visitor.
    from: 'andrewmundy@gmail.com',
    replyTo: email,
    subject: `New Message From - ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
    html: `<p>${escapeHtml(message)}</p><p>From: ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
