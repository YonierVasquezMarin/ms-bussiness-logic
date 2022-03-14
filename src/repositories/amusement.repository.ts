import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Amusement, AmusementRelations} from '../models';

export class AmusementRepository extends DefaultCrudRepository<
  Amusement,
  typeof Amusement.prototype.id,
  AmusementRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Amusement, dataSource);
  }
}
