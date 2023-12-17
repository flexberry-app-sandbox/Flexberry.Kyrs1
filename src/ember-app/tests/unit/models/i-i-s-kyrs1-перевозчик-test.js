import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs1-перевозчик', 'Unit | Model | i-i-s-kyrs1-перевозчик', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyrs1-билет-касса',
    'model:i-i-s-kyrs1-возврат-билета',
    'model:i-i-s-kyrs1-клиент',
    'model:i-i-s-kyrs1-перевозчик',
    'model:i-i-s-kyrs1-покупка-билета',
    'model:i-i-s-kyrs1-транзакция',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
