import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Visitor, VisitorRelations} from '../models';

export class VisitorRepository extends DefaultCrudRepository<
  Visitor,
  typeof Visitor.prototype.id,
  VisitorRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Visitor, dataSource);
  }
}
