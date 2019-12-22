import * as utils from '.';

describe('Util', () => {
  describe('convertUnixTimestamp', () => {
    it('should return formatted date time', () => {
      const sunrise = 1576868061;
      const sunset = 1576921280;

      expect(utils.convertUnixTimestamp(sunrise)).toBe('05:54 AM');
      expect(utils.convertUnixTimestamp(sunset)).toBe('20:41 PM');
    });
  });

  describe('toFahrenheit', () => {
    it('should return Fahrenheit', () => {
      expect(utils.toFahrenheit(40)).toBe('104.00');
    });
  });

  describe('convertTemp', () => {
    it('should return converted temperature', () => {
      expect(utils.convertTemp('metric', 120)).toBe('120 C');
      expect(utils.convertTemp('imperial', 70)).toBe('158.00 F');
    });
  });
});
