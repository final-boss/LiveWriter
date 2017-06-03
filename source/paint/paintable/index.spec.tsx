import 'react-native';
import 'jest';
import Paintable from './';
import Point     from '../point';

class PaintableSubclass extends Paintable {
  copy() : PaintableSubclass {
    return null;
  }
  toElement() : JSX.Element {
    return null;
  }
}

describe(PaintableSubclass.name, () => {
  let subject : PaintableSubclass;

  beforeAll(() => {
    subject = new PaintableSubclass();
  });

  describe('constructor', () => {

    describe('default attributes', () => {
      let defaultAttributes = {
        points: [],
        offset: Paintable.globalOffset.copy(),
        final:  false
      };

      it('should have initial attributes', () => {
        expect(subject).toEqual(defaultAttributes);
      });
    });

    describe('default offset', () => {
      beforeAll(() => {
        Paintable.globalOffset = new Point(200, 10);
        subject = new PaintableSubclass();
      });

      afterAll(() => {
        Paintable.globalOffset = Point.default();
      });

      it('should have copy of global offset point', () => {
        expect(subject.offset).toEqual(Paintable.globalOffset);
        expect(subject.offset).not.toBe(Paintable.globalOffset);
      });
    });
  });

  describe('#addPoint', () => {
    let [x, y] = [10, 82],
        point  = new Point(x, y),
        event  = { nativeEvent: { pageX: x, pageY: y } };

    beforeAll(() => { subject.addPoint(event); });

    it('should add new point from event', () => {
      expect(subject.points[0]).toEqual(point);
      expect(subject.points.length).toEqual(1)
    });
  });

  describe('#offsetPoints', () => {
    let offset  = new Point(5, 5),
        coords  = [ [0, 0], [1, 1], [2, 2] ],
        points  = coords.map((coord) => new Point(coord[0], coord[1])),
        offsets = points.map((point) => point.offset(offset));

    subject = new PaintableSubclass(points, offset);

    let offsetPoints = subject.offsetPoints();

    it('should offset points with offset', () => {
      expect(offsetPoints).toEqual(offsets);
    });
  });

  describe('#resetOffset', () => {

    beforeAll(() => {
      Paintable.globalOffset = new Point(100, 40);
      subject.resetOffset();
    });

    afterAll(() => {
      Paintable.globalOffset = Point.default();
    });

    it('should offset point to copy of current global offset', () => {
      expect(subject.offset).toEqual(Paintable.globalOffset);
      expect(subject.offset).not.toBe(Paintable.globalOffset);
    });
  });

  describe('#key', () => {
    let keyCount = 500;

    beforeAll(() => {
      Paintable.keyCounter = keyCount;
    });

    describe('not finalized', () => {
      it('should return zero', () => {
        expect(subject.key()).toEqual(0);
      });
    });

    describe('finalized', () => {
      beforeAll(() => {
        subject.final = true;
      });

      it('should return incremented key counter', () => {
        let key = subject.key();

        expect(key).toEqual(keyCount + 1);
        expect(PaintableSubclass.keyCounter).toEqual(key);
      });
    });

    describe('undefined', () => {
      let error = Paintable.keyError;

      beforeAll(() => {
        subject.final = undefined;
      });

      it('should raise key error', () => {
        expect(subject.key).toThrow(error);
      });
    });
  });

  describe('#toKeyedElement', () => {
    let toElement : jest.SpyInstance<() => JSX.Element>;

    beforeAll(() => {
      toElement = jest.spyOn(subject, 'toElement')
      subject.toKeyedElement();
    });

    it('should return finalized element', () => {
      expect(toElement).toHaveBeenCalled();
      expect(subject.final).toBe(undefined);
    });
  });

  describe('#copy', () => {
    expect(subject.copy).toBeDefined()
  });

  describe('#toElement', () => {
    expect(subject.toElement).toBeDefined()
  });

});
