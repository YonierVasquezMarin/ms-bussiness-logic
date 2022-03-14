import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Departamento} from './departamento.model';
import {Site} from './site.model';

@model(
  {
    settings: {
      foreignKeys: {
        fk_city_departamento: {
          name: 'fk_city_departamento',
          entity: 'Departamento',
          entityKey: 'id',
          foreignKey: 'departamentoId',
        },
      },
    },
  }
)
export class City extends Entity {
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
  nombre: string;

  @belongsTo(() => Departamento)
  regionId: number;

  @hasMany(() => Site)
  sites: Site[];

  @belongsTo(() => Departamento)
  departamentoId: number;

  constructor(data?: Partial<City>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = City & CityRelations;
