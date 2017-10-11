/* global TrelloPowerUp */

var getIdBadge = function(t){
  return Promise.all([
    t.get('board', 'shared', 'prefix', '#'),
    t.card('idShort').get('idShort')
  ])
  .then(function([prefix, idShort]){
    return [{
      title: 'Card Number', // for detail badges only
      text: prefix + idShort
    }];
  })
};

TrelloPowerUp.initialize({
  'card-badges': function(t, options){
    return getIdBadge(t);
  },
  'card-detail-badges': function(t, options) {
    return getIdBadge(t);
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
