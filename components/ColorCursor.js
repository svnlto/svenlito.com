import React, { Component, PropTypes } from 'react';

class ColorCursor extends Component {

  constructor(props) {
    super(props);

    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const cursor = document.createElement('canvas');
    const ctx = cursor.getContext('2d');
    const node = this.node;
    const { color } = this.props;
    const radius = 15 / 2;


    cursor.width = radius * 2;
    cursor.height = radius * 2;

    // reactagle
    // ctx.fillStyle = this.props.color;
    // ctx.fillRect(0, 0, 15, 15);

    // circle
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();

    node.style.cursor = `url(${cursor.toDataURL()}), auto`;
  }

  render() {
    return (
      <div ref={node => this.node = node}>
        {this.props.children}
      </div>
    );
  }

}

ColorCursor.defaultProps = {
  color: 'pink'
};

ColorCursor.propTypes = {
  children: PropTypes.array,
  color: PropTypes.string
};

export default ColorCursor;
