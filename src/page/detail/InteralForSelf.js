import React from 'react';
import {DatePicker} from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {FormattedMessage, IntlProvider, addLocaleData} from 'react-intl';
import zhData from 'react-intl/locale-data/zh';

moment.locale('en');




class App extends React.Component {
    constructor() {
        super();
        this.state = {
            locale: enUS,
        };
    }

    changeLocale = e => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
            moment.locale('en');
        } else {
            moment.locale('zh-cn');
        }
    };

    render() {
        const { locale } = this.state;
        return (
            <div>
                <DatePicker/>
                <p>你好</p>
            </div>
        );
    }
}

export default App;