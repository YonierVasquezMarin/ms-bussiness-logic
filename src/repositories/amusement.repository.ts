import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AccessType, Amusement, AmusementImage, AmusementRelations, AmusementType, Site} from '../models';
import {AccessTypeRepository} from './access-type.repository';
import {AmusementImageRepository} from './amusement-image.repository';
import {AmusementTypeRepository} from './amusement-type.repository';
import {SiteRepository} from './site.repository';

export class AmusementRepository extends DefaultCrudRepository<
  Amusement,
  typeof Amusement.prototype.id,
  AmusementRelations
> {

  public readonly accessType: BelongsToAccessor<AccessType, typeof Amusement.prototype.id>;

  public readonly site: BelongsToAccessor<Site, typeof Amusement.prototype.id>;

  public readonly amusementImages: HasManyRepositoryFactory<AmusementImage, typeof Amusement.prototype.id>;

  public readonly amusementType: BelongsToAccessor<AmusementType, typeof Amusement.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('AccessTypeRepository') protected accessTypeRepositoryGetter: Getter<AccessTypeRepository>, @repository.getter('SiteRepository') protected siteRepositoryGetter: Getter<SiteRepository>, @repository.getter('AmusementImageRepository') protected amusementImageRepositoryGetter: Getter<AmusementImageRepository>, @repository.getter('AmusementTypeRepository') protected amusementTypeRepositoryGetter: Getter<AmusementTypeRepository>,
  ) {
    super(Amusement, dataSource);
    this.amusementType = this.createBelongsToAccessorFor('amusementType', amusementTypeRepositoryGetter,);
    this.registerInclusionResolver('amusementType', this.amusementType.inclusionResolver);
    this.amusementImages = this.createHasManyRepositoryFactoryFor('amusementImages', amusementImageRepositoryGetter,);
    this.registerInclusionResolver('amusementImages', this.amusementImages.inclusionResolver);
    this.site = this.createBelongsToAccessorFor('site', siteRepositoryGetter,);
    this.registerInclusionResolver('site', this.site.inclusionResolver);
  }
}
