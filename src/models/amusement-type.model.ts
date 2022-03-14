import {Entity, model, property, hasMany} from '@loopback/repository';
import {Amusement} from './amusement.model';

@model()
export class AmusementType extends Entity {
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

  @hasMany(() => Amusement)
  amusements: Amusement[];

  constructor(data?: Partial<AmusementType>) {
    super(data);
  }
}

export interface AmusementTypeRelations {
  // describe navigational properties here
}

export type AmusementTypeWithRelations = AmusementType & AmusementTypeRelations;
