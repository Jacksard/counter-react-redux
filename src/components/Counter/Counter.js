import React, { Component } from 'react';
import { connect } from 'react-redux';
import './counter.css';

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="counter">{this.props.counter}</h3>
        <br />
        <div className="button" onClick={this.props.onIncrement}>
          Increment (+)
        </div>
        <br />
        <div className="button" onClick={this.props.onDecrement}>
          Decrement (-)
        </div>
        <br />
        <div className="button" onClick={this.props.onReset}>
          Reset
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onReset: () => dispatch({ type: 'RESET' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
