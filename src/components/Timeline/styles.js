import { colors, type } from '../../vars';

const styles = {
  wrapper: {
    color: colors.gray,
    fontSize: type.epsilon,
    margin: '0 0 1em 0',
    minHeight: '200px',
    width: '550px'
  },
  title: {
    display: 'inline-block',
    background: colors.blackHighlight,
    fontFamily: type.fontSans,
    padding: '0.1em 0.3em',
    margin: '0 0 .7em 0'
  },
  company: {
    display: 'inline-block',
    fontFamily: type.fontSans,
    fontWeight: 'lighter',
  },
  tag: {
    color: colors.gray,
    display: 'inline-block',
    margin: '0 10px 0 0'
  },
  filterItem: {
    display: 'inline-block',
    margin: '0 15px 0 0',
    fontFamily: type.fontSans,
    fontSize: type.alpha
  },
  opaque: {
    opacity: '.2'
  }
};

export default styles;
