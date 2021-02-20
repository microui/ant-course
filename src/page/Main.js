import React, {Fragment} from 'react';
import {Button, Radio, Select, Pagination, ConfigProvider} from 'antd';
import {FormattedMessage, IntlProvider} from 'react-intl'
import enUS from "../locale/en-US";
import zhCN from "../locale/zh-CN";
import antEnUS from 'antd/lib/locale/en_US';
import antZhCN from 'antd/lib/locale/zh_CN';

const {Option} = Select;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'enUS'
        }
    }

    changeLocale = (e) => {
        console.log('e', e);
        const value = e.target.value;
        console.log('value', value);
        this.setState({locale: value})
    };

    render() {
        const {locale} = this.state;
        const [myLocale, myMessage, antLocale] = locale === 'enUS' ? ['en', enUS, antEnUS] : ['zh', zhCN, antZhCN];
        return (
            <ConfigProvider locale={antLocale}>
            <IntlProvider locale={myLocale} messages={myMessage}>
                <Fragment>
                    <Radio.Group value={locale} onChange={this.changeLocale}>
                        <Radio.Button key="en" value={'enUS'}>
                            English
                        </Radio.Button>
                        <Radio.Button key="cn" value={'zhCN'}>
                            中文
                        </Radio.Button>
                    </Radio.Group>
                    <div>
                        <Button type={'primary'}>
                            <FormattedMessage id={'helloworld'}/>
                        </Button>
                    </div>
                    <div className="example">
                        <Pagination defaultCurrent={1} total={50} showSizeChanger />
                    </div>
                </Fragment>
            </IntlProvider>
            </ConfigProvider>
        )

    }

}

export default Main
