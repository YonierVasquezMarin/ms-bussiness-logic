import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AccessType, AccessTypeRelations} from '../models';

export class AccessTypeRepository extends DefaultCrudRepository<
  AccessType,
  typeof AccessType.prototype.id,
  AccessTypeRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(AccessType, dataSource);
  }
}
