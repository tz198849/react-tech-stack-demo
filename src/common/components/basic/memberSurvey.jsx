import React from 'react';
import { Row,Col,Table, Icon, Switch, Radio, Form, Button } from 'antd';

export const Member=React.createClass({
  render(){
    return (
      <Row>

        <Col><MemberSurvey /></Col>

        <Col className="gutter-row" span={12} style={{background:'red'}}>
          123
        </Col>
        <Col className="gutter-row" span={12} style={{background:'red'}}>
          321
        </Col>

      </Row>
    )
  }
})

const FormItem = Form.Item;

const columns = [{
  title: '会员等级',
  dataIndex: 'Grade',
  key: 'Grade',
  render: text => <a href="#">{text}</a>,
}, {
  title: '会员数',
  dataIndex: 'mnumber',
  key: 'mnumber',
}, {
  title: '所占比率',
  dataIndex: 'ratio',
  key: 'ratio',
}, {
  title: '男',
  dataIndex: 'man',
  key: 'man',
},{
  title: '女',
  dataIndex: 'woman',
  key: 'woman',
},{
  title: '未知',
  dataIndex: 'unknown',
  key: 'Unknown',
},{
  title: '线上',
  dataIndex: 'online',
  key: 'online',
},{
  title: '线下',
  dataIndex: 'line',
  key: 'line',
},{
  title: '会员卡现金余额',
  dataIndex: 'balance',
  key: 'balance',
},{
  title: '已挂账金额',
  dataIndex: 'credit',
  key: 'credit',
},{
  title: '客单价',
  key: 'action',
  render: (text, record) => (
    123
  ),
}];

const data = [];
for (let i = 1; i <= 5; i++) {
  data.push({
    key: i,
    Grade:`VIP${i}`,
    mnumber: `${i}2`,
    ratio: `${i}2%`,
    man:`${i}2%`,
    woman:`${i}2%`,
    unknown:`${i}2%`,
    online:`${i}2%`,
    line:`${i}2%`,
    balance:`${i}2%`,
    credit:`${i}2%`,
    price:`${i}2%`,
    description: `Vip ${i} 等级说明：这里有很多的文字内容.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
//const title = () => 'Here is title';
const footer = () => (
  <Row>
    <Col style={{float:'right'}}><Button>导出</Button></Col>
  </Row>
);
const scroll = { y: 240 };

class MemberSurvey extends React.Component {
  state = {
    bordered: true,
    loading: false,
    pagination: false,
    size: 'default',
    expandedRowRender,
    // title,
    footer,
    rowSelection:false,
    scroll: undefined,
  }

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    };
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : false });
  }

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  }

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  }

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  }

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  }

  render() {
    const state = this.state;
    return (
      <div>
        <Table {...this.state} columns={columns} dataSource={data} />
      </div>
    );
  }
}
