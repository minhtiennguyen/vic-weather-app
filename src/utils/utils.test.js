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

});
