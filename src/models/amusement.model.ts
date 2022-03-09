import {Entity, model, property} from '@loopback/repository';

@model()
export class Amusement extends Entity {
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


  constructor(data?: Partial<Amusement>) {
    super(data);
  }
}

export interface AmusementRelations {
  // describe navigational properties here
}

export type AmusementWithRelations = Amusement & AmusementRelations;
