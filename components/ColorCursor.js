import React, { Component, PropTypes } from 'react';

class ColorCursor extends Component {

  constructor(props) {
    super(props);

    this._makeCursor = this._makeCursor.bind(this);
  }

  componentDidMount() {
    this._makeCursor();
  }

  _makeCursor() {
    const cursor = document.createElement('canvas');
    const ctx = cursor.getContext('2d');
    const node = this.node;

    cursor.width = 15;
    cursor.height = 15;
    ctx.fillStyle = this.props.color;
    ctx.fillRect(0, 0, 15, 15);

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
