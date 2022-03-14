import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {AccessType} from './access-type.model';
import {City} from './city.model';
import {Amusement} from './amusement.model';
import {Visitor} from './visitor.model';
import {VisitorSite} from './visitor-site.model';

@model()
export class Site extends Entity {
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
  description: string;

  @property({
    type: 'string',
  })
  longitude?: string;

  @property({
    type: 'string',
  })
  latitude?: string;

  @property({
    type: 'number',
    required: true,
  })
  starts: number;

  @belongsTo(() => AccessType)
  accessTypeId: number;

  @belongsTo(() => City)
  cityId: number;

  @hasMany(() => Amusement)
  amusements: Amusement[];

  @hasMany(() => Visitor, {through: {model: () => VisitorSite}})
  visitors: Visitor[];

  constructor(data?: Partial<Site>) {
    super(data);
  }
}

export interface SiteRelations {
  // describe navigational properties here
}

export type SiteWithRelations = Site & SiteRelations;
