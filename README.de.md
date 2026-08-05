# AvalynxAlert

[![npm version](https://jbs-newmedia.de/badge/npm/avalynx-alert/version.svg)](https://www.npmjs.com/package/avalynx-alert)
[![npm downloads](https://jbs-newmedia.de/badge/npm/avalynx-alert/download.svg)](https://www.npmjs.com/package/avalynx-alert)
[![jsDelivr](https://jbs-newmedia.de/badge/jsdelivr/avalynx-alert/hits.svg)](https://www.jsdelivr.com/package/npm/avalynx-alert)
[![License](https://jbs-newmedia.de/badge/npm/avalynx-alert/license.svg)](LICENSE)
[![Tests](https://jbs-newmedia.de/badge/github/avalynx/avalynx-alert/tests.svg)](https://github.com/avalynx/avalynx-alert/actions/workflows/tests.yml)
[![codecov](https://jbs-newmedia.de/badge/codecov/avalynx/avalynx-alert/coverage.svg)](https://codecov.io/gh/avalynx/avalynx-alert)
[![GitHub stars](https://jbs-newmedia.de/badge/github/avalynx/avalynx-alert/stars.svg)](https://github.com/avalynx/avalynx-alert)

AvalynxAlert ist ein leichtgewichtiges, eigenständiges Benachrichtigungssystem für Web-Anwendungen. Es nutzt Bootstrap (ab Version 5.3) und bietet anpassbare Alerts, die flexibel auf dem Bildschirm positioniert werden können.

## Funktionen

- **Verschiedene Alert-Typen**: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
- **Flexible Positionierung**: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.
- **Steuerbare Dauer**: Anzeigezeit in Millisekunden konfigurierbar.
- **Schließbar**: Optional kann ein Schließen-Button angezeigt werden.
- **Automatisches Schließen**: Alerts können nach Ablauf der Dauer automatisch ausgeblendet werden.
- **Einfache API**: Schlanke Verwendung ohne Framework-Abhängigkeiten.

## Beispiele

Hier ist ein einfaches Beispiel für die Verwendung von AvalynxAlert in Ihrem Projekt:

* [Übersicht](https://avalynx-alert.jbs-newmedia.de/examples/index.html)
* [Einfacher Alert](https://avalynx-alert.jbs-newmedia.de/examples/simple-alert.html)
* [Zufällige Alerts](https://avalynx-alert.jbs-newmedia.de/examples/random-alerts.html)
* [Callback bei Schließen](https://avalynx-alert.jbs-newmedia.de/examples/callback-onclose.html)
* [Zufällige Alerts alle 3 Sekunden](https://avalynx-alert.jbs-newmedia.de/examples/random-alerts-every-3s.html)

## Installation

Um AvalynxAlert in Ihrem Projekt zu verwenden, können Sie es direkt in Ihre HTML-Datei einbinden. Stellen Sie sicher, dass Bootstrap 5.3 oder höher in Ihrem Projekt enthalten ist, damit AvalynxAlert korrekt funktioniert.

Zuerst Bootstrap einbinden:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

Dann AvalynxAlert einbinden:

```html
<link href="pfad/zu/avalynx-alert.css" rel="stylesheet">
<script src="pfad/zu/avalynx-alert.js"></script>
```

Ersetzen Sie `pfad/zu/avalynx-alert.*` durch den tatsächlichen Pfad zu den Dateien in Ihrem Projekt.

## Installation über jsDelivr ([Link](https://cdn.jsdelivr.net/npm/avalynx-alert/))

AvalynxAlert ist auch über [jsDelivr](https://www.jsdelivr.com/) verfügbar. Sie können es wie folgt in Ihr Projekt einbinden:

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-alert@1.0.6/dist/css/avalynx-alert.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-alert@1.0.6/dist/js/avalynx-alert.js"></script>
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxAlert zu gewährleisten.

## Installation über NPM ([Link](https://www.npmjs.com/package/avalynx-alert))

AvalynxAlert ist auch als NPM-Paket verfügbar. Sie können es mit dem folgenden Befehl zu Ihrem Projekt hinzufügen:

```bash
npm install avalynx-alert
```

Nach der Installation können Sie AvalynxAlert wie folgt in Ihre JavaScript-Datei importieren:

```javascript
import { AvalynxAlert } from 'avalynx-alert';
import 'avalynx-alert/dist/css/avalynx-alert.css';
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxAlert zu gewährleisten.

## Installation über Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-alert
```

Nach der Installation können Sie AvalynxAlert wie folgt in Ihre JavaScript-Datei importieren:

```javascript
import { AvalynxAlert } from 'avalynx-alert';
import 'avalynx-alert/dist/css/avalynx-alert.css';
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxAlert zu gewährleisten.

## Installation über Symfony AssetComposer

Weitere Informationen zum Symfony AssetComposer Bundle finden Sie [hier](https://github.com/jbsnewmedia/asset-composer-bundle).

```twig
{% do addAssetComposer('avalynx/avalynx-alert/dist/css/avalynx-alert.css') %}
{% do addAssetComposer('avalynx/avalynx-alert/dist/js/avalynx-alert.js') %}
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxAlert zu gewährleisten.

## Installation über Composer ([Link](https://packagist.org/packages/avalynx/avalynx-alert))

AvalynxAlert ist auch als Composer-Paket verfügbar. Sie können es mit dem folgenden Befehl zu Ihrem Projekt hinzufügen:

```bash
composer require avalynx/avalynx-alert
```

Nach der Installation können Sie AvalynxAlert wie folgt in Ihre HTML-Datei einbinden:

```html
<link href="vendor/avalynx/avalynx-alert/dist/css/avalynx-alert.css" rel="stylesheet">
<script src="vendor/avalynx/avalynx-alert/dist/js/avalynx-alert.js"></script>
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxAlert zu gewährleisten.

## Verwendung

Einen Alert erzeugen Sie, indem Sie ein neues `AvalynxAlert`-Objekt mit den gewünschten Optionen instanziieren:

```javascript
new AvalynxAlert('Ihre Nachricht', 'success', {
  duration: 5000,
  position: 'top-right',
  closeable: true,
  autoClose: true,
  width: '400px'
});
```

## Optionen

AvalynxAlert ermöglicht die folgenden Optionen zur Anpassung:

- `message`: (string) Die anzuzeigende Nachricht (Standard: `''`).
- `type`: (string) Der Typ des Alerts. Einer von (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`) (Standard: `'info'`).
- `options`: Ein Objekt, das die folgenden Schlüssel enthält:
    - `duration`: (number) Anzeigezeit in Millisekunden (Standard: `5000`).
    - `position`: (string) Position des Alerts auf dem Bildschirm. Einer von `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` (Standard: `'top-center'`).
    - `closeable`: (boolean) Ob der Nutzer den Alert schließen kann (Standard: `true`).
    - `autoClose`: (boolean) Ob der Alert nach Ablauf automatisch geschlossen wird (Standard: `true`).
    - `width`: (string) Breite des Alerts (Standard: `'400px'`).
    - `onClose`: (function) Eine Callback-Funktion, die beim Schließen ausgeführt wird (Standard: `null`).

## Beitragen

Beiträge sind willkommen! Wenn Sie etwas beitragen möchten, forken Sie bitte das Repository und senden Sie einen Pull-Request mit Ihren Änderungen oder Verbesserungen. Wir suchen Beiträge in den folgenden Bereichen:

- Fehlerbehebungen (Bug fixes)
- Funktionserweiterungen
- Dokumentationsverbesserungen

Bevor Sie Ihren Pull-Request einreichen, stellen Sie bitte sicher, dass Ihre Änderungen gut dokumentiert sind und dem bestehenden Codestil des Projekts entsprechen.

## Lizenz

AvalynxAlert ist quelloffene Software, die unter der [MIT-Lizenz](LICENSE) lizenziert ist.

## Kontakt

Wenn Sie Fragen, Funktionswünsche oder Probleme haben, eröffnen Sie bitte ein Issue in unserem [GitHub-Repository](https://github.com/avalynx/avalynx-alert/issues) oder reichen Sie einen Pull-Request ein.

Vielen Dank, dass Sie AvalynxAlert für Ihr Projekt in Betracht ziehen!