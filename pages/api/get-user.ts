import { NowRequest, NowResponse } from '@vercel/node'

export default (_req: NowRequest, res: NowResponse) => {
  res.json({ name: 'John', email: 'john@example.com' })
}