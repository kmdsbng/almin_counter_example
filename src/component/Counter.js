"use strict";
import React from "react";
import PropTypes from "prop-types";
import { Context } from "almin";
import CounterState from "../store/CounterState";
import IncrementalCounterUseCase from "../usecase/IncrementalCounterUseCase";

export default class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  incrementCounter() {
    const context = this.props.appContext;
    context.useCase(new IncrementalCounterUseCase()).execute();
  }

  render() {
    const counterState = this.props.counterState;
    return (
      <div>
        <button onClick={this.incrementCounter.bind(this)}>Increment Counter</button>
        <p>
          Count: {counterState.count}
        </p>
      </div>
    );
  }
}

CounterComponent.propTypes = {
  appContext: PropTypes.instanceOf(Context).isRequired,
  counterState: PropTypes.instanceOf(CounterState).isRequired
};
