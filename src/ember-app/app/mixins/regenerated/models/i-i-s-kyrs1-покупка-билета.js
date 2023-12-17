import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПокупки: DS.attr('string'),
  датаПоездки: DS.attr('date'),
  датаПокупки: DS.attr('date', { defaultValue() { return new Date(); } }),
  место: DS.attr('number'),
  пунктНазнач: DS.attr('string'),
  пунктОтпр: DS.attr('string'),
  билетКасса: DS.belongsTo('i-i-s-kyrs1-билет-касса', { inverse: null, async: false }),
  клиент_: DS.belongsTo('i-i-s-kyrs1-клиент', { inverse: null, async: false }),
  перевозчик: DS.belongsTo('i-i-s-kyrs1-перевозчик', { inverse: null, async: false })
});

export let ValidationRules = {
  времяПокупки: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.времяПокупки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПоездки: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.датаПоездки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаПокупки: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.датаПокупки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.место.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пунктНазнач: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.пунктНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктОтпр: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.пунктОтпр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  билетКасса: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.билетКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент_: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.клиент_.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  перевозчик: {
    descriptionKey: 'models.i-i-s-kyrs1-покупка-билета.validations.перевозчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаБилетаE', 'i-i-s-kyrs1-покупка-билета', {
    датаПоездки: attr('Дата поездки', { index: 0 }),
    датаПокупки: attr('Дата покупки', { index: 1 }),
    место: attr('Место', { index: 2 }),
    пунктОтпр: attr('Пункт отпр', { index: 3 }),
    пунктНазнач: attr('Пункт назнач', { index: 4 }),
    времяПокупки: attr('Время покупки', { index: 5 }),
    билетКасса: belongsTo('i-i-s-kyrs1-билет-касса', 'Билет касса', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    перевозчик: belongsTo('i-i-s-kyrs1-перевозчик', 'Перевозчик', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' }),
    клиент_: belongsTo('i-i-s-kyrs1-клиент', 'Клиент_', {
      банкСчет: attr('Банк счет', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'банкСчет' })
  });

  modelClass.defineProjection('ПокупкаБилетаL', 'i-i-s-kyrs1-покупка-билета', {
    датаПоездки: attr('Дата поездки', { index: 0 }),
    датаПокупки: attr('Дата покупки', { index: 1 }),
    место: attr('Место', { index: 2 }),
    пунктОтпр: attr('Пункт отпр', { index: 3 }),
    пунктНазнач: attr('Пункт назнач', { index: 4 }),
    времяПокупки: attr('Время покупки', { index: 5 }),
    билетКасса: belongsTo('i-i-s-kyrs1-билет-касса', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true }),
    перевозчик: belongsTo('i-i-s-kyrs1-перевозчик', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    клиент_: belongsTo('i-i-s-kyrs1-клиент', 'Банк счет', {
      банкСчет: attr('Банк счет', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
