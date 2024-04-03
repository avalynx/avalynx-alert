/**
 * AvalynxAlert
 *
 * A simple alert system for web applications. Based on Bootstrap >=5.3 without any framework dependencies.
 *
 * @version 0.0.5
 * @license MIT
 * @author https://github.com/avalynx/avalynx-alert/graphs/contributors
 * @website https://github.com/avalynx/
 * @repository https://github.com/avalynx/avalynx-alert.git
 * @bugs https://github.com/avalynx/avalynx-alert/issues
 *
 * @param {string} message - The message to display in the alert.
 * @param {string} type - The type of alert. One of 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'.
 * @param {object} options - The options for the alert.
 * @param {number} options.duration - The duration in milliseconds for the alert to be displayed. Default is 5000.
 * @param {string} options.position - The position of the alert. One of 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'. Default is 'top-center'.
 * @param {boolean} options.closeable - Whether the alert can be closed by the user. Default is true.
 * @param {boolean} options.autoClose - Whether the alert will close automatically after the duration. Default is true.
 * @param {string} options.width - The width of the alert. Default is '400px'.
 * @param {function} options.onClose - A callback function to be called when the alert is closed.
 */

class AvalynxAlert {
	constructor(message, type, options = {}) {
		this.message = message;
		this.type = type;
		this.duration = options.duration || 5000;
		this.position = options.position || 'top-center';
		this.closeable = options.closeable || true;
		this.autoClose = options.autoClose || true;
		this.width = options.width || '400px';
		this.onClose = options.onClose || null;

		if (!['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(this.type)) {
			this.type = 'info';
		}
		if (!['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].includes(this.position)) {
			this.position = 'top-center';
		}
		if (this.autoClose !== false && this.autoClose !== true) {
			this.autoClose = true;
		}
		if ((this.closeable !== false && this.closeable !== true) || (this.autoClose === true)) {
			this.closeable = true;
		}

		this.init();
	}

	ensureAlertContainer() {
		if (!document.getElementById('avalynx-alert-container-' + this.position)) {
			var container = document.createElement('div');
			container.id = 'avalynx-alert-container-' + this.position;
			container.style.width = '100%';
			container.style.maxWidth = this.width;
			container.style.zIndex = '1000';
			container.classList.add('container-fluid');

			if (this.position === 'top-left') {
				container.style.position = 'fixed';
				container.style.top = '10px';
				container.style.left = '0px';
			} else if (this.position === 'top-center') {
				container.style.position = 'fixed';
				container.style.top = '10px';
				container.style.left = '50%';
				container.style.transform = 'translateX(-50%)';
			} else if (this.position === 'top-right') {
				container.style.position = 'fixed';
				container.style.top = '10px';
				container.style.right = '0px';
			} else if (this.position === 'bottom-left') {
				container.style.position = 'fixed';
				container.style.bottom = '10px';
				container.style.left = '0px';
			} else if (this.position === 'bottom-center') {
				container.style.position = 'fixed';
				container.style.bottom = '10px';
				container.style.left = '50%';
				container.style.transform = 'translateX(-50%)';
			} else if (this.position === 'bottom-right') {
				container.style.position = 'fixed';
				container.style.bottom = '10px';
				container.style.right = '0px';
			}

			document.body.appendChild(container);
		}
	}

	init() {
		this.ensureAlertContainer();

		var alert = document.createElement('div');
		alert.className = `alert alert-${this.type}`;
		if (this.closeable) {
			alert.classList.add('alert-dismissible');
		}
		alert.classList.add('fade');
		alert.classList.add('show');
		alert.classList.add('p-0');
		alert.classList.add('overflow-hidden');
		alert.classList.add('avalynx-alert');
		alert.role = 'alert';
		alert.innerHTML = `<div class="alert-content">${this.message}`;
		if (this.closeable) {
			alert.innerHTML += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
		}
		alert.innerHTML += `</div>`;
		if (this.autoClose) {
			alert.innerHTML += `<div class="alert-timer" style="height: 5px; width: 0;"></div>`;
		}

		document.getElementById('avalynx-alert-container-' + this.position).appendChild(alert);

		if (this.autoClose) {
			var timerBar = alert.querySelector('.alert-timer');
			timerBar.style.transition = `width ${this.duration}ms linear`;

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					timerBar.style.width = '100%';
				});
			});

			setTimeout(() => {
				alert.classList.remove('show');
				setTimeout(() => {
					alert.remove();
					if (typeof this.onClose === 'function') {
						this.onClose();
					}
				}, 150);
			}, this.duration);
		}
	}
}