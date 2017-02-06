import React, { PropTypes } from 'react';
import Radium from 'radium';

import { colors } from '../vars';
import { getRandomPinkArray } from '../utils';


const TagList = (props) => {

  const styles = {
    tags: {
      display: 'inline-block',
      padding: '10px 0'
    },
    tag: {
      display: 'inline-block',
      margin: '0 10px 0 0'
    },
    tagFirst: {
      color: colors.whiteDark20
    }
  };

  const { data } = props;
  const color = getRandomPinkArray(data.tags.length);

  return (
    <ul style={styles.tags}>
      <li key={'xyz'} style={[styles.tag, styles.tagFirst]}>
        {'Technologies used:'}
      </li>
      {data.tags.map((extra, index) =>
        <li style={[styles.tag, { color: color[index] }]} key={index}>
          {extra}
        </li>
      )}
    </ul>
  );
};

TagList.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.array.isRequired
  })
};

export default new Radium(TagList);
