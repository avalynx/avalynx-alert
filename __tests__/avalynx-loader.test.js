import { AvalynxAlert } from '../src/js/avalynx-alert.esm.js';

describe('AvalynxAlert', () => {
    let alert;

    beforeEach(() => {
        document.body.innerHTML = '';
        alert = new AvalynxAlert('Test message', 'success');
    });

    it('should create an instance of AvalynxAlert', () => {
        expect(alert).toBeInstanceOf(AvalynxAlert);
    });

    it('should set default options if none are provided', () => {
        expect(alert.options).toEqual({
            duration: 5000,
            position: 'top-center',
            closeable: true,
            autoClose: true,
            width: '400px',
            onClose: null
        });
    });

    it('should override default options if provided', () => {
        const customOptions = {
            duration: 10000,
            position: 'bottom-right',
            closeable: false,
            autoClose: false,
            width: '500px',
            onClose: jest.fn()
        };
        alert = new AvalynxAlert('Test message', 'success', customOptions);
        expect(alert.options).toEqual(customOptions);
    });

    it('should create alert container if it does not exist', () => {
        alert.ensureAlertContainer();
        expect(document.getElementById('avalynx-alert-container-top-center')).not.toBeNull();
    });

    /*
    it('should not create alert container if it already exists', () => {
        const container = document.createElement('div');
        container.id = 'avalynx-alert-container-top-center';
        document.body.appendChild(container);

        alert.ensureAlertContainer();
        expect(document.querySelectorAll('#avalynx-alert-container-top-center').length).toBe(1);

        document.body.removeChild(container);
    });
    */

    it('should create alert and append it to the alert container', () => {
        alert.init();
        expect(document.querySelector('.avalynx-alert')).not.toBeNull();
    });

    /*
    it('should auto close the alert after the specified duration', () => {
        jest.useFakeTimers();
        alert.init();
        jest.advanceTimersByTime(5000);
        expect(document.querySelector('.avalynx-alert')).toBeNull();
        jest.useRealTimers();
    });
    */
});
