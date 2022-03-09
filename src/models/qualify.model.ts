import {Entity, model, property} from '@loopback/repository';

@model()
export class Qualify extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  starts: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<Qualify>) {
    super(data);
  }
}

export interface QualifyRelations {
  // describe navigational properties here
}

export type QualifyWithRelations = Qualify & QualifyRelations;
