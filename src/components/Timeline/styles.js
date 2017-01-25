import { color, breakpoint, type } from '../../vars';

const styles = {
  eventOdd: {
    left: '45px'
  },
  eventEven: {
    left: '-639px',

    [breakpoint.small]: {
      left: '45px'
    }
  },
  event: {
    fontSize: type.epsilon,
    position: 'relative',
    width: '2px',
    margin: '0 auto',
    paddingTop: '50px',
    background: color.darkGray,

    [breakpoint.small]: {
      marginLeft: '20px'
    }
  },
  svgLine: {
    position: 'relative',
    width: '46px',
    padding: 0,
    height: '7px',
    top: '36px'
  },
  svgLineEven: {
    left: '-40px',
    position: 'relative',
    width: '40px',
    padding: 0,
    height: '7px',
    top: '36px',
  },
  section: {
    position: 'relative',
    bottom: 0,
    width: '600px',
    padding: '1rem',
    border: `1px solid ${color.darkGray}`,
    overflow: 'hidden'
  },
  title: {
    fontFamily: type.fontSans,
    fontWeight: 'lighter',
    textDecoration: 'underline',
    textDecorationSkip: 'ink',
    textDecorationColor: color.green,
    margin: '0 0 .7em 0'
  },
  company: {
    display: 'inline-block',
    fontFamily: type.fontSans,
    fontWeight: 'lighter',
  },
  date: {
    margin: '4px',
    fontWeight: 'normal',
    fontSize: '.8em'
  },
  tag: {
    display: 'inline-block',
    margin: '0 10px 0 0'
  }
};

export default styles;
