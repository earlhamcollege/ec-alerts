module.exports = {
  name: 'ec-alerts-module',
  alias: 'ec-alerts-module',
  moogBundle: {
    modules: ['ec-alerts-global', 'alerts', 'ec-alerts-widgets'],
    directory: 'lib/modules'
  },
  construct: function(self, options) {
    self.play = function($widget, data, options) {};
    
  }
};
