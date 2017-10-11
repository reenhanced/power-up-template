/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var prefixSelector = document.getElementById('prefix');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'prefix', '#'),
  ])
  .spread(function(savedPrefix){
    prefixSelector.value = savedPrefix;
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'shared', 'prefix', prefixSelector.value)
  .then(function(){
    t.closePopup();
  })
})