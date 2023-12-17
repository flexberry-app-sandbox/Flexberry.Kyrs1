import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKyrs1БилетКассаLForm from './forms/i-i-s-kyrs1-билет-касса-l';
import IISKyrs1ВозвратБилетаLForm from './forms/i-i-s-kyrs1-возврат-билета-l';
import IISKyrs1Клиент_LForm from './forms/i-i-s-kyrs1-клиент-l';
import IISKyrs1ПеревозчикLForm from './forms/i-i-s-kyrs1-перевозчик-l';
import IISKyrs1ПокупкаБилетаLForm from './forms/i-i-s-kyrs1-покупка-билета-l';
import IISKyrs1Транзакция_LForm from './forms/i-i-s-kyrs1-транзакция-l';
import IISKyrs1БилетКассаEForm from './forms/i-i-s-kyrs1-билет-касса-e';
import IISKyrs1ВозвратБилетаEForm from './forms/i-i-s-kyrs1-возврат-билета-e';
import IISKyrs1Клиент_EForm from './forms/i-i-s-kyrs1-клиент-e';
import IISKyrs1ПеревозчикEForm from './forms/i-i-s-kyrs1-перевозчик-e';
import IISKyrs1ПокупкаБилетаEForm from './forms/i-i-s-kyrs1-покупка-билета-e';
import IISKyrs1Транзакция_EForm from './forms/i-i-s-kyrs1-транзакция-e';
import IISKyrs1БилетКассаModel from './models/i-i-s-kyrs1-билет-касса';
import IISKyrs1ВозвратБилетаModel from './models/i-i-s-kyrs1-возврат-билета';
import IISKyrs1Клиент_Model from './models/i-i-s-kyrs1-клиент';
import IISKyrs1ПеревозчикModel from './models/i-i-s-kyrs1-перевозчик';
import IISKyrs1ПокупкаБилетаModel from './models/i-i-s-kyrs1-покупка-билета';
import IISKyrs1Транзакция_Model from './models/i-i-s-kyrs1-транзакция';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrs1-билет-касса': IISKyrs1БилетКассаModel,
    'i-i-s-kyrs1-возврат-билета': IISKyrs1ВозвратБилетаModel,
    'i-i-s-kyrs1-клиент': IISKyrs1Клиент_Model,
    'i-i-s-kyrs1-перевозчик': IISKyrs1ПеревозчикModel,
    'i-i-s-kyrs1-покупка-билета': IISKyrs1ПокупкаБилетаModel,
    'i-i-s-kyrs1-транзакция': IISKyrs1Транзакция_Model
  },

  'application-name': 'Kyrs1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kyrs1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrs1',
          title: 'Kyrs1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kyrs1: {
          caption: 'Kyrs1',
          title: 'Kyrs1',
          'i-i-s-kyrs1-билет-касса-l': {
            caption: 'Билет касса',
            title: ''
          },
          'i-i-s-kyrs1-клиент-l': {
            caption: 'Клиент_',
            title: ''
          },
          'i-i-s-kyrs1-возврат-билета-l': {
            caption: 'Возврат билета',
            title: ''
          },
          'i-i-s-kyrs1-транзакция-l': {
            caption: 'Транзакция_',
            title: ''
          },
          'i-i-s-kyrs1-покупка-билета-l': {
            caption: 'Покупка билета',
            title: ''
          },
          'i-i-s-kyrs1-перевозчик-l': {
            caption: 'Перевозчик',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kyrs1-билет-касса-l': IISKyrs1БилетКассаLForm,
    'i-i-s-kyrs1-возврат-билета-l': IISKyrs1ВозвратБилетаLForm,
    'i-i-s-kyrs1-клиент-l': IISKyrs1Клиент_LForm,
    'i-i-s-kyrs1-перевозчик-l': IISKyrs1ПеревозчикLForm,
    'i-i-s-kyrs1-покупка-билета-l': IISKyrs1ПокупкаБилетаLForm,
    'i-i-s-kyrs1-транзакция-l': IISKyrs1Транзакция_LForm,
    'i-i-s-kyrs1-билет-касса-e': IISKyrs1БилетКассаEForm,
    'i-i-s-kyrs1-возврат-билета-e': IISKyrs1ВозвратБилетаEForm,
    'i-i-s-kyrs1-клиент-e': IISKyrs1Клиент_EForm,
    'i-i-s-kyrs1-перевозчик-e': IISKyrs1ПеревозчикEForm,
    'i-i-s-kyrs1-покупка-билета-e': IISKyrs1ПокупкаБилетаEForm,
    'i-i-s-kyrs1-транзакция-e': IISKyrs1Транзакция_EForm
  },

});

export default translations;
