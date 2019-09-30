import React, {PureComponent} from 'react';
import { Button } from "antd";
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
        <h1>Ant Design(定制主题更多样式请点击)</h1>
        <Button
          href="https://ant.design/docs/react/customize-theme-cn"
          target="__blank"
          type="primary"
        >
          Ant Design
        </Button>
      </div>
    );
  }
}

export default Home;