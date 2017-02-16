import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Page from '../components/Page';
import Container from '../components/Container';
import Column from '../components/Column';
import Timeline from '../components/Timeline';
import Hero from '../components/Hero';
import HeroSub from '../components/HeroSub';

import { filterBy, showAll } from '../actions';

const select = (state) => {
  const events = state.events.data;
  const years = state.events.years;
  return { events, years };
};

@Page @connect(select)
class Work extends Component {

  constructor() {
    super();

    this._handleFilter = this._handleFilter.bind(this);
    this._handleShowAll = this._handleShowAll.bind(this);
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
              keywords={['design', 'deliver', 'adapt', 'software development', 'across platforms']}
              headline='I help clients design, adapt and deliver projects through
              modern software development methodolgies and techniques across platforms.
              '
            />
            <HeroSub
              headline='Areas I have worked in include containerisation, real-time communications,
              memory forensics, offline-first, as well as mobile and game development.'
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
  events: PropTypes.array,
  dispatch: PropTypes.func,
  years: PropTypes.array
};

export default Work;

