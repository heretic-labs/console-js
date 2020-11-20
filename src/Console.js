/**
 * @fileoverview Console Helpers
 */

const Storage = require('../node_modules/@heretic-labs/storage-js');

/**
 * @description Console Helper Library
 */
class Console {
    KEY_DEBUG = 'debug';

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
            console.log(msg, params);
        } catch (ex) {
            this.error('Console.log failed, ' + ex);
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
            let storage = new Storage();
            if (!storage.hasKey(KEY_DEBUG)) {
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
            console.error(msg, params);
        } catch (ex) {
            this.error('Console.error failed, ' + ex);
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
            console.warn(msg, params);
        } catch (ex) {
            this.error('Console.warn failed, ' + ex);
        }
    }
}

module.exports = { Console };
