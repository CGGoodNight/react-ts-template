import * as languageType from "./constants";
import {ActionBo} from "../../models/bo/actionBo";

const initState = {
  language: "zh"
};

export default (state=initState, action: ActionBo) => {
  switch(action.type) {
    case languageType.SWITCH_LANGUAGE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.language = action.payload.language;
      return newState;
    }
    default: return state;
  }
}