"use strict";
import React from "react";
import { Context, Dispatcher, StoreGroup } from "almin";
import { CounterStore } from "../store/CounterStore";
import Counter from "./Counter";

const dispatcher = new Dispatcher();

const counterStore = new CounterStore();

const storeGroup = new StoreGroup({
  "counter": counterStore
});

const appContext = new Context({
  dispatcher,
  store: storeGroup
});

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = appContext.getState();
  }

  componentDidMount() {
      // when change store, update component
      const onChangeHandler = () => {
          this.setState(appContext.getState());
      };
      appContext.onChange(onChangeHandler);
  }

  render() {
    /**
     * Where is "CounterState" come from?
     * It is `key` of counterStore in StoreGroup.
     *
     * ```
     * const storeGroup = new StoreGroup({
     *   "counter": counterStore
     * });
     * ```
     * @type {CounterState}
     */
    const counterState = this.state.counter;
    //return <div>Hello</div>;
    return <Counter
              appContext={appContext}
              counterState={counterState}
    />;
  }
}


