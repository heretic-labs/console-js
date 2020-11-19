/**
 * @fileoverview Console Helpers
 */
class Console {
    /**
     * @description send message to window console log
     * @param {string} msg 
     * @param {object} params (optional)
     */
    log = function (msg, params = {}) {
        try {
            if (this.is.empty(msg)) {
                throw 'msg is empty';
            }
            windows.console.log(msg, params);
        } catch (ex) {
            this.error('ID10T.console.log failed, ' + ex);
        }
    }

    /**
     * @description send debug message to console
     * @param {string} msg 
     * @param {object} params (optional)
     */
    debug = function (msg, params = {}) {
        try {
            if (this.is.empty(msg)) {
                throw 'msg is empty';
            }
            if (!ID10T.is.true(ID10T.storage.get(ID10T.storage.KEY.DEBUG))) {
                throw 'debug flag not set';
            }
            this.log('[debug] ' + msg, params);
        } catch (ex) {
            // tell no one 
        }

    }

    /**
     * @description Send error message to console
     * @param {string} msg 
     * @param {object} params (optional)
     */
    error = function (msg, params = {}) {
        try {
            if (this.is.empty(msg)) {
                throw 'msg is empty';
            }
            windows.console.error(msg, params);
        } catch (ex) {
            this.error('ID10T.console.error failed, ' + ex);
        }
    }

    /**
     * @description Send warning message to console
     * @param {string} msg 
     * @param {object} params 
     */
    warn = function (msg, params = {}) {
        try {
            if (this.is.empty(msg)) {
                throw 'msg is empty';
            }
            windows.console.warn(msg, params);
        } catch (ex) {
            this.error('ID10T.console.warn failed, ' + ex);
        }
    }
}

module.exports = { Console };
