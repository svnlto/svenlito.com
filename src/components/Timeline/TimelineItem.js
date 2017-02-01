import React, { Component, PropTypes } from 'react';
import replace from 'string-replace-to-array';
import Radium from 'radium';

import styles from './styles';

class TimelineItem extends Component {

  render() {
    const { desc, title, company, extras } = this.props.event;

    const renderDescription = desc => desc.map((d, i) => <p key={i}>{d}</p>);
    const renderCompanyDesc = company => {
      const { desc, name } = company;
      return replace(desc, name, (company) => (
        <span key={company.length} style={styles.company}>{company}</span>
      ));
    };
    const renderTags = extras => {
      return (
        <ul>
          <li key={'xyz'} style={[styles.tag]}>{'Technologies used:'}</li>
          {extras.tags.map((extra, index) =>
            <li style={styles.tag} key={index}>{extra}</li>
          )}
        </ul>
      );
    };

    return (
      <div style={[styles.section]}>
        <h2
          ref={node => this.node = node}
          style={styles.title}
        >{title} &bull; {company.name}</h2>
        <div style={styles.wrapper}>
          <p>{renderCompanyDesc(company)}</p>
          {renderDescription(desc)}
          {renderTags(extras)}
        </div>
      </div>
    );
  }
}

TimelineItem.propTypes = {
  desc: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  extras: PropTypes.object,
  event: PropTypes.object
};

export default new Radium(TimelineItem);
