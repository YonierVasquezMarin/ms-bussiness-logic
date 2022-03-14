import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Amusement, AmusementRelations, AccessType, Site, AmusementImage} from '../models';
import {AccessTypeRepository} from './access-type.repository';
import {SiteRepository} from './site.repository';
import {AmusementImageRepository} from './amusement-image.repository';

export class AmusementRepository extends DefaultCrudRepository<
  Amusement,
  typeof Amusement.prototype.id,
  AmusementRelations
> {

  public readonly accessType: BelongsToAccessor<AccessType, typeof Amusement.prototype.id>;

  public readonly site: BelongsToAccessor<Site, typeof Amusement.prototype.id>;

  public readonly amusementImages: HasManyRepositoryFactory<AmusementImage, typeof Amusement.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('AccessTypeRepository') protected accessTypeRepositoryGetter: Getter<AccessTypeRepository>, @repository.getter('SiteRepository') protected siteRepositoryGetter: Getter<SiteRepository>, @repository.getter('AmusementImageRepository') protected amusementImageRepositoryGetter: Getter<AmusementImageRepository>,
  ) {
    super(Amusement, dataSource);
    this.amusementImages = this.createHasManyRepositoryFactoryFor('amusementImages', amusementImageRepositoryGetter,);
    this.registerInclusionResolver('amusementImages', this.amusementImages.inclusionResolver);
    this.site = this.createBelongsToAccessorFor('site', siteRepositoryGetter,);
    this.registerInclusionResolver('site', this.site.inclusionResolver);
    this.accessType = this.createBelongsToAccessorFor('accessType', accessTypeRepositoryGetter,);
    this.registerInclusionResolver('accessType', this.accessType.inclusionResolver);
  }
}
