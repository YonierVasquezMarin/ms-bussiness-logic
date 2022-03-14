import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AmusementImage, AmusementImageRelations} from '../models';

export class AmusementImageRepository extends DefaultCrudRepository<
  AmusementImage,
  typeof AmusementImage.prototype.id,
  AmusementImageRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(AmusementImage, dataSource);
  }
}
