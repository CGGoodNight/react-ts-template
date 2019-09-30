import React, {PureComponent} from 'react';
import './index.scss';
import "./index.less";

interface Props {};
interface State{};

class Home extends PureComponent<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {}
  }
  public render() {
    return (
      <div className="home">
        <h1>Sass</h1>
        <p className="style-sass">HomePage</p>
        <h1>Less</h1>
        <p className="style-less">HomePage</p>
      </div>
    );
  }
}

export default Home;