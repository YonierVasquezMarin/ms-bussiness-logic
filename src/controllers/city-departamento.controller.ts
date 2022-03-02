import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  City,
  Departamento,
} from '../models';
import {CityRepository} from '../repositories';

export class CityDepartamentoController {
  constructor(
    @repository(CityRepository)
    public cityRepository: CityRepository,
  ) { }

  @get('/cities/{id}/departamento', {
    responses: {
      '200': {
        description: 'Departamento belonging to City',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Departamento)},
          },
        },
      },
    },
  })
  async getDepartamento(
    @param.path.number('id') id: typeof City.prototype.id,
  ): Promise<Departamento> {
    return this.cityRepository.region(id);
  }
}
