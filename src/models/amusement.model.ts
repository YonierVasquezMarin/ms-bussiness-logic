import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {AmusementImage} from './amusement-image.model';
import {AmusementType} from './amusement-type.model';
import {Site} from './site.model';

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

  @belongsTo(() => Site)
  siteId: number;

  @hasMany(() => AmusementImage)
  amusementImages: AmusementImage[];

  @belongsTo(() => AmusementType)
  amusementTypeId: number;

  constructor(data?: Partial<Amusement>) {
    super(data);
  }
}

export interface AmusementRelations {
  // describe navigational properties here
}

export type AmusementWithRelations = Amusement & AmusementRelations;
