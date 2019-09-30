import React, {PureComponent} from 'react';
import { Button } from "antd";
import { connect } from "react-redux";
import * as Action from "./action";
import history from "../../routers/history";
import axios from "axios";
import './index.scss';
import "./index.less";

interface Props {
  count: number;
  addCount: () => void;
};
interface State{
  name: string;
  version: string;
};

class Home extends PureComponent<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      name: "",
      version: "",
    }
  }
  public  fetchVersion = () => {
    axios({
      method: "GET",
      url: "/fetchVersion",
      data: {}
    }).then(res => {
      this.setState({
        name: res.data.data.name,
        version: res.data.data.version
      });
    }).catch(err => {
      console.log(err);
    });
  };
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
        <h1>React-Router</h1>
        <Button
          onClick={() => {
            history.push("/notFound");
          }}
        >
          NotFound Page
        </Button>
        <h1>嵌套路由（在react-js-template中查看）</h1>
        <Button type="primary" href="https://github.com/CGGoodNight/react-js-template" target="__blank">点击前往</Button>
        <h1>React-Redux(saga thunk 自己安装配置即可 , 模版已经搭好)</h1>
        count: {this.props.count}
        <Button onClick={() => this.props.addCount()}>+</Button>
        <h1>Mock & axios</h1>
        <Button onClick={this.fetchVersion}>获取版本</Button>
        <p>name: {this.state.name ? this.state.name : "默认"}</p>
        <p>version: {this.state.version ? this.state.version : "默认"}</p>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  count: state.homeReducer.count
});
const mapDispatchToProps = (dispatch: any) => ({
  addCount() {
    dispatch(Action.addCount());
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);