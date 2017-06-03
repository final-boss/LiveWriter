class Point {

  constructor(public x: number, public y: number) { }

  offset(offset : Point) : Point {
    return new Point(this.x - offset.x, this.y - offset.y);
  }

  toString() : string {
    return `${this.x},${this.y}`;
  }

  copy() : Point {
    return new Point(this.x, this.y);
  }

  static fromReactPageEvent(event) : Point {
    let { pageX, pageY } = event.nativeEvent;
    return new Point(pageX, pageY);
  }

  static fromReactLayoutEvent(event) : Point {
    let { x, y } = event.nativeEvent.layout;
    return new Point(x, y);
  }

  static origin() : Point {
    return new Point(0, 0);
  }

  static default() : Point {
    return this.origin();
  }
}

export default Point;
