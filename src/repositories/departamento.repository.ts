import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Departamento, DepartamentoRelations, City} from '../models';
import {CityRepository} from './city.repository';

export class DepartamentoRepository extends DefaultCrudRepository<
  Departamento,
  typeof Departamento.prototype.id,
  DepartamentoRelations
> {

  public readonly has_cities: HasManyRepositoryFactory<City, typeof Departamento.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('CityRepository') protected cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(Departamento, dataSource);
    this.has_cities = this.createHasManyRepositoryFactoryFor('has_cities', cityRepositoryGetter,);
    this.registerInclusionResolver('has_cities', this.has_cities.inclusionResolver);
  }
}
