import Paintable from '../paintable';
import React     from 'react';
import { Path }  from 'react-native-svg';

class PathPaintable extends Paintable {

  d() : string {
    if (this.points.length == 0) { return '' }
    let points  = this.offsetPoints();
    let pointDs = points.map(
      (point) => `L ${point.toString()}`
    );
    return [
      `M ${points[0].toString()}`, ...pointDs
    ].join(' ');
  }

  copy() : PathPaintable {
    return new PathPaintable(this.points, this.offset);
  }

  toElement() {
    return (
      <Path key={this.key()}
            d={this.d()}
            stroke={'#000'}
            strokeWidth={3}
            fill='none' />
    )
  }
}

export default PathPaintable;
