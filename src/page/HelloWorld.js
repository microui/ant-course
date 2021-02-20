import React from 'react';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import Main from './Main';

addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

export default () => {
    return <div><Main/></div>;
}
