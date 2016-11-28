import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router } from 'react-router';

import {MemberS} from "../../components/basic/memberSurvey";//会员橄榄
import {AdvancedSearchForm} from "../../components/basic/memberCx";//会员查询

import {
  Row,
  Col,
  Modal,
  Table,
  Button,
  Input,
  Pagination,
  Slider,
  Tree,
  Menu,
  Icon,
  Tabs,
  Upload,
  Tooltip,
  Breadcrumb,
  Form,DatePicker,TimePicker
} from 'antd';

const SubMenu = Menu.SubMenu;
//tabs
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
//tabs
export default class TestPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
    return (
      <div className="ant-layout-aside">
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>
        <Menu mode="inline" theme="dark"
          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />会员概况</span>}>
            <Menu.Item key="1"><a href="http://localhost:8081/test">会员概览</a></Menu.Item>
            <Menu.Item key="2"><a href="http://www.baidu.com">会员报表</a></Menu.Item>
            <Menu.Item key="3">参数设置</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />第二导航</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />第三导航</span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="notification" />第四导航</span>}>
            <Menu.Item key="13">选项9</Menu.Item>
            <Menu.Item key="14">选项10</Menu.Item>
            <Menu.Item key="15">选项11</Menu.Item>
            <Menu.Item key="16">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
      <div className="ant-layout-main">
        <div className="ant-layout-header">


        <Menu theme="dark" mode="horizontal"
          defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">其它导航</Menu.Item>
          <Menu.Item key="3">其它导航</Menu.Item>
        </Menu>


        </div>
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>会员概况</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
        <div style={{ minHeight:750/*height: '1000px'*/ }}>


              <Tabs onChange={callback} type="card">
                <TabPane tab="会员概览" key="1"><MemberS />{/*会员中心*/}</TabPane>
                <TabPane tab="会员查询" key="2">
                  <WrappedAdvancedSearchForm />
                {/*<div className="search-result-list">12</div>*/}
                </TabPane>
                <TabPane tab="入会统计" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>


            </div>
          </div>

        </div>
        <div className="ant-layout-footer">
        hualala.com 版权所有 © 2016 由哗啦啦技术部支持
        </div>
      </div>
    </div>
    )
  }
}
