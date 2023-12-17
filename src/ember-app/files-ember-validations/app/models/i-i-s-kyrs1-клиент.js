import {
  defineNamespace,
  defineProjections,
  Model as Клиент_Mixin
} from '../mixins/regenerated/models/i-i-s-kyrs1-клиент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Клиент_Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
