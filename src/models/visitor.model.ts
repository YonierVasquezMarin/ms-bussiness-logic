import {Entity, model, property} from '@loopback/repository';

@model()
export class Visitor extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;


  constructor(data?: Partial<Visitor>) {
    super(data);
  }
}

export interface VisitorRelations {
  // describe navigational properties here
}

export type VisitorWithRelations = Visitor & VisitorRelations;
