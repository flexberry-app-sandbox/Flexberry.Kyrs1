import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  возвратБилета: DS.belongsTo('i-i-s-kyrs1-возврат-билета', { inverse: null, async: false }),
  клиент_: DS.belongsTo('i-i-s-kyrs1-клиент', { inverse: null, async: false }),
  покупкаБилета: DS.belongsTo('i-i-s-kyrs1-покупка-билета', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kyrs1-транзакция.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  возвратБилета: {
    descriptionKey: 'models.i-i-s-kyrs1-транзакция.validations.возвратБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент_: {
    descriptionKey: 'models.i-i-s-kyrs1-транзакция.validations.клиент_.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупкаБилета: {
    descriptionKey: 'models.i-i-s-kyrs1-транзакция.validations.покупкаБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Транзакция_E', 'i-i-s-kyrs1-транзакция', {
    номер: attr('Номер', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs1-покупка-билета', 'Покупка билета', {
      пунктОтпр: attr('Пункт отпр', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'пунктОтпр' }),
    клиент_: belongsTo('i-i-s-kyrs1-клиент', 'Клиент_', {
      банкСчет: attr('Банк счет', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'банкСчет' }),
    возвратБилета: belongsTo('i-i-s-kyrs1-возврат-билета', 'Возврат билета', {
      датаВозврата: attr('Дата возврата', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'датаВозврата' })
  });

  modelClass.defineProjection('Транзакция_L', 'i-i-s-kyrs1-транзакция', {
    номер: attr('Номер', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs1-покупка-билета', 'Пункт отпр', {
      пунктОтпр: attr('Пункт отпр', { index: 1 })
    }, { index: -1, hidden: true }),
    клиент_: belongsTo('i-i-s-kyrs1-клиент', 'Банк счет', {
      банкСчет: attr('Банк счет', { index: 2 })
    }, { index: -1, hidden: true }),
    возвратБилета: belongsTo('i-i-s-kyrs1-возврат-билета', 'Дата возврата', {
      датаВозврата: attr('Дата возврата', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
