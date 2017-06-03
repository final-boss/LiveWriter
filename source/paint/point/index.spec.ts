import 'react-native';
import 'jest';
import Point from './';

describe(Point.name, () => {
  let subject : Point;

  beforeAll(() => {
    subject = new Point(0, 0);
  });

  describe('.fromReactEvent', () => {

    let [x, y]     = [10, 82],
        eventPoint = new Point(x, y),
        event      = { nativeEvent: { pageX: x, pageY: y } };

    it('should return point from event', () => {
      let point = Point.fromReactEvent(event);
      expect(point).toEqual(eventPoint);
    });
  });

  describe('.origin', () => {

    it('should return 0,0', () => {
      expect(Point.origin()).toEqual(subject);
    });
  });

  describe('.default', () => {
    let origin : jest.SpyInstance<any>;

    beforeAll(() => {
      origin = jest.spyOn(Point, 'origin');
    });

    it('should return 0,0', () => {
      expect(Point.default()).toEqual(subject);
      expect(origin).toHaveBeenCalled();
    });
  });

  describe('#offset', () => {

    let [x, y]      = [79, 23],
        offsetParam = new Point(3, 3),
        offsetPoint = new Point(76, 20);

    beforeAll(() => {
      subject.x = x;
      subject.y = y;
    });

    it('should return offsetted point', () => {
      let offset = subject.offset(offsetParam);
      expect(offset).toEqual(offsetPoint);
    });
  });

  describe('#toString', () => {

    let [x, y] = [100.4287, 57.8760],
        str    = `${x},${y}`;

    beforeAll(() => {
      subject.x = x;
      subject.y = y;
    });

    it('should return point as string', () => {
      expect(subject.toString()).toEqual(str);
    });
  });

  describe('#copy', () => {

    let [x, y] = [79, 23];

    beforeAll(() => {
      subject.x = x;
      subject.y = y;
    });

    it('should return new point', () => {
      let copy = subject.copy();
      expect(copy).toEqual(subject);
      expect(copy).not.toBe(subject);
    });
  });

});
