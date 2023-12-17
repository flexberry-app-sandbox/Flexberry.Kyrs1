import { Serializer as Транзакция_Serializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs1-транзакция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Транзакция_Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
