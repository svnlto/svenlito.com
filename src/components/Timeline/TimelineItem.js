import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';
import replace from 'string-replace-to-array';

import { color } from '../../vars';
import styles from './styles';

const Line = (props) => (
  <div style={(props.isEven % 2 && styles.svgLineEven) || styles.svgLine}>
    <svg viewBox='0 0 100 100'>
      <g>
        <line x1='1' y1='1' x2='100' y2='1' strokeWidth='2' stroke={color.darkGray} />
      </g>
    </svg>
  </div>
);

Line.propTypes = {
  isEven: PropTypes.bool.isRequired
};

class TimelineItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    const { desc, date, title, company, extras } = this.props.event;
    const { even } = this.props;

    const renderDescription = desc => desc.map((d, i) => <p key={i}>{d}</p>);
    const renderCompanyDesc = company => {
      const { desc, name } = company;
      return replace(desc, name, (company) => (
        <span key={company.length} style={styles.company}>{company}</span>
      ));
    };

    const renderEventTime = date => {
      return (
        <time style={styles.date}>
          {moment(date).format('MMM YYYY')}
        </time>
      );
    };

    return (
      <li style={[styles.event]} >
        <Line isEven={even} />
        <div
          style={[
            styles.section,
            (even % 2 && styles.eventEven) || styles.eventOdd
          ]}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <h2 style={styles.title}>
            {title} &bull; {company.name}
          </h2>
          <p>{renderCompanyDesc(company)}</p>
          {renderDescription(desc)}
          <ul>
            {extras.tags.map((extra, index) => {
              return (<li style={styles.tag} key={index}>{extra}</li>);
            })}
          </ul>
          <div>{this.state.hover ? renderEventTime(date) : null }</div>
        </div>
      </li>
    );
  }
}

TimelineItem.propTypes = {
  desc: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  extras: PropTypes.object,
  event: PropTypes.object,
  even: PropTypes.bool
};

export default new Radium(TimelineItem);
