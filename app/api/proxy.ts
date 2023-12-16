


import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  const response : any = await fetch(`https://results.deepinfra.com/${url}`);
  const buffer = await response.arrayBuffer();
  res.setHeader('Content-Type', response.headers.get('Content-Type'));
  res.send(Buffer.from(buffer));
}