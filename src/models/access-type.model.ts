import {Entity, model, property} from '@loopback/repository';

@model()
export class AccessType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<AccessType>) {
    super(data);
  }
}

export interface AccessTypeRelations {
  // describe navigational properties here
}

export type AccessTypeWithRelations = AccessType & AccessTypeRelations;
