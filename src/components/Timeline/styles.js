import { breakpoint, colors, type } from '../../vars';

const styles = {
  wrapper: {
    color: colors.whiteDark10,
    fontSize: type.epsilon,
    margin: '0 0 3em 0',

    [breakpoint.medium]: {
      width: '550px',
    }
  },
  title: {
    display: 'inline-block',
    background: colors.blackHighlight,
    color: colors.white,
    fontFamily: type.fontSans,
    padding: '0.1em 0.3em',
    margin: '0 0 .7em -10px'
  },
  company: {
    display: 'inline-block',
    fontFamily: type.fontSans,
    fontWeight: 'lighter',
  }
};

export default styles;
