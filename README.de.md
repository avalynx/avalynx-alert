# AvalynxAlert

[![npm Version](https://img.shields.io/npm/v/avalynx-alert)](https://www.npmjs.com/package/avalynx-alert)
[![npm Downloads](https://img.shields.io/npm/dt/avalynx-alert)](https://www.npmjs.com/package/avalynx-alert)
[![jsDelivr](https://img.shields.io/jsdelivr/npm/hm/avalynx-alert)](https://www.jsdelivr.com/package/npm/avalynx-alert)
[![Lizenz](https://img.shields.io/npm/l/avalynx-alert)](LICENSE)
[![Tests](https://github.com/avalynx/avalynx-alert/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/avalynx/avalynx-alert/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/avalynx/avalynx-alert/branch/main/graph/badge.svg)](https://codecov.io/gh/avalynx/avalynx-alert)
[![GitHub stars](https://img.shields.io/github/stars/avalynx/avalynx-alert?style=flat&logo=github)](https://github.com/avalynx/avalynx-alert)

AvalynxAlert ist ein leichtgewichtiges, eigenständiges Benachrichtigungssystem für Web‑Anwendungen. Es nutzt Bootstrap (ab Version 5.3) und bietet anpassbare Alerts, die flexibel auf dem Bildschirm positioniert werden können.

## Funktionen

- Verschiedene Alert‑Typen: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
- Flexible Positionierung: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.
- Steuerbare Dauer: Anzeigezeit in Millisekunden konfigurierbar.
- Schließbar: Optional kann ein Schließen‑Button angezeigt werden.
- Automatisches Schließen: Alerts können nach Ablauf der Dauer automatisch ausgeblendet werden.
- Einfache API: Schlanke Verwendung ohne Framework‑Abhängigkeiten.

## Beispiele

- Übersicht: https://avalynx-alert.jbs-newmedia.de/examples/index.html
- Einfacher Alert: https://avalynx-alert.jbs-newmedia.de/examples/simple-alert.html
- Zufällige Alerts: https://avalynx-alert.jbs-newmedia.de/examples/random-alerts.html
- Callback bei Schließen: https://avalynx-alert.jbs-newmedia.de/examples/callback-onclose.html
- Zufällige Alerts alle 3 Sekunden: https://avalynx-alert.jbs-newmedia.de/examples/random-alerts-every-3s.html

## Einbindung (direkt im HTML)

Stellen Sie sicher, dass Bootstrap 5.3 (oder neuer) eingebunden ist.

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- AvalynxAlert -->
<link href="path/to/avalynx-alert.css" rel="stylesheet">
<script src="path/to/avalynx-alert.js"></script>
```

Ersetzen Sie `path/to/avalynx-alert.*` durch die tatsächlichen Pfade in Ihrem Projekt.

## Einbindung via jsDelivr (CDN)

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-alert@1.0.5/dist/css/avalynx-alert.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-alert@1.0.5/dist/js/avalynx-alert.js"></script>
```

Bootstrap JS/CSS muss zusätzlich geladen werden.

## Installation via NPM (https://www.npmjs.com/package/avalynx-alert)

```bash
npm install avalynx-alert
```

Danach in JavaScript importieren:

```javascript
import { AvalynxAlert } from 'avalynx-alert';
import 'avalynx-alert/dist/css/avalynx-alert.css';
```

Bootstrap JS/CSS muss zusätzlich geladen werden.

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-alert
```

Danach in JavaScript importieren:

```javascript
import { AvalynxAlert } from 'avalynx-alert';
import 'avalynx-alert/dist/css/avalynx-alert.css';
```

Bootstrap JS/CSS muss zusätzlich geladen werden.

## Installation via Symfony AssetComposer

Weitere Informationen: https://github.com/jbsnewmedia/asset-composer-bundle

```twig
{% do addAssetComposer('avalynx/avalynx-alert/dist/css/avalynx-alert.css') %}
{% do addAssetComposer('avalynx/avalynx-alert/dist/js/avalynx-alert.js') %}
```

Bootstrap JS/CSS muss zusätzlich geladen werden.

## Installation via Composer (PHP) (https://packagist.org/packages/avalynx/avalynx-alert)

```bash
composer require avalynx/avalynx-alert
```

Einbindung in HTML:

```html
<link href="vendor/avalynx/avalynx-alert/dist/css/avalynx-alert.css" rel="stylesheet">
<script src="vendor/avalynx/avalynx-alert/dist/js/avalynx-alert.js"></script>
```

Bootstrap JS/CSS muss zusätzlich geladen werden.

## Verwendung

Einen Alert erzeugen Sie so:

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

- `message` (string): Anzuzeigende Nachricht (Standard: `''`).
- `type` (string): Einer von `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` (Standard: `info`).
- `options` (object):
  - `duration` (number): Anzeigezeit in Millisekunden (Standard: `5000`).
  - `position` (string): `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` (Standard: `top-center`).
  - `closeable` (boolean): Ob der Nutzer den Alert schließen kann (Standard: `true`).
  - `autoClose` (boolean): Ob der Alert nach Ablauf automatisch geschlossen wird (Standard: `true`).
  - `width` (string): Breite des Alerts (Standard: `400px`).
  - `onClose` (function): Callback, das beim Schließen ausgeführt wird (Standard: `null`).

## Mitwirken

Beiträge sind willkommen! Bitte erstellen Sie einen Fork und senden Sie einen Pull Request. Achten Sie dabei auf konsistenten Code‑Stil und ausreichende Dokumentation.

## Lizenz

AvalynxAlert steht unter der [MIT‑Lizenz](LICENSE).

## Kontakt

Fragen, Feature‑Wünsche oder Probleme? Bitte ein Issue im [GitHub‑Repository](https://github.com/avalynx/avalynx-alert/issues) eröffnen oder einen Pull Request stellen.
