import React from 'react';
import TimelineItem from './TimelineItem';
import data from '../../data/events.json';

import Container from '../Container';
import Column from '../Column';

const Timeline = () => {
  return (
    <Container>
      <Column width='full'>
        <ul>
          {data.map((item, index) => {
            const isEven = (index % 2 === 0);
            return (
              <TimelineItem
                even={isEven}
                event={item}
                key={index}
                index={index}
              />
            );
          })}
        </ul>
      </Column>
    </Container>
  );
};

export default Timeline;

