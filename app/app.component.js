(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'app',
      template: '<h1>RockHola</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
