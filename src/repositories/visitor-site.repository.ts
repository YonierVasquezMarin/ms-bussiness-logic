import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {VisitorSite, VisitorSiteRelations} from '../models';

export class VisitorSiteRepository extends DefaultCrudRepository<
  VisitorSite,
  typeof VisitorSite.prototype.id,
  VisitorSiteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(VisitorSite, dataSource);
  }
}
