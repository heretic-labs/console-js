/**
 * @fileoverview Console Helpers
 */

const Storage = require('../node_modules/@heretic-labs/storage-js');

/**
 * @description Console Helper Library
 */
class Console {
    KEY_DEBUG = 'debug';

    constructor() { }

    /**
     * @description send message to window console log
     * @param {string} msg 
     * @param {object} params (optional)
     */
    log = function (msg, params) {
        console.log(msg, params);
    }

    /**
     * @description send debug message to console
     * @param {string} msg 
     * @param {object} params (optional)
     */
    debug = function (msg = '', params = {}) {
        let storage = new Storage();
        if (storage.hasKey(storage.KEY_DEBUG)) {
            this.log('[debug] ' + msg, params);
        }
    }

    _setDebugKey = function () {
        let storage = new Storage();
        storage.set(this.KEY_DEBUG, 'true');
    }

    _clearDebugKey = function () {
        let storage = new Storage();
        storage.delete(this.KEY_DEBUG);
    }

    /**
     * @description Send error message to console
     * @param {string} msg 
     * @param {object} params (optional)
     */
    error = function (msg = '', params = {}) {
        console.error(msg, params);
    }

    /**
     * @description Send warning message to console
     * @param {string} msg 
     * @param {object} params 
     */
    warn = function (msg = '', params = {}) {
        console.warn(msg, params);
    }

    /**
     * @description SEnding Info message to console
     * @param {any} msg
     * @param {any} params
     */
    info = function (msg = '', params = {}) {
        console.info(msg, params);
    }
}

module.exports = Console;
