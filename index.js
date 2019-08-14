module.exports = {
  name: 'ec-alerts',
  alias: 'ec-alerts',
  moogBundle: {
    modules: ['ec-alerts-global', 'ec-alerts-piece', 'ec-alerts-widgets'],
    directory: 'lib/modules'
  },
  construct: function(self, options) {
    self.play = function($widget, data, options) {};
    
  }
};
