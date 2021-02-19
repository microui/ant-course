import React, {Fragment} from 'react';
import {DatePicker, Radio, Input, ConfigProvider} from 'antd';

class Internation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            locale: 'en'
        }
    }
    handleSizeChange = (e) => {
        const value = e.target.value;
        console.log(value);
        this.setState({locale: value})
    };
    render() {
        const {locale} = this.state;
        return (
            <Fragment>
                <Radio.Group value={locale} onChange={this.handleSizeChange}>
                    <Radio.Button value="zhCN">中文</Radio.Button>
                    <Radio.Button value="enUS">英文</Radio.Button>
                    <Radio.Button value="deDE">德语</Radio.Button>
                </Radio.Group>
                <ConfigProvider locale={locale}>
                    <DatePicker/>
                    <Input placeholder={'请选择'}/>
                    <p>你们大家好</p>
                </ConfigProvider>
            </Fragment>

        )
    }
}
export default Internation;
