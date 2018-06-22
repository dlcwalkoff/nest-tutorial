import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import * as signale from 'signale';

signale.config({
  displayFilename: true,
  displayTimestamp: true,
  displayDate: false,
});

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      signale.info('Request to', req.originalUrl);
      next();
    };
  }
}
