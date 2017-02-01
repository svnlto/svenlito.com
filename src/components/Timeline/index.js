import React, { Component, PropTypes } from 'react';

import TimelineItem from './TimelineItem';
import Container from '../Container';
import Column from '../Column';
import styles from './styles';

class Timeline extends Component {

  constructor(props) {
    super(props);

    this._handleFilter = this._handleFilter.bind(this);
    this._handleShowAll = this._handleShowAll.bind(this);
  }

  _handleFilter(evt) {
    this.props.filterBy(evt.currentTarget.dataset.value);
  }

  _handleShowAll() {
    this.props.showAll();
  }

  _renderFilterTags() {
    return (
      <ul>
        <li key={new Date()} style={styles.filterItem}>
          <span onClick={this._handleShowAll}>{'ALL / '}</span>
        </li>
        {this.props.years.map((item, index) =>
          <li key={index} style={styles.filterItem}>
            <span data-value={item} onClick={this._handleFilter}>
              {item}
              <span key={index}>/</span>
            </span>
          </li>
        )}
      </ul>
    );
  }


  _renderList() {
    return this.props.data.map((item, index) => {
      return (
        <Column width={'half'} key={item.date}>
          <TimelineItem event={item} index={index} />
        </Column>
      );
    });
  }

  render() {
    return (
      <Container>
        <Column width={'full'}><hr /></Column>
        {this._renderList()}
      </Container>
    );
  }
}

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  filterBy: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired
};

export default Timeline;

