// include the navigation bar
import React, { Component} from "react";
import ReactDOM from 'react-dom';
import './css/SiderDemo.css'
import Request from '../../Request.js'

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sider">
          <div className="logo" >
            {/* <img src="../logo.svg"></img> */}
            Bonafide
          </div>

          <Menu className="menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" className="menu_item">
              <Icon type="user" />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="2" className="menu_item">
              <Icon type="setting" />
              <span>Edit Profile</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Upload Documents</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header"style={{ background: '#fff', padding: '5px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            DOCUMENT E-VERIFICATION SYSTEM
          </Header>
          <Content
            style={{
              margin: '10px 10px',
              padding: 5,
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            <Request/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default SiderDemo;

