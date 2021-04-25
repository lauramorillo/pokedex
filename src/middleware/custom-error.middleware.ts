import {Middleware} from '@loopback/rest';
import {isEntityNotFoundByFieldError} from '../errors/EntityNotFoundByFieldError';

export const customErrorMiddleware: Middleware = async (
  middlewareCtx,
  next,
) => {
  const {response} = middlewareCtx;
  try {
    const result = await next();
    return result;
  } catch (err) {
    if (isEntityNotFoundByFieldError(err)) {
      response.status(404).send(err.message);
      return response;
    }
    throw err;
  }
};
