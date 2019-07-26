  module.exports = {
  	name: 'ec-alerts',
  	label: 'EC Alerts',     
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
    	var superPushAssets = self.pushAssets;
    	self.pushAssets = function() {
      		superPushAssets();
      		//self.pushAsset('stylesheet', 'alert', { when: 'always' });
    	};
    }
 };