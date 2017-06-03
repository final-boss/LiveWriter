import { View,
         PanResponder,
         PanResponderInstance,
         StyleSheet
       }             from 'react-native';
import React         from 'react';
import Svg, { G }    from 'react-native-svg';
import Point         from '../../paint/point';
import Paintable     from '../../paint/paintable';
import PathPaintable from '../../paint/path-paintable';

export interface Shape { }
export interface Props { }
export interface State {
  shapes    : Shape[],
  paintable : Paintable
}

const styles : any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center'
  },
  surface: {
    width: '100%',
    height: '100%',
  }
});

export default class PaintView extends React.Component<Props, State> {

  responder : PanResponderInstance;

  constructor(props, context) {
    super(props, context);
    this.state = {
      shapes    : [],
      paintable : new PathPaintable()
    };
  }

  componentWillMount() {
    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder:  () => true,
      onPanResponderGrant:         (e) => this.onPaint(e),
      onPanResponderMove:          (e) => this.onPaint(e),
      onPanResponderRelease:        ()  => this.onPaintDone()
    });
  }

  onPaint(event) {
    const paintable = this.state.paintable.copy();
    paintable.points.push(
      Point.fromReactEvent(event)
    );
    this.setState({ paintable: paintable });
  }

  onPaintDone() {
    const paintable = this.state.paintable.copy();
    const shapes    = this.state.shapes;
    shapes.push(
      paintable.toKeyedElement()
    );
    this.setState({
      paintable: new PathPaintable(),
      shapes:    shapes
    });
  }

  onLayout(event) {
    let { x, y } = event.nativeEvent.layout;
    Paintable.globalOffset = new Point(x, y);
    this.state.paintable.resetOffset();
  }

  render() {
    return (
      <View {...this.responder.panHandlers}
            onLayout={this.onLayout.bind(this)}
            style={styles.container}>
        <Svg style={styles.surface}>
          <G>
            {this.state.paintable.toElement()}
            {this.state.shapes}
          </G>
        </Svg>
      </View>
    );
  }
}
