import { baseCompare } from '../baseCompare';

describe('baseCompare()', () => {
  describe('character values', () => {
    it('should order elements ascending and case insensitive', () => {
      const origArray = ['Fred', 'barney', 'frank', 'Bob'];
      const sortArray = ['barney', 'Bob', 'frank', 'Fred'];
      expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(sortArray);
    });
    it('should order elements descending and case insensitive', () => {
      const origArray = ['Fred', 'barney', 'frank', 'Bob'];
      const sortArray = ['Fred', 'frank', 'Bob', 'barney'];
      expect(origArray.sort(baseCompare({ order: 'desc' }))).toEqual(sortArray);
    });
  });

  describe('different value types', () => {
    describe('number always comes first', () => {
      const origArray = ['a', 1];
      const sortArray = [1, 'a'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('number vs numeric string - should remain unchanged', () => {
      const origArray = ['1', 1];
      const sortArray = ['1', 1];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('float vs float strings', () => {
      const origArray = [0.3, '.2', '.5', 0.1];
      const sortArray = [0.1, '.2', 0.3, '.5'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('padding numeric string vs number', () => {
      const origArray = ['02', 3, 2, '01'];
      const sortArray = ['01', '02', 2, 3];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('alphanumerics', () => {
    describe('Chrome not stable sort', () => {
      const origArray = [
        'T78',
        'U17',
        'U10',
        'U12',
        'U14',
        '745',
        'U7',
        '485',
        'S16',
        'S2',
        'S22',
        '1081',
        'S25',
        '1055',
        '779',
        '776',
        '771',
        '44',
        '4',
        '87',
        '1091',
        '42',
        '480',
        '952',
        '951',
        '756',
        '1000',
        '824',
        '770',
        '666',
        '633',
        '619',
        '1',
        '991',
        '77H',
        'PIER-7',
        '47',
        '29',
        '9',
        '77L',
        '433',
      ];
      const sortArray = [
        '1',
        '4',
        '9',
        '29',
        '42',
        '44',
        '47',
        '77H',
        '77L',
        '87',
        '433',
        '480',
        '485',
        '619',
        '633',
        '666',
        '745',
        '756',
        '770',
        '771',
        '776',
        '779',
        '824',
        '951',
        '952',
        '991',
        '1000',
        '1055',
        '1081',
        '1091',
        'PIER-7',
        'S2',
        'S16',
        'S22',
        'S25',
        'T78',
        'U7',
        'U10',
        'U12',
        'U14',
        'U17',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('redundant alphanumerics', () => {
      const origArray = [
        'FSI stop, Position: 5',
        'Mail Group stop, Position: 5',
        'Mail Group stop, Position: 5',
        'FSI stop, Position: 6',
        'FSI stop, Position: 6',
        'Newsstand stop, Position: 4',
        'Newsstand stop, Position: 4',
        'FSI stop, Position: 5',
      ];
      const sortArray = [
        'FSI stop, Position: 5',
        'FSI stop, Position: 5',
        'FSI stop, Position: 6',
        'FSI stop, Position: 6',
        'Mail Group stop, Position: 5',
        'Mail Group stop, Position: 5',
        'Newsstand stop, Position: 4',
        'Newsstand stop, Position: 4',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('sort alphanumerics case insensitive', () => {
      const origArray = ['9', 'bbbb', 'aa', 'AA', 'Aa', 'aA', 'BB', 'bB'];
      const sortArray = ['9', 'aa', 'AA', 'Aa', 'aA', 'BB', 'bB', 'bbbb'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('numerics with leading zeros and prefixed by a character', () => {
      const origArray = ['A110', 'A100', 'A090', 'A200', 'A50'];
      const sortArray = ['A50', 'A090', 'A100', 'A110', 'A200'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('number first', () => {
      const origArray = [
        '5D',
        '1A',
        '2D',
        '33A',
        '5E',
        '33K',
        '33D',
        '5S',
        '2C',
        '5C',
        '5F',
        '1D',
        '2M',
      ];
      const sortArray = [
        '1A',
        '1D',
        '2C',
        '2D',
        '2M',
        '5C',
        '5D',
        '5E',
        '5F',
        '5S',
        '33A',
        '33D',
        '33K',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('alphanumeric strings containing whitespace', () => {
      const origArray = [
        'img199',
        'img 99',
        'imga99',
        'imgz 99',
        'imgb99',
        'imgz199',
      ];
      const sortArray = [
        'img 99',
        'img199',
        'imga99',
        'imgb99',
        'imgz 99',
        'imgz199',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('alphanumerics containing very large numbers', () => {
      const origArray = [
        'MySnmp 1234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
        'MySnmp 4234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
        'MySnmp 2234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
        'MySnmp 3234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
      ];
      const sortArray = [
        'MySnmp 1234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
        'MySnmp 2234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
        'MySnmp 3234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
        'MySnmp 4234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('alphanumerics containing "." and "-"', () => {
      const origArray = ['bar.1-2', 'bar.1'];
      const sortArray = ['bar.1', 'bar.1-2'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('character string vs alphanumeric string', () => {
      const origArray = ['SomeString', 'SomeString 1'];
      const sortArray = ['SomeString', 'SomeString 1'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('numerics with unit', () => {
      const origArray = ['2.2 sec', '1.9 sec', '1.53 sec'];
      const sortArray = ['1.53 sec', '1.9 sec', '2.2 sec'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('numerics with unit without whitespace', () => {
      const origArray = ['2.2sec', '1.9sec', '1.53sec'];
      const sortArray = ['1.53sec', '1.9sec', '2.2sec'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('datetime', () => {
    describe('similar dates', () => {
      const origArray = [
        '10/12/2008',
        '10/11/2008',
        '10/11/2007',
        '10/12/2007',
      ];
      const sortArray = [
        '10/11/2007',
        '10/12/2007',
        '10/11/2008',
        '10/12/2008',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('more similar dates', () => {
      const origArray = [
        '01/01/2008',
        '01/10/2008',
        '01/01/1992',
        '01/01/1991',
      ];
      const sortArray = [
        '01/01/1991',
        '01/01/1992',
        '01/01/2008',
        '01/10/2008',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('JavaScript toString(), different timezones', () => {
      const origArray = [
        'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)',
        'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
        'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)',
      ];
      const sortArray = [
        'Thu Dec 31 2009 00:00:00 GMT-0800 (Pacific Standard Time)',
        'Wed Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)',
        'Wed Jan 01 2010 00:00:00 GMT-0800 (Pacific Standard Time)',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Date.toString(), Date.toLocaleString()', () => {
      const origArray = [
        'Saturday, July 3, 2010',
        'Monday, August 2, 2010',
        'Monday, May 3, 2010',
      ];
      const sortArray = [
        'Monday, May 3, 2010',
        'Saturday, July 3, 2010',
        'Monday, August 2, 2010',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Date.toUTCString()', () => {
      const origArray = [
        'Mon, 15 Jun 2009 20:45:30 GMT',
        'Mon, 3 May 2010 17:45:30 GMT',
        'Mon, 15 Jun 2009 17:45:30 GMT',
      ];
      const sortArray = [
        'Mon, 15 Jun 2009 17:45:30 GMT',
        'Mon, 15 Jun 2009 20:45:30 GMT',
        'Mon, 3 May 2010 17:45:30 GMT',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('custom date formats', () => {
      const origArray = [
        'Saturday, July 3, 2010 1:45 PM',
        'Saturday, July 3, 2010 1:45 AM',
        'Monday, August 2, 2010 1:45 PM',
        'Monday, May 3, 2010 1:45 PM',
      ];
      const sortArray = [
        'Monday, May 3, 2010 1:45 PM',
        'Saturday, July 3, 2010 1:45 AM',
        'Saturday, July 3, 2010 1:45 PM',
        'Monday, August 2, 2010 1:45 PM',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('more custom date formats', () => {
      const origArray = [
        'Saturday, July 3, 2010 1:45:30 PM',
        'Saturday, July 3, 2010 1:45:29 PM',
        'Monday, August 2, 2010 1:45:01 PM',
        'Monday, May 3, 2010 1:45:00 PM',
      ];
      const sortArray = [
        'Monday, May 3, 2010 1:45:00 PM',
        'Saturday, July 3, 2010 1:45:29 PM',
        'Saturday, July 3, 2010 1:45:30 PM',
        'Monday, August 2, 2010 1:45:01 PM',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('even more custom date formats', () => {
      const origArray = [
        '2/15/2009 1:45 PM',
        '1/15/2009 1:45 PM',
        '2/15/2009 1:45 AM',
      ];
      const sortArray = [
        '1/15/2009 1:45 PM',
        '2/15/2009 1:45 AM',
        '2/15/2009 1:45 PM',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('ISO8601 Dates', () => {
      const origArray = [
        '2010-06-15T13:45:30',
        '2009-06-15T13:45:30',
        '2009-06-15T01:45:30.2',
        '2009-01-15T01:45:30',
      ];
      const sortArray = [
        '2009-01-15T01:45:30',
        '2009-06-15T01:45:30.2',
        '2009-06-15T13:45:30',
        '2010-06-15T13:45:30',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('ISO8601-ish YYYY-MM-DD hh:mm:ss - which does not parse into a Date instance', () => {
      const origArray = [
        '2010-06-15 13:45:30',
        '2009-06-15 13:45:30',
        '2009-01-15 01:45:30',
      ];
      const sortArray = [
        '2009-01-15 01:45:30',
        '2009-06-15 13:45:30',
        '2010-06-15 13:45:30',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('RFC1123 testing different timezones', () => {
      const origArray = [
        'Mon, 15 Jun 2009 20:45:30 GMT',
        'Mon, 15 Jun 2009 20:45:30 PDT',
        'Mon, 15 Jun 2009 20:45:30 EST',
      ];
      const sortArray = [
        'Mon, 15 Jun 2009 20:45:30 GMT',
        'Mon, 15 Jun 2009 20:45:30 EST',
        'Mon, 15 Jun 2009 20:45:30 PDT',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('unix epoch, Date.getTime()', () => {
      const origArray = ['1245098730000', '14330728000', '1245098728000'];
      const sortArray = ['14330728000', '1245098728000', '1245098730000'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('mixed Date types', () => {
      const origArray = [
        new Date('2001-01-10'),
        '2015-01-01',
        new Date('2001-01-01'),
        '1998-01-01',
      ];
      const sortArray = [
        '1998-01-01',
        new Date('2001-01-01'),
        new Date('2001-01-10'),
        '2015-01-01',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('version number strings', () => {
    describe('close version numbers', () => {
      const origArray = ['1.0.2', '1.0.1', '1.0.0', '1.0.9'];
      const sortArray = ['1.0.0', '1.0.1', '1.0.2', '1.0.9'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('more version numbers', () => {
      const origArray = ['1.1.100', '1.1.1', '1.1.10', '1.1.54'];
      const sortArray = ['1.1.1', '1.1.10', '1.1.54', '1.1.100'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('even more version numbers', () => {
      const origArray = [
        '1.19.100',
        '1.12.1',
        '1.1.10',
        '1.2.54',
        '2.0.1',
        '0.9.1',
      ];
      const sortArray = [
        '0.9.1',
        '1.1.10',
        '1.2.54',
        '1.12.1',
        '1.19.100',
        '2.0.1',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('multi-digit branch release', () => {
      const origArray = ['1.0.03', '1.0.003', '1.0.002', '1.0.0001'];
      const sortArray = ['1.0.0001', '1.0.002', '1.0.003', '1.0.03'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('more close version numbers', () => {
      const origArray = [
        '1.1beta',
        '1.1.2alpha3',
        '1.0.2alpha3',
        '1.0.2alpha1',
        '1.0.1alpha4',
        '2.1.2',
        '2.1.1',
      ];
      const sortArray = [
        '1.0.1alpha4',
        '1.0.2alpha1',
        '1.0.2alpha3',
        '1.1.2alpha3',
        '1.1beta',
        '2.1.1',
        '2.1.2',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('string first', () => {
      const origArray = [
        'myrelease-1.1.3',
        'myrelease-1.2.3',
        'myrelease-1.1.4',
        'myrelease-1.1.1',
        'myrelease-1.0.5',
      ];
      const sortArray = [
        'myrelease-1.0.5',
        'myrelease-1.1.1',
        'myrelease-1.1.3',
        'myrelease-1.1.4',
        'myrelease-1.2.3',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('version numbers containing float-like numbers', () => {
      const origArray = ['v1.100', 'v1.1', 'v1.10', 'v1.54'];
      const sortArray = ['v1.1', 'v1.10', 'v1.54', 'v1.100'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('numerics', () => {
    describe('string vs number', () => {
      const origArray = ['10', 9, 2, '1', '4'];
      const sortArray = ['1', 2, '4', 9, '10'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('0 left-padded numbers', () => {
      const origArray = ['0001', '002', '001'];
      const sortArray = ['0001', '001', '002'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('0 left-padded numbers and regular numbers', () => {
      const origArray = [2, 1, '1', '0001', '002', '02', '001'];
      const sortArray = [1, '1', '0001', '001', 2, '002', '02'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('decimal string vs decimal, different precision', () => {
      const origArray = ['10.0401', 10.022, 10.042, '10.021999'];
      const sortArray = ['10.021999', 10.022, '10.0401', 10.042];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('decimal string vs decimal, same precision', () => {
      const origArray = ['10.04', 10.02, 10.03, '10.01'];
      const sortArray = ['10.01', 10.02, 10.03, '10.04'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('float/decimal with "F" or "D" notation', () => {
      const origArray = ['10.04f', '10.039F', '10.038d', '10.037D'];
      const sortArray = ['10.037D', '10.038d', '10.039F', '10.04f'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('not foat/decimal notation', () => {
      const origArray = ['10.004Z', '10.039T', '10.038ooo', '10.037g'];
      const sortArray = ['10.004Z', '10.037g', '10.038ooo', '10.039T'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('scientific notation', () => {
      const origArray = [
        '1.528535047e5',
        '1.528535047e7',
        '1.52e15',
        '1.528535047e3',
        '1.59e-3',
      ];
      const sortArray = [
        '1.59e-3',
        '1.528535047e3',
        '1.528535047e5',
        '1.528535047e7',
        '1.52e15',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('negative numbers as strings', () => {
      const origArray = ['-1', '-2', '4', '-3', '0', '-5'];
      const sortArray = ['-5', '-3', '-2', '-1', '0', '4'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('numerics with prepended zero', () => {
      const origArray = ['1', '02', '3'];
      const sortArray = ['1', '02', '3'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('numerics with prepended zero and optional trailing characters', () => {
      const origArray = [
        '05',
        '06',
        '07*',
        '08A',
        '09 B',
        '10',
        '11',
        '12A',
        '13',
      ];
      const sortArray = [
        '05',
        '06',
        '07*',
        '08A',
        '09 B',
        '10',
        '11',
        '12A',
        '13',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('negative numbers as strings - mixed input type, string + numeric', () => {
      const origArray = [-1, '-2', 4, -3, '0', '-5'];
      const sortArray = ['-5', -3, '-2', -1, '0', 4];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('negative floats - all numeric', () => {
      const origArray = [-2.01, -2.1, 4.144, 4.1, -2.001, -5];
      const sortArray = [-5, -2.1, -2.01, -2.001, 4.1, 4.144];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('numerations', () => {
    const origArray = ['1c', '1b', '1a', '1f', '1d', '2b', '2a', '2c', '1e'];
    const sortArray = ['1a', '1b', '1c', '1d', '1e', '1f', '2a', '2b', '2c'];
    it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
      expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(sortArray);
    });
  });

  describe('IP addresses', () => {
    const origArray = [
      '192.168.0.100',
      '192.168.0.1',
      '192.168.1.1',
      '192.68.0.250',
      '192.68.1.123',
      '10.0.0.2',
      '10.0.0.1',
    ];
    const sortArray = [
      '10.0.0.1',
      '10.0.0.2',
      '192.68.0.250',
      '192.68.1.123',
      '192.168.0.1',
      '192.168.0.100',
      '192.168.1.1',
    ];
    it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
      expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(sortArray);
    });
  });

  describe('filenames', () => {
    describe('simple image filenames', () => {
      const origArray = ['img12.png', 'img10.png', 'img2.png', 'img1.png', 'img10hd.png', 'img.png'];
      const sortArray = ['img.png', 'img1.png', 'img2.png', 'img10.png', 'img10hd.png', 'img12.png'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('complex filenames', () => {
      const origArray = [
        '01asset_0815.png',
        'asset_47103.jpg',
        'asset_151.jpg',
        'asset_001.jpg',
        'asset_0001.jpg',
        '001asset_4711.jpg',
        '0001asset_4711.jpg',
        'asset_342.mp4',
      ];
      const sortArray = [
        '0001asset_4711.jpg',
        '001asset_4711.jpg',
        '01asset_0815.png',
        'asset_0001.jpg',
        'asset_001.jpg',
        'asset_151.jpg',
        'asset_342.mp4',
        'asset_47103.jpg',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('unix filenames', () => {
      const origArray = [
        './system/kernel/js/01_ui.core.js',
        './system/kernel/js/00_jquery-1.3.2.js',
        './system/kernel/js/02_my.desktop.js',
      ];
      const sortArray = [
        './system/kernel/js/00_jquery-1.3.2.js',
        './system/kernel/js/01_ui.core.js',
        './system/kernel/js/02_my.desktop.js',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('space(s) as first character(s)', () => {
    const origArray = ['alpha', ' 1', '  3', ' 2', 0];
    const sortArray = [0, ' 1', ' 2', '  3', 'alpha'];
    it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
      expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(sortArray);
    });
  });

  describe('empty strings and space character', () => {
    describe('floats, numbers, strings and empty strings', () => {
      const origArray = ['10023', '999', '', 2, 5.663, 5.6629];
      const sortArray = ['', 2, 5.6629, 5.663, '999', '10023'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('zero as digits and strings and empty strings', () => {
      const origArray = [1, 0, '0', ''];
      const sortArray = ['', 0, '0', 1];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('hex', () => {
    describe('real hex numbers', () => {
      const origArray = ['0xA', '0x9', '0x99'];
      const sortArray = ['0x9', '0xA', '0x99'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('fake hex numbers', () => {
      const origArray = ['0xZZ', '0xVVV', '0xVEV', '0xUU'];
      const sortArray = ['0xUU', '0xVEV', '0xVVV', '0xZZ'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('unicode', () => {
    describe('basic latin', () => {
      const origArray = ['\u0044', '\u0055', '\u0054', '\u0043'];
      const sortArray = ['\u0043', '\u0044', '\u0054', '\u0055'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('latin-1 supplement, default locale', () => {
      const origArray = [
        '\u0073',
        '\u007a',
        '\u00e3',
        '\u0079',
        '\u00e5',
        '\u00df',
        '\u00fD',
        '\u0061',
      ];
      const sortArray = [
        '\u0061',
        '\u00e5',
        '\u00e3',
        '\u0073',
        '\u00df',
        '\u0079',
        '\u00fD',
        '\u007a',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Sorting umlauts characters \xC4, \xD6, \xDC', () => {
      const origArray = [
        'Udet',
        '\xDCbelacker',
        'Uell',
        '\xDClle',
        'Ueve',
        '\xDCxk\xFCll',
        'Uffenbach',
      ];
      const sortArray = [
        '\xDCbelacker',
        'Udet',
        'Uell',
        'Ueve',
        'Uffenbach',
        '\xDClle',
        '\xDCxk\xFCll',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('localeCompare and equal chunks', () => {
      const origArray = ['drüben', 'hüben', 'wie', 'drüben', 'hüben'];
      const sortArray = ['drüben', 'drüben', 'hüben', 'hüben', 'wie'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('diacritics', () => {
      const origArray = ['b', 'd', 'f', 'A', 'Cé', 'E'];
      const sortArray = ['A', 'b', 'Cé', 'd', 'E', 'f'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('sparse array sort', () => {
    describe('simple sparse array', () => {
      const origArray = [
        3,
        2,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        1,
      ];
      const sortArray = [
        1,
        2,
        3,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('alphanumeric sparse array', () => {
      const origArray = [2, 10, 1, 'azd', undefined, 'asd'];
      const sortArray = [1, 2, 10, 'asd', 'azd', undefined];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('case insensitive sort', () => {
    describe('case insensitive pre-sorted array', () => {
      const origArray = ['A', 'b', 'C', 'd', 'E', 'f'];
      const sortArray = ['A', 'b', 'C', 'd', 'E', 'f'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('case insensitive un-sorted array', () => {
      const origArray = ['A', 'C', 'E', 'b', 'd', 'f'];
      const sortArray = ['A', 'b', 'C', 'd', 'E', 'f'];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });

  describe('rosetta code natural sort small test set', () => {
    describe('Ignoring leading spaces', () => {
      const origArray = [
        'ignore leading spaces: 2-2',
        ' ignore leading spaces: 2-1',
        '  ignore leading spaces: 2+0',
        '   ignore leading spaces: 2+1',
      ];
      const sortArray = [
        '  ignore leading spaces: 2+0',
        '   ignore leading spaces: 2+1',
        ' ignore leading spaces: 2-1',
        'ignore leading spaces: 2-2',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Ignoring multiple adjacent spaces (m.a.s)', () => {
      const origArray = [
        'ignore m.a.s spaces: 2-2',
        'ignore m.a.s  spaces: 2-1',
        'ignore m.a.s   spaces: 2+0',
        'ignore m.a.s    spaces: 2+1',
      ];
      const sortArray = [
        'ignore m.a.s   spaces: 2+0',
        'ignore m.a.s    spaces: 2+1',
        'ignore m.a.s  spaces: 2-1',
        'ignore m.a.s spaces: 2-2',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Equivalent whitespace characters', () => {
      const origArray = [
        'Equiv. spaces: 3-3',
        'Equiv.\rspaces: 3-2',
        'Equiv.\x0cspaces: 3-1',
        'Equiv.\x0bspaces: 3+0',
        'Equiv.\nspaces: 3+1',
        'Equiv.\tspaces: 3+2',
      ];
      const sortArray = [
        'Equiv.\x0bspaces: 3+0',
        'Equiv.\nspaces: 3+1',
        'Equiv.\tspaces: 3+2',
        'Equiv.\x0cspaces: 3-1',
        'Equiv.\rspaces: 3-2',
        'Equiv. spaces: 3-3',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Case Indepenent sort', () => {
      const origArray = [
        'cASE INDEPENENT: 3-2',
        'caSE INDEPENENT: 3-1',
        'casE INDEPENENT: 3+0',
        'case INDEPENENT: 3+1',
      ];
      const sortArray = [
        'casE INDEPENENT: 3+0',
        'case INDEPENENT: 3+1',
        'caSE INDEPENENT: 3-1',
        'cASE INDEPENENT: 3-2',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Numeric fields as numerics', () => {
      const origArray = [
        'foo100bar99baz0.txt',
        'foo100bar10baz0.txt',
        'foo1000bar99baz10.txt',
        'foo1000bar99baz9.txt',
      ];
      const sortArray = [
        'foo100bar10baz0.txt',
        'foo100bar99baz0.txt',
        'foo1000bar99baz9.txt',
        'foo1000bar99baz10.txt',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Title sorts', () => {
      const origArray = [
        'The Wind in the Willows',
        'The 40th step more',
        'The 39 steps',
        'Wanda',
      ];
      const sortArray = [
        'The 39 steps',
        'The 40th step more',
        'The Wind in the Willows',
        'Wanda',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
    describe('Equivalent accented characters (and case) case insensitive)', () => {
      const origArray = [
        'Equiv. \xfd accents: 2-2',
        'Equiv. \xdd accents: 2-1',
        'Equiv. y accents: 2+0',
        'Equiv. Y accents: 2+1',
      ];
      const sortArray = [
        'Equiv. y accents: 2+0',
        'Equiv. Y accents: 2+1',
        'Equiv. \xdd accents: 2-1',
        'Equiv. \xfd accents: 2-2',
      ];
      it(`${origArray.toString()} should be returned as ${sortArray.toString()}`, () => {
        expect(origArray.sort(baseCompare({ order: 'asc' }))).toEqual(
          sortArray
        );
      });
    });
  });
});
