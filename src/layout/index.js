/**
 * @Title: index
 * @ProjectName antd-course
 * @Description:
 * @author yulan
 * @date 2021/2/1816:35
 */
import React from 'react';
import {Layout, Menu} from 'antd';
import {HomeOutlined, GlobalOutlined} from '@ant-design/icons';
import Link from 'umi/link'


const {Header, Sider, Content, Footer} = Layout;
const {SubMenu} = Menu;

class MyLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Sider style={{minHeight: '100vh'}}>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item><Link to={'/hello'}><HomeOutlined />首页</Link></Menu.Item>
                        <SubMenu title={<span><GlobalOutlined />详情</span>}>
                            <Menu.Item><Link to={'/detail/one'}>详情1</Link></Menu.Item>
                            <Menu.Item><Link to={'/detail/two'}>详情2</Link></Menu.Item>
                            <Menu.Item><Link to={'/detail/interal'}>国际化</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor: '#fff'}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>{this.props.children}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default MyLayout