import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kyrs1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrs1',
          title: 'Kyrs1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
