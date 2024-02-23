# AvalynxAlert

AvalynxAlert is a lightweight, dependency-free alert system designed for web applications. It leverages Bootstrap (version 5.3 or higher) to provide a seamless integration with your project, offering a range of customizable alerts that can be positioned anywhere on the screen.

## Features

- **Customizable Alerts**: Supports various alert types like primary, secondary, success, danger, warning, info, light, and dark.
- **Flexible Positioning**: Choose from predefined positions such as top-left, top-center, top-right, bottom-left, bottom-center, and bottom-right.
- **Duration Control**: Set the duration for how long the alert should be displayed.
- **Closeable Alerts**: Optionally allow users to close alerts.
- **AutoClose Functionality**: Alerts can automatically disappear after a certain period.
- **Easy to Use**: Simple API for creating and managing alerts within your web applications.

## Example

Here's a simple example of how to use AvalynxAlert in your project:

* [Overview](https://avalynx-alert.jbs-newmedia.de/examples/index.html)
* [Random alerts](https://avalynx-alert.jbs-newmedia.de/examples/random-alerts.html)
* [Callback on close](https://avalynx-alert.jbs-newmedia.de/examples/callback-onclose.html)
* [Random alerts every 3 seconds](https://avalynx-alert.jbs-newmedia.de/examples/random-alerts-every-3s.html)

## Installation

To use AvalynxAlert in your project, you can directly include it in your HTML file. Ensure you have Bootstrap 5.3 or higher included in your project for AvalynxAlert to work correctly.

First, include Bootstrap:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

Then, include AvalynxAlert:

```html
<link href="path/to/avalynx-alert.css" rel="stylesheet">
<script src="path/to/avalynx-alert.js"></script>
```

Replace `path/to/avalynx-alert.js` and `path/to/avalynx-alert.css` with the actual path to the files in your project.

## Installation via jsDelivr

AvalynxAlert is also available via [jsDelivr](https://www.jsdelivr.com/). You can include it in your project like this:

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-alert/dist/avalynx-alert.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-alert/dist/avalynx-alert.js"></script>
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxAlert displays correctly.

## Installation via NPM

AvalynxAlert is also available as a npm package. You can add it to your project with the following command:

```bash
npm install avalynx-alert
```

After installing, you can import AvalynxAlert into your JavaScript file like this:

```javascript
import { AvalynxAlert } from 'avalynx-alert';
import 'avalynx-alert/dist/css/avalynx-alert.min.css';
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxAlert displays correctly.

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-alert
```

After installing, you can import AvalynxAlert into your JavaScript file like this:

```javascript
import { AvalynxAlert } from 'avalynx-alert';
import 'avalynx-alert/dist/css/avalynx-alert.min.css';
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxAlert displays correctly.

## Usage

To create an alert, simply instantiate a new `AvalynxAlert` object with the desired options:

```javascript
new AvalynxAlert('Your message here', 'success', {
  duration: 5000,
  position: 'top-right',
  closeable: true,
  autoClose: true,
  width: '400px'
});
```

## Options

AvalynxAlert allows the following options for customization:

- `message`: The message to display in the alert.
- `type`: The type of alert (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`).
- `options`: An object containing the following keys:
    - `duration`: Duration in milliseconds for the alert to be displayed (default: 5000).
    - `position`: Position of the alert on the screen (default: `top-center`).
    - `closeable`: Whether the alert can be closed by the user (default: true).
    - `autoClose`: Whether the alert will close automatically after the duration (default: true).
    - `width`: The width of the alert (default: `400px`).
    - `onClose`: A callback function to be called when the alert is closed.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes or improvements. We're looking for contributions in the following areas:

- Bug fixes
- Feature enhancements
- Documentation improvements

Before submitting your pull request, please ensure your changes are well-documented and follow the existing coding style of the project.

## License

AvalynxAlert is open-sourced software licensed under the [MIT license](LICENSE).

## Contact

If you have any questions, feature requests, or issues, please open an issue on our [GitHub repository](https://github.com/avalynx/avalynx-alert/issues) or submit a pull request.

Thank you for considering AvalynxAlert for your project!
