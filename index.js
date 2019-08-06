module.exports = {
  name: 'ec-alerts',
  alias: 'ec-alerts',
  moogBundle: {
    modules: ['ec-alerts-global', 'ec-alerts', 'ec-alerts-widgets'],
    directory: './lib/'
  },

  construct: function(self, options) {
    self.play = function($widget, data, options) {};
    
  }

};
