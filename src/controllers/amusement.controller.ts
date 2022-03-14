import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Amusement} from '../models';
import {AccessTypeRepository} from '../repositories';

export class AmusementController {
  constructor(
    @repository(AccessTypeRepository)
    public accessTypeRepository : AccessTypeRepository,
  ) {}

  @post('/amusements')
  @response(200, {
    description: 'Amusement model instance',
    content: {'application/json': {schema: getModelSchemaRef(Amusement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amusement, {
            title: 'NewAmusement',
            exclude: ['id'],
          }),
        },
      },
    })
    amusement: Omit<Amusement, 'id'>,
  ): Promise<Amusement> {
    return this.accessTypeRepository.create(amusement);
  }

  @get('/amusements/count')
  @response(200, {
    description: 'Amusement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Amusement) where?: Where<Amusement>,
  ): Promise<Count> {
    return this.accessTypeRepository.count(where);
  }

  @get('/amusements')
  @response(200, {
    description: 'Array of Amusement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Amusement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Amusement) filter?: Filter<Amusement>,
  ): Promise<Amusement[]> {
    return this.accessTypeRepository.find(filter);
  }

  @patch('/amusements')
  @response(200, {
    description: 'Amusement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amusement, {partial: true}),
        },
      },
    })
    amusement: Amusement,
    @param.where(Amusement) where?: Where<Amusement>,
  ): Promise<Count> {
    return this.accessTypeRepository.updateAll(amusement, where);
  }

  @get('/amusements/{id}')
  @response(200, {
    description: 'Amusement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Amusement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Amusement, {exclude: 'where'}) filter?: FilterExcludingWhere<Amusement>
  ): Promise<Amusement> {
    return this.accessTypeRepository.findById(id, filter);
  }

  @patch('/amusements/{id}')
  @response(204, {
    description: 'Amusement PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amusement, {partial: true}),
        },
      },
    })
    amusement: Amusement,
  ): Promise<void> {
    await this.accessTypeRepository.updateById(id, amusement);
  }

  @put('/amusements/{id}')
  @response(204, {
    description: 'Amusement PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() amusement: Amusement,
  ): Promise<void> {
    await this.accessTypeRepository.replaceById(id, amusement);
  }

  @del('/amusements/{id}')
  @response(204, {
    description: 'Amusement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.accessTypeRepository.deleteById(id);
  }
}
