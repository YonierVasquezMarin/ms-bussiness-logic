import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {AccessType} from './access-type.model';
import {Site} from './site.model';
import {AmusementImage} from './amusement-image.model';

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

  @belongsTo(() => AccessType)
  accessTypeId: number;

  @property({
    type: 'number',
  })
  amusementTypeId?: number;

  @belongsTo(() => Site)
  siteId: number;

  @hasMany(() => AmusementImage)
  amusementImages: AmusementImage[];

  constructor(data?: Partial<Amusement>) {
    super(data);
  }
}

export interface AmusementRelations {
  // describe navigational properties here
}

export type AmusementWithRelations = Amusement & AmusementRelations;
