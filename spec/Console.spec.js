
const Console = require('../src/Console');

describe('Console-js', function () {
    var console;
    beforeAll(function () {

    });

    beforeEach(function () {
        console = new Console();

        spyOn(console, 'error');
        spyOn(console, 'log');
        spyOn(console, 'info');
        spyOn(console, 'warn');
    });

    describe('log', function () {
        let msg = 'foo';
        console.log(msg);
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toEqual(msg);
    })
});