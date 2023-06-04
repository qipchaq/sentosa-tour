// import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(request: Request, response: Response) {
  return new Response('Hello, Next.js!');
  // console.log(request);
  //   const body = request.body;
  //   response.status(200).json({
  //     body: request.body,
  // query: request.query,
  // cookies: request.cookies,
  //   });
}
