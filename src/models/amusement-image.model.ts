import {Entity, model, property} from '@loopback/repository';

@model()
export class AmusementImage extends Entity {
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
  })
  path?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  tags: string[];


  constructor(data?: Partial<AmusementImage>) {
    super(data);
  }
}

export interface AmusementImageRelations {
  // describe navigational properties here
}

export type AmusementImageWithRelations = AmusementImage & AmusementImageRelations;
