import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Amusement,
  AccessType,
} from '../models';
import {AmusementRepository} from '../repositories';

export class AmusementAccessTypeController {
  constructor(
    @repository(AmusementRepository)
    public amusementRepository: AmusementRepository,
  ) { }

  @get('/amusements/{id}/access-type', {
    responses: {
      '200': {
        description: 'AccessType belonging to Amusement',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AccessType)},
          },
        },
      },
    },
  })
  async getAccessType(
    @param.path.number('id') id: typeof Amusement.prototype.id,
  ): Promise<AccessType> {
    return this.amusementRepository.accessType(id);
  }
}
