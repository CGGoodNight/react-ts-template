import * as languageType from "./constants";
import { LanguageBo } from "../../models/bo/languageBo";

export interface SwitchLanguage {
  type: languageType.SWITCH_LANGUAGE;
  payload: LanguageBo
}


export function switchLanguage(payload: LanguageBo): SwitchLanguage {
  return {
    type: languageType.SWITCH_LANGUAGE,
    payload,
  }
}