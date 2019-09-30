import * as homeType from "./constants";

export interface AddCount {
  type: homeType.ADD_COUNT;
}
export function addCount(): AddCount {
  return {
    type: homeType.ADD_COUNT
  };
}
