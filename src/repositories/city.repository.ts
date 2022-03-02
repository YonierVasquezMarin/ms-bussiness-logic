import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {City, CityRelations, Departamento} from '../models';
import {DepartamentoRepository} from './departamento.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly region: BelongsToAccessor<Departamento, typeof City.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>,
  ) {
    super(City, dataSource);
    this.region = this.createBelongsToAccessorFor('region', departamentoRepositoryGetter,);
    this.registerInclusionResolver('region', this.region.inclusionResolver);
  }
}
