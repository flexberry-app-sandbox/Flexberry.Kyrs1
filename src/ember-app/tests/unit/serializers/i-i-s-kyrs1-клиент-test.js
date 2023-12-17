import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs1-клиент', 'Unit | Serializer | i-i-s-kyrs1-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrs1-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
