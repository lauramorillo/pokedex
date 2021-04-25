import {Entity} from '@loopback/repository';

export class EntityNotFoundByFieldError extends Error {
  code: string;
  entityName: string;
  entityField: string;

  constructor(entity: typeof Entity, entityField: string, entityValue: string) {
    const entityName = entity.modelName || entity.name;

    const quotedValue = JSON.stringify(entityValue);

    super(`Entity not found: ${entityName} with ${entityField} ${quotedValue}`);

    Error.captureStackTrace(this, this.constructor);

    this.code = 'ENTITY_NOT_FOUND_BY_FIELD';
    this.entityName = entityName;
    this.entityField = entityField;

    Object.assign(this);
  }
}

export function isEntityNotFoundByFieldError(
  e: Error,
): e is EntityNotFoundByFieldError {
  return e instanceof EntityNotFoundByFieldError;
}
