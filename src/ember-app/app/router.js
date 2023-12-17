import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kyrs1-билет-касса-l');
  this.route('i-i-s-kyrs1-билет-касса-e',
  { path: 'i-i-s-kyrs1-билет-касса-e/:id' });
  this.route('i-i-s-kyrs1-билет-касса-e.new',
  { path: 'i-i-s-kyrs1-билет-касса-e/new' });
  this.route('i-i-s-kyrs1-возврат-билета-l');
  this.route('i-i-s-kyrs1-возврат-билета-e',
  { path: 'i-i-s-kyrs1-возврат-билета-e/:id' });
  this.route('i-i-s-kyrs1-возврат-билета-e.new',
  { path: 'i-i-s-kyrs1-возврат-билета-e/new' });
  this.route('i-i-s-kyrs1-клиент-l');
  this.route('i-i-s-kyrs1-клиент-e',
  { path: 'i-i-s-kyrs1-клиент-e/:id' });
  this.route('i-i-s-kyrs1-клиент-e.new',
  { path: 'i-i-s-kyrs1-клиент-e/new' });
  this.route('i-i-s-kyrs1-перевозчик-l');
  this.route('i-i-s-kyrs1-перевозчик-e',
  { path: 'i-i-s-kyrs1-перевозчик-e/:id' });
  this.route('i-i-s-kyrs1-перевозчик-e.new',
  { path: 'i-i-s-kyrs1-перевозчик-e/new' });
  this.route('i-i-s-kyrs1-покупка-билета-l');
  this.route('i-i-s-kyrs1-покупка-билета-e',
  { path: 'i-i-s-kyrs1-покупка-билета-e/:id' });
  this.route('i-i-s-kyrs1-покупка-билета-e.new',
  { path: 'i-i-s-kyrs1-покупка-билета-e/new' });
  this.route('i-i-s-kyrs1-транзакция-l');
  this.route('i-i-s-kyrs1-транзакция-e',
  { path: 'i-i-s-kyrs1-транзакция-e/:id' });
  this.route('i-i-s-kyrs1-транзакция-e.new',
  { path: 'i-i-s-kyrs1-транзакция-e/new' });
});

export default Router;
