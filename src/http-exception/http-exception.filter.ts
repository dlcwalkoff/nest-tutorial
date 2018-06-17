import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    res
      .status(exception.getStatus())
      .json({
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: req.url,
      });
  }
}
