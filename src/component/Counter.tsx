"use strict";
import * as React from "react";
import PropTypes from "prop-types";
import { Context } from "almin";
import { CounterStore } from "../store/CounterStore";
import { CounterState } from "../store/CounterState";
import IncrementalCounterUseCase from "../usecase/IncrementalCounterUseCase";

// copy from almin/UILayer/StoreGroupTypes"
declare type StateMap<T> = {
    [P in keyof T]: T[P];
};

export interface CounterComponentProps {
  appContext: Context<StateMap<{ "counter": any; }>>;
  counterState: CounterState;
};

export default class CounterComponent extends React.Component<CounterComponentProps, undefined> {
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

