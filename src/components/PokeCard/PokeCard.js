import React, { Component } from 'react';
import './PokeCard.css';

export default class PokeCard extends Component {
  render() {
    return (
      <div className="poke-card">
        <h2>{this.props.type}</h2>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  types: state.types
});
