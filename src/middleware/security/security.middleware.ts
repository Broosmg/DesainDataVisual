import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (
      req.method == 'POST' &&
      req.headers['x-api-key'] != 'YXVsaWFpbm92YXNpQDEyMw=='
    ) {
      return res.sendStatus(401);
    }

    next();
  }
}
