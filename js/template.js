/* global TrelloPowerUp */

var getBadges = function(t){
  return t.card('idShort')
  .get('idShort')
  .then(function(idShort){
    return [{
      title: 'Card Number', // for detail badges only
      text: '#' + idShort
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
});
