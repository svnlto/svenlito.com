import React, { Component, PropTypes } from 'react';

class ColorCursor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      colorIndices: [0, 1, 2, 3],
      gradientSpeed: 0.02,
      colors: [
        [62, 35, 255],
        [60, 255, 60],
        [255, 35, 98],
        [45, 175, 230],
        [255, 0, 255],
        [255, 128, 0]
      ]
    };

    this._makeCursor = this._makeCursor.bind(this);
    this._updateGradient = this._updateGradient.bind(this);
  }

  componentDidMount() {
    setInterval(this._updateGradient, this.props.interval);
  }

  _makeCursor(colorFrom, colorTo) {
    const cursor = document.createElement('canvas');
    const ctx = cursor.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 15, 15);
    const node = this.node;

    cursor.width = 15;
    cursor.height = 15;

    gradient.addColorStop(0, colorFrom);
    gradient.addColorStop(1, colorTo);

    ctx.fillStyle = this.props.color;
    ctx.fillRect(0, 0, 15, 15);

    node.style.cursor = `url(${cursor.toDataURL()}), auto`;
  }

  _updateGradient() {
    const { gradientSpeed, colorIndices, colors } = this.state;
    let { step } = this.state;

    const c00 = colors[colorIndices[0]];
    const c01 = colors[colorIndices[1]];
    const c10 = colors[colorIndices[2]];
    const c11 = colors[colorIndices[3]];

    const istep = 1 - step;

    const r1 = Math.round((istep * c00[0]) + (step * c01[0]));
    const g1 = Math.round((istep * c00[1]) + (step * c01[1]));
    const b1 = Math.round((istep * c00[2]) + (step * c01[2]));
    const color1 = `rgba(${r1},${g1},${b1}, .7)`;

    const r2 = Math.round((istep * c10[0]) + (step * c11[0]));
    const g2 = Math.round((istep * c10[1]) + (step * c11[1]));
    const b2 = Math.round((istep * c10[2]) + (step * c11[2]));
    const color2 = `rgba(${r2},${g2},${b2}, .7)`;


    if (step >= 1) {
      this.setState({ step: this.state.step %= 1 });

      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      // pick two new target color indices
      // do not pick the same as the current one
      colorIndices[1] = (
        colorIndices[1] + Math.floor(1 + (Math.random() * (colors.length - 1)))
      ) % colors.length;
      colorIndices[3] = (
        colorIndices[3] + Math.floor(1 + (Math.random() * (colors.length - 1)))
      ) % colors.length;
    } else {
      this.setState({
        step: step += gradientSpeed
      });
    }

    this._makeCursor(color1, color2);
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
  interval: 1000,
  color: 'pink'
};

ColorCursor.propTypes = {
  children: PropTypes.array,
  color: PropTypes.string,
  interval: PropTypes.number
};

export default ColorCursor;
