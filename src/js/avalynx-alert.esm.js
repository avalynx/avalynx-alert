/**
 * AvalynxAlert
 *
 * A simple alert system for web applications. Based on Bootstrap >=5.3 without any framework dependencies.
 *
 * @version 0.0.7
 * @license MIT
 * @author https://github.com/avalynx/avalynx-alert/graphs/contributors
 * @website https://github.com/avalynx/
 * @repository https://github.com/avalynx/avalynx-alert.git
 * @bugs https://github.com/avalynx/avalynx-alert/issues
 *
 * @param {string} message - The message to display in the alert (default: '').
 * @param {string} type - The type of alert. One of 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' (default: 'info').
 * @param {object} options - An object containing the following keys:
 * @param {number} options.duration - Duration in milliseconds for the alert to be displayed (default: 5000).
 * @param {string} options.position - Position of the alert on the screen. One of 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right' (default: 'top-center').
 * @param {boolean} options.closeable - Whether the alert can be closed by the user (default: true).
 * @param {boolean} options.autoClose - Whether the alert will close automatically after the duration (default: true).
 * @param {string} options.width - The width of the alert (default: '400px').
 * @param {function} options.onClose - A callback function to execute when the alert is closed (default: null).
 *
 */

export class AvalynxAlert {
    constructor(message, type, options = {}) {
        this.message = message;
        this.type = type;
        this.options = {
            duration: options.duration || 5000,
            position: options.position || 'top-center',
            closeable: options.closeable || true,
            autoClose: options.autoClose || true,
            width: options.width || '400px',
            onClose: options.onClose || null,
            ...options
        };
        if (!['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(this.type)) {
            this.type = 'info';
        }
        if (!['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].includes(this.options.position)) {
            this.options.position = 'top-center';
        }
        if (this.options.autoClose !== false && this.options.autoClose !== true) {
            this.options.autoClose = true;
        }
        if ((this.options.closeable !== false && this.options.closeable !== true) || (this.options.autoClose === true)) {
            this.options.closeable = true;
        }

        this.init();
    }

    ensureAlertContainer() {
        if (!document.getElementById('avalynx-alert-container-' + this.options.position)) {
            var container = document.createElement('div');
            container.id = 'avalynx-alert-container-' + this.options.position;
            container.style.width = '100%';
            container.style.maxWidth = this.options.width;
            container.style.zIndex = '1000';
            container.classList.add('container-fluid');

            if (this.options.position === 'top-left') {
                container.style.position = 'fixed';
                container.style.top = '10px';
                container.style.left = '0px';
            } else if (this.options.position === 'top-center') {
                container.style.position = 'fixed';
                container.style.top = '10px';
                container.style.left = '50%';
                container.style.transform = 'translateX(-50%)';
            } else if (this.options.position === 'top-right') {
                container.style.position = 'fixed';
                container.style.top = '10px';
                container.style.right = '0px';
            } else if (this.options.position === 'bottom-left') {
                container.style.position = 'fixed';
                container.style.bottom = '10px';
                container.style.left = '0px';
            } else if (this.options.position === 'bottom-center') {
                container.style.position = 'fixed';
                container.style.bottom = '10px';
                container.style.left = '50%';
                container.style.transform = 'translateX(-50%)';
            } else if (this.options.position === 'bottom-right') {
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
        if (this.options.closeable) {
            alert.classList.add('alert-dismissible');
        }
        alert.classList.add('fade');
        alert.classList.add('show');
        alert.classList.add('p-0');
        alert.classList.add('overflow-hidden');
        alert.classList.add('avalynx-alert');
        alert.role = 'alert';
        alert.innerHTML = `<div class="alert-content">${this.message}`;
        if (this.options.closeable) {
            alert.innerHTML += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        }
        alert.innerHTML += `</div>`;
        if (this.options.autoClose) {
            alert.innerHTML += `<div class="alert-timer" style="height: 5px; width: 0;"></div>`;
        }

        document.getElementById('avalynx-alert-container-' + this.options.position).appendChild(alert);

        if (this.options.autoClose) {
            var timerBar = alert.querySelector('.alert-timer');
            timerBar.style.transition = `width ${this.options.duration}ms linear`;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    timerBar.style.width = '100%';
                });
            });

            setTimeout(() => {
                alert.classList.remove('show');
                setTimeout(() => {
                    alert.remove();
                    if (typeof this.options.onClose === 'function') {
                        this.options.onClose();
                    }
                }, 150);
            }, this.options.duration);
        }
    }
}
