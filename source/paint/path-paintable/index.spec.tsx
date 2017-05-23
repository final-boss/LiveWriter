import 'react-native';
import 'jest';
import PathPaintable from './';
import Point         from '../point';

describe(PathPaintable.name, () => {
  let subject : PathPaintable;

  beforeAll(() => {
    subject = new PathPaintable();
  });

  describe('#d', () => {

    describe('with points', () => {
      let offset  = new Point(5, 5),
          coords  = [ [10, 10], [15, 15], [20, 20] ],
          points  = coords.map((coord) => new Point(coord[0], coord[1])),
          mDef    = `M 5,5`,
          lDef    = `L 5,5 L 10,10 L 15,15`,
          def     = [mDef, lDef].join(' ');

      subject = new PathPaintable(points, offset);

      let d = subject.d();

      it('should return empty definition', () => {
        expect(d).toEqual(def);
      });
    });
    describe('with no points', () => {

      it('should return empty definition', () => {
        expect(subject.d()).toEqual('');
      });
    });
  });

  describe('#copy', () => {

    it('should copy paintable', () => {
      let copy = subject.copy();
      expect(copy).toEqual(subject);
      expect(copy).not.toBe(subject);
    });
  });

  describe('#toElement', () => {
    let key : jest.SpyInstance<() => number>;
    let d   : jest.SpyInstance<() => string>;

    beforeAll(() => {
      key = jest.spyOn(subject, 'key');
      d   = jest.spyOn(subject, 'd');
    });

    it('should render path', () => {
      expect(subject.toElement()).toBeDefined();
      expect(key).toHaveBeenCalled();
      expect(d).toHaveBeenCalled();
    });
  });

});
