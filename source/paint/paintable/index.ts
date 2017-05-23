import Point from '../point';

abstract class Paintable {

  points : Point[]
  offset : Point
  final  : boolean

  static keyCounter : number = 0;
  static keyError   : string = 'Paint Element already rendered!';

  constructor(points = [], offset = Point.default()) {
    this.points = points;
    this.offset = offset;
    this.final  = false;
  }

  addPoint(event : any) {
    let nativeEvent = event.nativeEvent;
    let point       = new Point(nativeEvent.pageX, nativeEvent.pageY);
    this.points.push(point);
  }

  offsetPoints() : Point[] {
    return this.points.map(
      (point) => point.offset(this.offset)
    );
  }

  key() : number {
    let key = 0;
    switch (this.final) {
      case undefined: { throw new Error(Paintable.keyError); }
      case true:      { key = ++Paintable.keyCounter; }
    }
    return key;
  }

  toKeyedElement() {
    this.final  = true;
    let element = this.toElement();
    this.final  = undefined;
    return element;
  }

  abstract copy() : Paintable;

  abstract toElement() : JSX.Element;
}

export default Paintable;
