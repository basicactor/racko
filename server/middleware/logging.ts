//すべてのAPIリクエストがミドルウェアを通るので、認証やログ出力などに向いている。

import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.headers)
}