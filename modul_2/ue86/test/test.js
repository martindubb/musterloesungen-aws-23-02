const { expect } = require('chai');
const { toCelsius, toFahrenheit } = require('../app.js');


describe('Test der Umrechnung nach Celsius', () => {
    it('rechnet 32 zu 0 korrekt um', () => {
        expect(toCelsius(32)).to.equal(0);
    });
    it('rechnet 212 zu 100 korrekt um', () => {
        expect(toCelsius(212)).to.equal(100);
    });
    it('rechnet -4 nach -20 korrekt um', () => {
        expect(toCelsius(-4)).to.equal(-20);
    });
    it('umrechnung von strings schlaegt fehl', () => {
        expect(toCelsius("a")).to.be.NaN;
    });
    it('umrechnung von objekten schlaegt fehl', () => {
        expect(toCelsius({obj: true})).to.be.NaN;
    });
    it('umrechnung von listen schlaegt fehl', () => {
        expect(toCelsius([1,2,3])).to.be.NaN;
    });
    it('umrechnung von nichts schlaegt fehl', () => {
        expect(toCelsius()).to.be.NaN;
    });
});


describe('Test der Umrechnung nach Fahrenheit', () => {
    it('rechnet 0 zu 32 korrekt um', () => {
        expect(toFahrenheit(0)).to.equal(32);
    });
    it('rechnet 100 zu 212 korrekt um', () => {
        expect(toFahrenheit(100)).to.equal(212);
    });
    it('rechnet -20 nach -4 korrekt um', () => {
        expect(toFahrenheit(-20)).to.equal(-4);
    });
    it('umrechnung von strings schlaegt fehl', () => {
        expect(toFahrenheit("a")).to.be.NaN;
    });
    it('umrechnung von objekten schlaegt fehl', () => {
        expect(toFahrenheit({obj: true})).to.be.NaN;
    });
    it('umrechnung von listen schlaegt fehl', () => {
        expect(toFahrenheit([1,2,3])).to.be.NaN;
    });
    it('umrechnung von nichts schlaegt fehl', () => {
        expect(toFahrenheit()).to.be.NaN;
    });
});
