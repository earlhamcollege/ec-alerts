# ec-alerts

#Installation


Place this code in your layout.html file where you'd like the alerts to be displayed.
```
 {{ apos.singleton(data.global, 'ecAlerts', 'ec-alerts', {currentPage: data.page._url, edit: false}) }}
```