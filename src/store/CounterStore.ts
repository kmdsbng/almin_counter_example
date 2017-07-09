"use strict";
import { Store } from "almin";
import { CounterState } from "./CounterState";

export class CounterStore extends Store {
  constructor() {
    super();
    this.state = new CounterState({
      count: 0
    });
  }

  receivePayload(payload) {
    this.setState(this.state.reduce(payload));
  }

  getState() {
    return this.state;
  }
}

