"use strict";

export default class CounterState {
  constructor({ count }) {
    this.count = count;
  }

  reduce(payload) {
    switch(payload.type) {
      case 'increment':
        return new CounterState({
          count: this.count + 1
        });

      default:
        return this;
    }
  }
}

