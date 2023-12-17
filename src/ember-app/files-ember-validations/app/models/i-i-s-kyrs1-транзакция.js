import {
  defineNamespace,
  defineProjections,
  Model as Транзакция_Mixin
} from '../mixins/regenerated/models/i-i-s-kyrs1-транзакция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Транзакция_Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
