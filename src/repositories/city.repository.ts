import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {City, CityRelations, Departamento, Site} from '../models';
import {DepartamentoRepository} from './departamento.repository';
import {SiteRepository} from './site.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly region: BelongsToAccessor<Departamento, typeof City.prototype.id>;

  public readonly sites: HasManyRepositoryFactory<Site, typeof City.prototype.id>;

  public readonly departamento: BelongsToAccessor<Departamento, typeof City.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>, @repository.getter('SiteRepository') protected siteRepositoryGetter: Getter<SiteRepository>,
  ) {
    super(City, dataSource);
    this.departamento = this.createBelongsToAccessorFor('departamento', departamentoRepositoryGetter,);
    this.registerInclusionResolver('departamento', this.departamento.inclusionResolver);
    this.sites = this.createHasManyRepositoryFactoryFor('sites', siteRepositoryGetter,);
    this.registerInclusionResolver('sites', this.sites.inclusionResolver);
    this.region = this.createBelongsToAccessorFor('region', departamentoRepositoryGetter,);
    this.registerInclusionResolver('region', this.region.inclusionResolver);
  }
}
