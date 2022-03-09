import {Entity, model, property} from '@loopback/repository';

@model()
export class VisitorSite extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<VisitorSite>) {
    super(data);
  }
}

export interface VisitorSiteRelations {
  // describe navigational properties here
}

export type VisitorSiteWithRelations = VisitorSite & VisitorSiteRelations;
