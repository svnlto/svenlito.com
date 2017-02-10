import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Timeline from '../../components/Timeline';
import Hero from '../../components/Hero';
import HeroSub from '../../components/HeroSub';

import { filterBy, showAll } from '../../actions';

class Work extends Component {

  constructor() {
    super();

    this._handleFilter = this._handleFilter.bind(this);
    this._handleShowAll = this._handleShowAll.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundColor = this.props.theme.primary;
    document.body.style.color = this.props.theme.secondary;
  }

  _handleFilter(value) {
    this.props.dispatch(filterBy(value));
  }
  _handleShowAll() {
    this.props.dispatch(showAll());
  }

  render() {
    const { years, events } = this.props;

    return (
      <div>
        <Container>
          <Column width='full'>
            <Hero
              keywords={['design', 'deliver', 'adapt']}
              headline='I have helped clients across a number of industries
              design, adapt and deliver projects through real-time communications,
              memory forensics, containerisation, and mobile platforms.'
            />
            <HeroSub
              headline=''
            />
            <Timeline
              years={years}
              data={events}
              showAll={this._handleShowAll}
              filterBy={this._handleFilter}
            />
          </Column>
        </Container>
      </div>
    );
  }
}

Work.propTypes = {
  events: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  years: PropTypes.array
};

const select = (state) => {
  const events = state.events.data;
  const theme = state.app.theme;
  const years = state.events.years;
  return { events, theme, years };
};

export default connect(select)(Work);

