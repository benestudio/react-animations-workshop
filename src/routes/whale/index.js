// based on https://scratch.mit.edu/projects/16795490/
// and https://github.com/chenglou/react-motion/tree/master/demos/demo1-chat-heads

import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';

const defaultStyles = Array(44).fill(0).map(() => ({x: 0, y: 0}));

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  };

  handleMouseMove = ({ pageX: x, pageY: y }) => {
    this.setState({ x, y });
  };

  handleTouchMove = ({ touches }) => {
    this.handleMouseMove(touches[0]);
  };

  getStyles = (prevStyles) => {
    const stiffness = 1000;
    const damping = 100;
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? {
          x: spring(this.state.x, { stiffness, damping }),
          y: spring(this.state.y, { stiffness , damping }),
        }
        : {
          x: spring(prevStyles[i - 1].x, { stiffness, damping }),
          y: spring(prevStyles[i - 1].y, { stiffness, damping }),
        };
    });
    return endValue;
  };

  render() {
    const height = 1694 / 2;
    const width = 1254 / 2;
    return (
      <StaggeredMotion
        defaultStyles={defaultStyles}
        styles={this.getStyles}>
        {positions => (
          <div>
            {positions.map(({x, y}, i) =>
              <div
                key={i}
                style={{
                  height,
                  width,
                  backgroundImage: `url(/assets/${i+1}.png)`,
                  backgroundSize: '100% 100%',
                  position: 'absolute',
                  WebkitTransform: `translate3d(${x - width/2}px, ${y - height/2}px, 0)`,
                  transform: `translate3d(${x - width/2}px, ${y - height/2}px, 0)`,
                  zIndex: positions.length - i,
                }} />
            )}
          </div>
        )}
      </StaggeredMotion>
    );
  };
}
