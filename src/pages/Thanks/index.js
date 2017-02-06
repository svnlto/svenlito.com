import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import Column from '../../components/Column';

class Thanks extends Component {

  componentWillMount() {
    document.body.style.backgroundColor = this.props.theme.primary;
    document.body.style.color = this.props.theme.secondary;
  }

  render() {
    return (
      <div>
        <Hero headline='Thanks for getting in touch!' />
        <Container>
          <Column title="I'll make sure to reply as soon as possible." />
        </Container>
      </div>
    );
  }
}

Thanks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

const select = (state) => {
  const theme = state.app.theme;
  return { theme };
};

export default connect(select)(Thanks);
