/**
 * AvalynxAlert Jest Tests
 * Comprehensive test suite for all important functionality
 */

// Mock bootstrap dropdown
global.bootstrap = {
    Dropdown: jest.fn().mockImplementation(() => ({
        hide: jest.fn(),
        show: jest.fn()
    }))
};

const AvalynxAlert = require('../src/js/avalynx-alert.js');

describe('AvalynxAlert', () => {
    let consoleErrorSpy;

    beforeEach(() => {
        // Clear document body
        document.body.innerHTML = '';

        // Mock console.error
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        // Clear all timers
        jest.clearAllTimers();
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
        jest.clearAllMocks();

        // Clean up any alert containers
        const containers = document.querySelectorAll('[id^="avalynx-alert-container-"]');
        containers.forEach(container => container.remove());
    });

    describe('Constructor', () => {
        test('should initialize with valid message, type, and default options', () => {
            const alert = new AvalynxAlert('Test message', 'success');
            expect(alert.message).toBe('Test message');
            expect(alert.type).toBe('success');
            expect(alert.options.duration).toBe(5000);
            expect(alert.options.position).toBe('top-center');
            expect(alert.options.closeable).toBe(true);
            expect(alert.options.autoClose).toBe(true);
            expect(alert.options.width).toBe('400px');
            expect(alert.options.onClose).toBeNull();
        });

        test('should merge custom options with defaults', () => {
            const onClose = jest.fn();
            const alert = new AvalynxAlert('Test', 'info', {
                duration: 3000,
                position: 'bottom-right',
                closeable: false,
                autoClose: false,
                width: '500px',
                onClose
            });
            expect(alert.options.duration).toBe(3000);
            expect(alert.options.position).toBe('bottom-right');
            expect(alert.options.closeable).toBe(false);
            expect(alert.options.autoClose).toBe(false);
            expect(alert.options.width).toBe('500px');
            expect(alert.options.onClose).toBe(onClose);
        });

        test('should default to "info" type for invalid type', () => {
            const alert = new AvalynxAlert('Test', 'invalid-type');
            expect(alert.type).toBe('info');
        });

        test('should accept all valid alert types', () => {
            const validTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
            validTypes.forEach(type => {
                const alert = new AvalynxAlert('Test', type);
                expect(alert.type).toBe(type);
            });
        });

        test('should default to "top-center" position for invalid position', () => {
            const alert = new AvalynxAlert('Test', 'info', { position: 'invalid-position' });
            expect(alert.options.position).toBe('top-center');
        });

        test('should accept all valid positions', () => {
            const validPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
            validPositions.forEach(position => {
                document.body.innerHTML = ''; // Clear containers
                const alert = new AvalynxAlert('Test', 'info', { position });
                expect(alert.options.position).toBe(position);
            });
        });

        test('should force closeable to true when autoClose is true', () => {
            const alert = new AvalynxAlert('Test', 'info', {
                closeable: false,
                autoClose: true
            });
            expect(alert.options.closeable).toBe(true);
        });

        test('should allow closeable to be false when autoClose is false', () => {
            const alert = new AvalynxAlert('Test', 'info', {
                closeable: false,
                autoClose: false
            });
            expect(alert.options.closeable).toBe(false);
        });

        test('should default autoClose to true for non-boolean values', () => {
            const alert = new AvalynxAlert('Test', 'info', { autoClose: 'yes' });
            expect(alert.options.autoClose).toBe(true);
        });
    });

    describe('Container Creation', () => {
        test('should create alert container if it does not exist', () => {
            new AvalynxAlert('Test', 'info', { position: 'top-center' });
            const container = document.getElementById('avalynx-alert-container-top-center');
            expect(container).not.toBeNull();
            expect(container.classList.contains('container-fluid')).toBe(true);
        });

        test('should reuse existing container if it already exists', () => {
            new AvalynxAlert('Test 1', 'info', { position: 'top-center' });
            new AvalynxAlert('Test 2', 'success', { position: 'top-center' });
            const containers = document.querySelectorAll('#avalynx-alert-container-top-center');
            expect(containers.length).toBe(1);
        });

        test('should apply correct styles for top-left position', () => {
            new AvalynxAlert('Test', 'info', { position: 'top-left' });
            const container = document.getElementById('avalynx-alert-container-top-left');
            expect(container.style.position).toBe('fixed');
            expect(container.style.top).toBe('10px');
            expect(container.style.left).toBe('0px');
            expect(container.style.right).toBe('');
        });

        test('should apply correct styles for top-center position', () => {
            new AvalynxAlert('Test', 'info', { position: 'top-center' });
            const container = document.getElementById('avalynx-alert-container-top-center');
            expect(container.style.position).toBe('fixed');
            expect(container.style.top).toBe('10px');
            expect(container.style.left).toBe('50%');
            expect(container.style.transform).toBe('translateX(-50%)');
        });

        test('should apply correct styles for top-right position', () => {
            new AvalynxAlert('Test', 'info', { position: 'top-right' });
            const container = document.getElementById('avalynx-alert-container-top-right');
            expect(container.style.position).toBe('fixed');
            expect(container.style.top).toBe('10px');
            expect(container.style.right).toBe('0px');
            expect(container.style.left).toBe('');
        });

        test('should apply correct styles for bottom-left position', () => {
            new AvalynxAlert('Test', 'info', { position: 'bottom-left' });
            const container = document.getElementById('avalynx-alert-container-bottom-left');
            expect(container.style.position).toBe('fixed');
            expect(container.style.bottom).toBe('10px');
            expect(container.style.left).toBe('0px');
            expect(container.style.top).toBe('');
        });

        test('should apply correct styles for bottom-center position', () => {
            new AvalynxAlert('Test', 'info', { position: 'bottom-center' });
            const container = document.getElementById('avalynx-alert-container-bottom-center');
            expect(container.style.position).toBe('fixed');
            expect(container.style.bottom).toBe('10px');
            expect(container.style.left).toBe('50%');
            expect(container.style.transform).toBe('translateX(-50%)');
        });

        test('should apply correct styles for bottom-right position', () => {
            new AvalynxAlert('Test', 'info', { position: 'bottom-right' });
            const container = document.getElementById('avalynx-alert-container-bottom-right');
            expect(container.style.position).toBe('fixed');
            expect(container.style.bottom).toBe('10px');
            expect(container.style.right).toBe('0px');
            expect(container.style.left).toBe('');
            expect(container.style.top).toBe('');
        });

        test('should not have top or bottom set for left/right positions', () => {
            new AvalynxAlert('Test', 'info', { position: 'top-left' });
            const containerTopLeft = document.getElementById('avalynx-alert-container-top-left');
            expect(containerTopLeft.style.bottom).toBe('');

            document.body.innerHTML = '';
            new AvalynxAlert('Test', 'info', { position: 'top-right' });
            const containerTopRight = document.getElementById('avalynx-alert-container-top-right');
            expect(containerTopRight.style.bottom).toBe('');
            expect(containerTopRight.style.left).toBe('');

            document.body.innerHTML = '';
            new AvalynxAlert('Test', 'info', { position: 'bottom-left' });
            const containerBottomLeft = document.getElementById('avalynx-alert-container-bottom-left');
            expect(containerBottomLeft.style.top).toBe('');
            expect(containerBottomLeft.style.right).toBe('');
        });

        test('should set container width and z-index', () => {
            new AvalynxAlert('Test', 'info', { width: '600px' });
            const container = document.getElementById('avalynx-alert-container-top-center');
            expect(container.style.width).toBe('100%');
            expect(container.style.maxWidth).toBe('600px');
            expect(container.style.zIndex).toBe('1000');
        });
    });

    describe('Alert Element Creation', () => {
        test('should create alert element with correct message', () => {
            new AvalynxAlert('Hello World', 'info');
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.innerHTML).toContain('Hello World');
        });

        test('should create alert with correct type class', () => {
            new AvalynxAlert('Test', 'danger');
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.classList.contains('alert-danger')).toBe(true);
        });

        test('should add alert-dismissible class when closeable is true', () => {
            new AvalynxAlert('Test', 'info', { closeable: true });
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.classList.contains('alert-dismissible')).toBe(true);
        });

        test('should not add alert-dismissible class when closeable is false', () => {
            new AvalynxAlert('Test', 'info', { closeable: false, autoClose: false });
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.classList.contains('alert-dismissible')).toBe(false);
        });

        test('should include close button when closeable is true', () => {
            new AvalynxAlert('Test', 'info', { closeable: true });
            const closeButton = document.querySelector('.btn-close');
            expect(closeButton).not.toBeNull();
            expect(closeButton.getAttribute('data-bs-dismiss')).toBe('alert');
            expect(closeButton.getAttribute('aria-label')).toBe('Close');
        });

        test('should not include close button when closeable is false', () => {
            new AvalynxAlert('Test', 'info', { closeable: false, autoClose: false });
            const closeButton = document.querySelector('.btn-close');
            expect(closeButton).toBeNull();
        });

        test('should add all required CSS classes', () => {
            new AvalynxAlert('Test', 'info');
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.classList.contains('alert')).toBe(true);
            expect(alert.classList.contains('fade')).toBe(true);
            expect(alert.classList.contains('show')).toBe(true);
            expect(alert.classList.contains('p-0')).toBe(true);
            expect(alert.classList.contains('overflow-hidden')).toBe(true);
        });

        test('should set role attribute to alert', () => {
            new AvalynxAlert('Test', 'info');
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.getAttribute('role')).toBe('alert');
        });

        test('should create timer bar when autoClose is true', () => {
            new AvalynxAlert('Test', 'info', { autoClose: true });
            const timerBar = document.querySelector('.alert-timer');
            expect(timerBar).not.toBeNull();
            expect(timerBar.style.height).toBe('5px');
            expect(timerBar.style.width).toBe('0px');
        });

        test('should not create timer bar when autoClose is false', () => {
            new AvalynxAlert('Test', 'info', { autoClose: false });
            const timerBar = document.querySelector('.alert-timer');
            expect(timerBar).toBeNull();
        });

        test('should append alert to correct container', () => {
            new AvalynxAlert('Test', 'info', { position: 'bottom-right' });
            const container = document.getElementById('avalynx-alert-container-bottom-right');
            const alert = container.querySelector('.avalynx-alert');
            expect(alert).not.toBeNull();
        });

        test('should support multiple alerts in same container', () => {
            new AvalynxAlert('First', 'info', { position: 'top-center' });
            new AvalynxAlert('Second', 'success', { position: 'top-center' });
            const container = document.getElementById('avalynx-alert-container-top-center');
            const alerts = container.querySelectorAll('.avalynx-alert');
            expect(alerts.length).toBe(2);
        });
    });

    describe('Auto-Close Functionality', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        test('should auto-close alert after specified duration', () => {
            new AvalynxAlert('Test', 'info', { duration: 3000, autoClose: true });
            const alert = document.querySelector('.avalynx-alert');

            expect(alert.classList.contains('show')).toBe(true);

            // Fast-forward time
            jest.advanceTimersByTime(3000);
            expect(alert.classList.contains('show')).toBe(false);
        });

        test('should remove alert from DOM after fade-out', () => {
            new AvalynxAlert('Test', 'info', { duration: 2000, autoClose: true });
            const alert = document.querySelector('.avalynx-alert');

            // Fast-forward to end of duration
            jest.advanceTimersByTime(2000);

            // Fast-forward through fade-out
            jest.advanceTimersByTime(150);

            const alertAfterRemoval = document.querySelector('.avalynx-alert');
            expect(alertAfterRemoval).toBeNull();
        });

        test('should call onClose callback when alert closes', () => {
            const onClose = jest.fn();
            new AvalynxAlert('Test', 'info', { duration: 2000, autoClose: true, onClose });

            // Fast-forward to end of duration
            jest.advanceTimersByTime(2000);

            // Fast-forward through fade-out
            jest.advanceTimersByTime(150);

            expect(onClose).toHaveBeenCalledTimes(1);
        });

        test('should not call onClose if callback is null', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', { duration: 2000, autoClose: true, onClose: null });
                jest.advanceTimersByTime(2150);
            }).not.toThrow();
        });

        test('should not auto-close when autoClose is false', () => {
            new AvalynxAlert('Test', 'info', { duration: 2000, autoClose: false });
            const alert = document.querySelector('.avalynx-alert');

            jest.advanceTimersByTime(3000);

            expect(alert.classList.contains('show')).toBe(true);
            expect(document.querySelector('.avalynx-alert')).not.toBeNull();
        });

        test('should animate timer bar to 100% width', () => {
            new AvalynxAlert('Test', 'info', { duration: 5000, autoClose: true });

            // Need to wait for requestAnimationFrame
            jest.advanceTimersByTime(0);

            const timerBar = document.querySelector('.alert-timer');
            expect(timerBar.style.transition).toContain('5000ms');
        });
    });

    describe('onClose Callback', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        test('should execute onClose callback with correct context', () => {
            const onClose = jest.fn();
            new AvalynxAlert('Test', 'info', { duration: 1000, autoClose: true, onClose });

            jest.advanceTimersByTime(1150);

            expect(onClose).toHaveBeenCalled();
        });

        test('should not throw error if onClose is not a function', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', { duration: 1000, autoClose: true, onClose: 'not-a-function' });
                jest.advanceTimersByTime(1150);
            }).not.toThrow();
        });
    });

    describe('Edge Cases', () => {
        test('should handle empty message', () => {
            expect(() => {
                new AvalynxAlert('', 'info');
            }).not.toThrow();
            const alert = document.querySelector('.avalynx-alert');
            expect(alert).not.toBeNull();
        });

        test('should handle undefined message', () => {
            expect(() => {
                new AvalynxAlert(undefined, 'info');
            }).not.toThrow();
        });

        test('should handle null message', () => {
            expect(() => {
                new AvalynxAlert(null, 'info');
            }).not.toThrow();
        });

        test('should handle HTML content in message', () => {
            new AvalynxAlert('<strong>Bold</strong> text', 'info');
            const alert = document.querySelector('.avalynx-alert');
            expect(alert.innerHTML).toContain('<strong>Bold</strong>');
        });

        test('should handle very long messages', () => {
            const longMessage = 'A'.repeat(1000);
            expect(() => {
                new AvalynxAlert(longMessage, 'info');
            }).not.toThrow();
        });

        test('should handle duration of 0', () => {
            jest.useFakeTimers();
            new AvalynxAlert('Test', 'info', { duration: 0, autoClose: true });
            jest.advanceTimersByTime(150);
            expect(document.querySelector('.avalynx-alert')).toBeNull();
            jest.useRealTimers();
        });

        test('should handle very large duration', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', { duration: 999999 });
            }).not.toThrow();
        });

        test('should handle options with extra properties', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', {
                    duration: 3000,
                    extraProp: 'should be ignored',
                    anotherExtra: 123
                });
            }).not.toThrow();
        });

        test('should handle missing type parameter', () => {
            const alert = new AvalynxAlert('Test', undefined);
            expect(alert.type).toBe('info');
        });

        test('should handle missing options parameter', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info');
            }).not.toThrow();
        });

        test('should handle null options parameter', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', null);
            }).not.toThrow();
        });

        test('should handle array as options parameter', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', ['invalid', 'options']);
            }).not.toThrow();
        });

        test('should handle number as options parameter', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', 12345);
            }).not.toThrow();
        });

        test('should handle string as options parameter', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', 'invalid options');
            }).not.toThrow();
        });

        test('should handle false as options parameter', () => {
            expect(() => {
                new AvalynxAlert('Test', 'info', false);
            }).not.toThrow();
        });
    });

    describe('Integration Tests', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        test('should create multiple alerts with different types', () => {
            new AvalynxAlert('Success', 'success');
            new AvalynxAlert('Error', 'danger');
            new AvalynxAlert('Warning', 'warning');

            const alerts = document.querySelectorAll('.avalynx-alert');
            expect(alerts.length).toBe(3);
        });

        test('should create alerts in different positions simultaneously', () => {
            new AvalynxAlert('Top', 'info', { position: 'top-center' });
            new AvalynxAlert('Bottom', 'success', { position: 'bottom-center' });

            const topContainer = document.getElementById('avalynx-alert-container-top-center');
            const bottomContainer = document.getElementById('avalynx-alert-container-bottom-center');

            expect(topContainer.querySelectorAll('.avalynx-alert').length).toBe(1);
            expect(bottomContainer.querySelectorAll('.avalynx-alert').length).toBe(1);
        });

        test('should handle rapid successive alert creation', () => {
            for (let i = 0; i < 10; i++) {
                new AvalynxAlert(`Alert ${i}`, 'info');
            }

            const alerts = document.querySelectorAll('.avalynx-alert');
            expect(alerts.length).toBe(10);
        });

        test('should auto-close multiple alerts with different durations', () => {
            new AvalynxAlert('Fast', 'info', { duration: 1000, autoClose: true });
            new AvalynxAlert('Slow', 'success', { duration: 3000, autoClose: true });

            // After 1150ms, first alert should be gone
            jest.advanceTimersByTime(1150);
            expect(document.querySelectorAll('.avalynx-alert').length).toBe(1);

            // After another 2000ms, second alert should be gone too
            jest.advanceTimersByTime(2000);
            expect(document.querySelectorAll('.avalynx-alert').length).toBe(0);
        });

        test('should execute multiple onClose callbacks in correct order', () => {
            const calls = [];
            const onClose1 = jest.fn(() => calls.push(1));
            const onClose2 = jest.fn(() => calls.push(2));

            new AvalynxAlert('First', 'info', { duration: 1000, autoClose: true, onClose: onClose1 });
            new AvalynxAlert('Second', 'info', { duration: 2000, autoClose: true, onClose: onClose2 });

            jest.advanceTimersByTime(1150);
            expect(calls).toEqual([1]);

            jest.advanceTimersByTime(1000);
            expect(calls).toEqual([1, 2]);
        });
    });

    describe('Module Export', () => {
        test('should export AvalynxAlert as module.exports', () => {
            expect(AvalynxAlert).toBeDefined();
            expect(typeof AvalynxAlert).toBe('function');
        });

        test('should be instantiable as a class', () => {
            const alert = new AvalynxAlert('Test', 'info');
            expect(alert).toBeInstanceOf(AvalynxAlert);
        });
    });
});
