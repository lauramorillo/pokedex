import {inject} from '@loopback/core';
import {get, Request, response, RestBindings} from '@loopback/rest';

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping')
  @response(204)
  ping(): void {
    return;
  }
}
