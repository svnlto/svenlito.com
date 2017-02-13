import React, { PropTypes } from 'react';
import Radium from 'radium';
import replace from 'string-replace-to-array';

import { breakpoint, colors } from '../constants';

import Container from '../components/Container';
import Column from '../components/Column';
import AnchorLink from '../components/AnchorLink';

const styles = {
  hero: {
    paddingTop: '30px',
    paddingBottom: '20px',

  },
  underline: {
    WebkitTextDecorationColor: colors.pink,
    WebkitTextDecorationLine: 'underline',
    WebkitTextDecorationSkip: 'ink',
    textDecorationColor: colors.pink,
    textDecorationLine: 'underline',
    textDecorationSkip: 'ink'
  },
  link: {
    marginTop: '60px',
    display: 'table',

    [breakpoint.medium]: {
      marginTop: '80px'
    }
  }
};

const Hero = (props) => {
  const { keywords, headline } = props;
  let withKeywords;

  if (keywords) {
    const reg = new RegExp(keywords.join('|'), 'gi');
    withKeywords = replace(props.headline, reg, (word) => (
      <span key={word} style={styles.underline}>{word}</span>
    ));
  }

  return (
    <Container>
      <Column width='full'>
        <div style={styles.hero}>
          <h1>{props.keywords ? withKeywords : headline}</h1>
          {props.link &&
            <span style={styles.link}>
              <AnchorLink link={props.link} text={props.text} />
            </span>
          }
        </div>
      </Column>
    </Container>
  );
};

Hero.propTypes = {
  text: PropTypes.string,
  headline: PropTypes.string,
  link: PropTypes.string,
  keywords: PropTypes.array
};

export default Radium(Hero);
