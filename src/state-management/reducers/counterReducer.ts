import React from "react";

interface Action {
  type: "INCREMENT" | "RESET";
}

const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
  }
  /*
   * Note: When using TS union for `type` (instead of string) a
   * default case isn't necessary since tsc will ensure that any
   * action object passed to the dispatch fn for this reducer
   * will have one of the expected values.
   */
};

export default counterReducer;
