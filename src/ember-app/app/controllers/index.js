import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kyrs1.caption'),
          title: i18n.t('forms.application.sitemap.kyrs1.title'),
          children: [{
            link: 'i-i-s-kyrs1-билет-касса-l',
            caption: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-билет-касса-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-билет-касса-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kyrs1-клиент-l',
            caption: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-клиент-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kyrs1-возврат-билета-l',
            caption: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-возврат-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-возврат-билета-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kyrs1-транзакция-l',
            caption: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-транзакция-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kyrs1-покупка-билета-l',
            caption: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-покупка-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-покупка-билета-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kyrs1-перевозчик-l',
            caption: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-перевозчик-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs1.i-i-s-kyrs1-перевозчик-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})