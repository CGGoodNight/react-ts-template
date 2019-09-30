import * as homeType from "./constants";
import {ActionBo} from "../../models/bo/actionBo";

const initState = {
  count: 0
};

export default (state=initState, action: ActionBo) => {
  switch(action.type) {
    case homeType.ADD_COUNT: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.count = newState.count + 1;
      return newState;
    }
    default: return state;
  }
}