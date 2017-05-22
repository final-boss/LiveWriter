class Point {

  constructor(public x: number, public y: number) { }

  offset(offset : Point) : Point {
    return new Point(this.x - offset.x, this.y - offset.y);
  }

  toString() : string {
    return `${this.x},${this.y}`;
  }

  static fromReactEvent(event) : Point {
    return new Point(
      event.nativeEvent.pageX, event.nativeEvent.pageY
    );
  }
}

export default Point;
