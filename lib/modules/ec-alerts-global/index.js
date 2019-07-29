module.exports = {
  improve: 'apostrophe-global',
      permission: 'admin',
  construct: function(self, options) {
    options.addFields = (options.addFields || []).concat([
       {
        name: 'alertLevel',
        type: 'select',
        label: 'Alert Level',
        help: 'Level 1 (Most Urgent) Level 2 (Weather) Level 3 (Important Announcement)',
        choices: [
          {
            label: 'Level 1',
            value: 'level1',
            showFields: [
              'level1color'
            ]
          },
          {
            label: 'Level 2',
            value: 'level2',
            showFields: [
              'level2color'
            ]
          },
          {
            label: 'Level 3',
            value: 'level3',
            showFields: [
              'level3color'
            ]
          }
        ],
        def: 'level3',
        required: true,
        permissionsFields: true
      },
      {
        type: 'singleton',
        name: 'ecAlerts',
        widgetType: 'ec-alerts',
        contextual: true,
        options: {
          limit: 1,
          edit: false,
          currentPage: null
        }
      },
      {
        type: 'boolean',
        name: 'alertDisplay',
        label: 'Display Alert',
        choices: [
          {
            label: 'Every Page',
            value: true
          },
          {
            label: 'Homepage Only',
            value: 'homepage'
          },
          {
            label: 'No',
            value: false
          }
        ]
      },
      {
        name: '_alerts',
        label: 'Selected Alerts',
        type: 'joinByArray',
        withType: 'ec-alerts',
        titleField: 'alert',
        filter: {
          projection: {
            alertTitle: 1,
            alertIcon: 1,
            alertContent: 1,
            startDate: 1,
            upcoming: 1
          }
        }
      },
      {
        type: 'string',
        textarea: false,
        name: 'alertTitle',
        label: 'Title'
      }
    ]);
    options.arrangeFields = (options.arrangeFields || []).concat([
      {
        name: 'alerts',
        label: 'Alerts',
        fields: [ 'alertDisplay','alertTitle','alertLevel','_alerts', 'permissionsFields' ],
        last: true
      }
    ]);
  }
};