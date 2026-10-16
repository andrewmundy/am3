import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

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

  if (!process.env.RESEND_API_KEY) {
    console.log('ERROR', 'RESEND_API_KEY is not set');
    return res.status(500).send('Message not sent.');
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  let error: unknown;
  try {
    ({ error } = await resend.emails.send({
      to: 'andrewmundy@gmail.com',
      from: 'Andrew Mundy <contact@mail.andrewmundy.net>',
      replyTo: email,
      subject: `New Message From - ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${escapeHtml(message)}</p><p>From: ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
    }));
  } catch (e) {
    error = e;
  }

  if (error) {
    console.log('ERROR', error);
    return res.status(400).send('Message not sent.');
  }
  res.status(200).send('Message sent successfully.');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
