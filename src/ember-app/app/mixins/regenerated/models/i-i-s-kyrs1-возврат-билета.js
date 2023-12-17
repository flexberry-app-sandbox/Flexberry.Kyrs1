import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВозврата: DS.attr('date', { defaultValue() { return new Date(); } }),
  покупкаБилета: DS.belongsTo('i-i-s-kyrs1-покупка-билета', { inverse: null, async: false })
});

export let ValidationRules = {
  датаВозврата: {
    descriptionKey: 'models.i-i-s-kyrs1-возврат-билета.validations.датаВозврата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  покупкаБилета: {
    descriptionKey: 'models.i-i-s-kyrs1-возврат-билета.validations.покупкаБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВозвратБилетаE', 'i-i-s-kyrs1-возврат-билета', {
    датаВозврата: attr('Дата возврата', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs1-покупка-билета', 'Покупка билета', {
      пунктОтпр: attr('Пункт отпр', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'пунктОтпр' })
  });

  modelClass.defineProjection('ВозвратБилетаL', 'i-i-s-kyrs1-возврат-билета', {
    датаВозврата: attr('Дата возврата', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs1-покупка-билета', 'Пункт отпр', {
      пунктОтпр: attr('Пункт отпр', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
