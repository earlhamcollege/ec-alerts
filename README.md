# ec-alerts

##Features

This module adds a site-wide alert at the top of the website. Select the Alert Level 1,2,3 and then select several alerts that can be published. Upto 3 alerts can be shown in the expanded alert window at a time.

##Installation


Place this code in your layout.html file where you'd like the alerts to be displayed.
```
 {{ apos.singleton(data.global, 'ecAlerts', 'ec-alerts', {currentPage: data.page._url, edit: false}) }}
```