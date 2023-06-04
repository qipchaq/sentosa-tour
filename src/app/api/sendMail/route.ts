import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import {
  mailOptions,
  transporter,
} from '../../../../service/config/nodemailer/nodemailer';

export async function POST(request: Request, response: NextApiResponse) {
  // return new Response('Hello, Next.js!');
  const body = await request.json();
  // return NextResponse.json(body);

  // if (req.method === 'POST') {
  // const data = req.body;
  //   const body = await request.json();
  //   if (!data || !data.name || !data.email || !data.subject || !data.message) {
  //     return res.status(400).send({ message: 'Bad request' });
  //   }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: body.name,
      text: body.message,
      html: '<p>${body.message}</p>',
    });
    NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    // NextResponse.json({ message: err.message });
  }

  //     return res.status(200).json({ success: true });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(400).json({ message: err.message });
  //   }
  // }
  // return res.status(400).json({ message: 'Bad request' });

  console.log(body.name, body.message);
}
