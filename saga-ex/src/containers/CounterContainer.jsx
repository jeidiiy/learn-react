import React from 'react';
import { connect } from 'react-redux';
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = state => ({ number: state.counter.number });

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increaseAsync()),
  decrease: () => dispatch(decreaseAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
