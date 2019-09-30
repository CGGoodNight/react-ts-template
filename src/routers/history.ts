import { createHashHistory } from 'history';


const history: any = createHashHistory();

history.open = (localtion: string) => {
  window.open(`${window.location.origin}#${localtion}`);
}

export default history;