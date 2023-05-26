import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (
      new ConfigService().get('NODE_ENV') == 'production' &&
      req.headers['x-api-key'] != 'YXVsaWFpbm92YXNpQDEyMw=='
    ) {
      return res.sendStatus(401);
    }

    next();
  }
}
