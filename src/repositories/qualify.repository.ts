import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Qualify, QualifyRelations} from '../models';

export class QualifyRepository extends DefaultCrudRepository<
  Qualify,
  typeof Qualify.prototype.id,
  QualifyRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Qualify, dataSource);
  }
}
