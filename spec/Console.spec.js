
const Console = require('../src/Console');

describe('Console-js', function () {

    beforeEach(function () {
        spyOn(console, 'error');
        spyOn(console, 'log');
        spyOn(console, 'info');
        spyOn(console, 'warn');
    });

    afterEach(function () {
        const c = new Console();
        c._clearDebugKey();
    });

    it('do nothing', function () {
        const c = new Console();

        expect(console.log).not.toHaveBeenCalled();
        expect(console.info).not.toHaveBeenCalled();
        expect(console.warn).not.toHaveBeenCalled();
        expect(console.error).not.toHaveBeenCalled();
    });

    describe('log', function () {

        it('success', function () {
            let msg = 'foo', params = {};
            const c = new Console();

            c.log(msg, params);

            expect(console.log).toHaveBeenCalledWith(msg, params);
        })
    })

    describe('debug', function () {

        it('success', function () {
            let msg = 'foo', params = {};
            const c = new Console();

            c._setDebugKey();
            c.log(msg, params);

            expect(console.log).toHaveBeenCalledWith(msg, params);
        })

        it('fail-key not set', function () {
            let msg = 'foo';
            const c = new Console();
            c.debug(msg);

            expect(console.log).not.toHaveBeenCalled();
        })
    })

    describe('info', function () {

        it('success', function () {
            let msg = 'foo', params = {};
            const c = new Console();

            c.info(msg, params);

            expect(console.info).toHaveBeenCalledWith(msg, params);
        })
    })
});