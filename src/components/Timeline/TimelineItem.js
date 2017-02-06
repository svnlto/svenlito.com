import React, { PropTypes } from 'react';
import Radium from 'radium';

import styles from './styles';
import TagList from '../TagList';

const TimelineItem = (props) => {

  const { desc, title, company, extras } = props.event;

  const renderDescription = desc => desc.map((item, index) => <p key={index}>{item}</p>);

  return (
    <div style={[styles.section]}>
      <h2 style={styles.title}>{title} &bull; {company.name}</h2>
      <div style={styles.wrapper}>
        <p>{company.desc}</p>
        {renderDescription(desc)}
        <TagList data={extras} />
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  desc: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  extras: PropTypes.object,
  event: PropTypes.object
};

export default new Radium(TimelineItem);
