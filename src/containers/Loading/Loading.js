import React, { Component } from 'react';
import { connect } from 'react-redux';
import pikachu from '../../images/loading.gif';
import './Loading.css';

class Loading extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div>
        {!this.props.types.length && (
          <img className="loading-gif" src={pikachu} alt="loading screen" />
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  types: state.types
});

export default connect(
  mapStateToProps,
  null
)(Loading);
