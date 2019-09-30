import React, {PureComponent} from 'react';
import { Button, DatePicker } from "antd";
import { connect } from "react-redux";
import * as Action from "./action";
import history from "../../routers/history";
import axios from "axios";
import * as languageAction from "../LocaleProvider/action";
import { LanguageBo } from "../../models/bo/languageBo";
import languageType from "../../constants/languageType";
import { FormattedMessage, injectIntl } from "react-intl";
import './index.scss';
import "./index.less";

interface Props {
  count: number;
  language: string;
  intl: any;
  addCount: () => void;
  switchLanguage: (payload: LanguageBo) => void;
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
  public handleSwitchLanguage = () => {
    this.props.switchLanguage({ language: this.props.language === "zh" ? languageType.EN : languageType.ZH });
  };
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
    const { messages } = this.props.intl;
    const { intl } = this.props;
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
        <Button onClick={() => {history.open("/notFound")}}>
          新标签页打开 NotFound Page
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
        <h1>react-intl 实现国际化 & Antd ConfigProvider</h1>
        <p>通过注入props(无参)</p>
        <Button onClick={this.handleSwitchLanguage}>
          {messages["home.switchLanguage"]}
        </Button>
        <p>
          通过FormattedMessage:{" "}
          <FormattedMessage
            id="home.introduce"
            values={{ age: 17, name: <span className="name">Evelyn</span> }}
          />
        </p>
        <p>
          通过注入props(有参, 不能像FormattedMessage那样传递jsx):{" "}
          {intl.formatMessage(
            { id: "home.introduce" },
            { age: 17, name: "Evelyn" }
          )}
        </p>
        <div>
          <p>Antd</p>
          <DatePicker />
        </div>
        <h1>支持Hooks(react 16.8 +)</h1>
        <Button href="https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/hooks-intro.html" target="__blank" type="primary">学习Hook</Button>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  count: state.homeReducer.count,
  language: state.languageReducer.language
});
const mapDispatchToProps = (dispatch: any) => ({
  addCount() {
    dispatch(Action.addCount());
  },
  switchLanguage(payload: LanguageBo) {
    dispatch(languageAction.switchLanguage(payload));
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(injectIntl(Home as any));