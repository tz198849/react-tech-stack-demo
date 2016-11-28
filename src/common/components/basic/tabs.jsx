/**
 * Created by wxk on 2016/7/28.
 */
import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import  Meta  from "../../components/basic/view";

import {App} from "../../components/basic/caidan";
import {MemberS} from "../../components/basic/memberSurvey";
import {AdvancedSearchForm} from "../../components/basic/memberQuery";

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
  Form,
  // Tree,
} from 'antd';



import  Refer  from "./refer";
import * as tabsactions from '../../redux/modules/tabs'
import * as modalactions from '../../redux/modules/modal'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class TabList extends Component {
  constructor(props){
    super(props);
    this.list = [];//渲染队列
    this.keylist =[];//维护渲染队列时候便于比对key值
    this.newmetaid = 0;
  }

  onTreeChange = (activeKey)=>{//tabs切换
    let {tabsactions,modal,tabs} = this.props,
      pane = tabs.panes.filter((item)=>{
        return item.key === activeKey;
      });
    if(pane.indexopen === modal.indexopen){
      tabsactions.onTreeChange(activeKey);
      //let timestamp=new Date().getTime();
      //console.log('timestamp'+timestamp);
      this.tabflag = true;
    }
    else {
      tabsactions.onRerander(activeKey,modal.indexopen);
    }
  };

  onTreeEdit = (targetKey, action)=>{//删除tab时候调用this.remove
    this[action](targetKey)
  };

  remove = (targetKey)=>{
    let {tabsactions} = this.props;
    tabsactions.TabDel(targetKey);
    this.tabflag = true;
  };

  /*shouldComponentUpdate = (nextProps, nextState)=>{
    console.log('this.props.id:'+this.props.id+'nextProps.id:'+nextProps.id);
    return nextProps.id !== this.props.id;
  };*/

  render(){
    const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    }, {
      title: '手机号(卡号)',
      key: 'tel',
      render: (text, record) => (
        <div>
          <p>15001160904</p>
          <p>卡号：12321312321</p>
        </div>
      ),
    },{
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
    },{
      title: '等级',
      dataIndex: 'grade',
      key: 'grade',
    },{
      title: '入会日期',
      dataIndex: 'enterdate',
      key: 'enterdate',
    },{
      title: '现金卡值',
      dataIndex: 'cardvalue',
      key: 'cardvalue',
    },{
      title: '现金卡值',
      dataIndex: 'cardvalue',
      key: 'cardvalue',
    },{
      title: '赠送卡值',
      dataIndex: 'giftcard',
      key: 'giftcard',
    },{
      title: '挂账金额',
      dataIndex: 'billmoney',
      key: 'billmoney',
    },{
      title: '挂账剩余可用额度',
      dataIndex: 'billmoneys',
      key: 'billmoneys',
    },{
      title: '积分余额',
      dataIndex: 'integral',
      key: 'integral',
    },{
      title: '累计储值总额',
      dataIndex: 'storedvalue',
      key: 'storedvalue',
    },{
      title: '累计消费总额',
      dataIndex: 'consumption',
      key: 'consumption',
    },{
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },{
      title: '查看',
      dataIndex: 'see',
      key: 'see',
    }];

    const data = [{
      key: '1',
      name: '名字',
      gender: 32,
      birthday: '1988-04-04',
      grade:'vip1',
      enterdate:'1988-99-99',
      cardvalue:0,
      giftcard:0,
      billmoney:0,
      billmoneys:0,
      integral:0,
      storedvalue:0,
      consumption:0,
      state:'注销',
      see:'查看',

    },{
      key: '2',
      name: '名字',
      gender: 32,
      birthday: '1988-04-04',
      grade:'vip1',
      enterdate:'1988-99-99',
      cardvalue:0,
      giftcard:0,
      billmoney:0,
      billmoneys:0,
      integral:0,
      storedvalue:0,
      consumption:0,
      state:'注销',
      see:'查看',

    },{
      key: '3',
      name: '名字',
      gender: 32,
      birthday: '1988-04-04',
      grade:'vip1',
      enterdate:'1988-99-99',
      cardvalue:0,
      giftcard:0,
      billmoney:0,
      billmoneys:0,
      integral:0,
      storedvalue:0,
      consumption:0,
      state:'注销',
      see:'查看',

    }];

    let { tabs,tabsactions } = this.props;
    if(tabs.tabflag){//只有更新时候进入此分支
      let length = tabs.panes.length,//this.keylist.length>?this.keylist.length:tabs.panes.length;
        i=0,
        width = 0;
      if(this.refs.container){
        width = this.refs.container.clientWidth;
      }
      for(;i<length;i++){//遍历panes数组，更新tabs渲染队列
        let pane = tabs.panes[i];
        if(this.list[i]){
          if(pane.key!==this.keylist[i]){//如果遍历到的渲染队列的元素跟panes的对不上，则认为是已经删除，就把其从渲染队列中删除
            this.list.splice(i,1);
            this.keylist.splice(i,1);
          }
          else {
            if(tabs.activeKey===pane.key){
              if(pane.content!=='index') {
                if (pane.content.vm) {
                  this.list[i] = (<TabPane tab={pane.title} key={pane.key}>
                    <Meta width={width} vm={pane.content.vm} metaData={pane.content.metaData}
                          id={`meta${this.newmetaid++}`}/>
                  </TabPane>);
                }
              }
              /*else {//如果vm为空则认为是首页
                this.list[i] =(
                  <TabPane tab={pane.title} key={pane.key}>
                    <p/>这是首页桌面
                  </TabPane>);
                this.keylist.push(pane.key);
              }*/
            }
          }
        }
        else {//如果渲染队列比panes短，则将长出的元素放入渲染队列
          if(pane.content.vm){
            //const width = parseInt(this.refs.container.clientWidth / 100) * 100;
            this.list.push(<TabPane tab={pane.title} key={pane.key}>
              <Meta width={width} vm={pane.content.vm} metaData={pane.content.metaData} id={`meta${this.newmetaid++}`}/>
            </TabPane>);
            /*timestamp=new Date().getTime();
            console.log('timestamp2'+timestamp);*/
            this.keylist.push(pane.key);
          }
          else {//如果vm为空则认为是首页
            this.list.push(

              <TabPane tab={pane.title} key={pane.key}>

                  <Row>
                    <Col span={24} style={{border:'1px solid #adadad', padding:50}}>
                      <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="user" />会员概览</span>} key="1">
                          <MemberS />
                        </TabPane>
                        <TabPane tab={<span><Icon type="search" />会员查询</span>} key="2">
                          <div>
                            <WrappedAdvancedSearchForm />
                            <div className="search-result-list"><Table columns={columns} dataSource={data} /></div>
                          </div>
                        </TabPane>
                        <TabPane tab={<span><Icon type="pushpin" />入会统计</span>} key="3">
                          入会统计
                        </TabPane>
                      </Tabs>
                    </Col>
                  </Row>

              </TabPane>);

            this.keylist.push(pane.key);
          }
        }
      }
      if(this.list[i]){//如果遍历完成后list内容比panes多，则删除多余的pane
        this.list.splice(i,1);
        this.keylist.splice(i,1)
      }
      tabsactions.disableTabflag();
    }

    console.log(this.list);
    return(
      <div ref="container">
      <Tabs
        hideAdd
        onChange={this.onTreeChange}
        activeKey={tabs.activeKey}
        type="editable-card"
        onEdit={this.onTreeEdit}
      >
        {this.list}
      </Tabs>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs : state.tabs.toJS(),
    modal: state.modal.toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tabsactions : bindActionCreators( tabsactions , dispatch ),
    modalactions: bindActionCreators(modalactions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList);
