import React from 'react';
import { Form, Row, Col, Input, Button, Icon,Select,DatePicker,TimePicker,Table  } from 'antd';
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

const FormItem = Form.Item;

export class AdvancedSearchForm  extends React.Component {
    state = {
    expand: false,
    };

    handleSearch = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
      });
    }

    handleReset = () => {
      this.props.form.resetFields();
    }

    toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
    }
    render() {
      let { getFieldInstance,getFieldProps } = this.props.form;//getFieldDecorator
      const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
      };
      console.log(this.props);
      console.log(getFieldInstance);
      console.log(getFieldProps);
      // To generate mock Form.Item
      const children = [];//getFieldDecorator

      //下拉列表
      const Selects = [];
      for (let i = 10; i < 36; i++) {
        Selects.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      }

      function handleChange(value) {
        console.log(`selected ${value}`);
      }
      //下拉列表
      let inputs = [
            <Select tags
              style={{ width: '100%',height:30}}
              searchPlaceholder="标签模式"
              onChange={handleChange}
              placeholder="全部选择"
            >
              {Selects}
            </Select>,
          <Input placeholder="姓名/卡号/手机号" style={{height:35}} />,
          <Select size="large" defaultValue="不限" style={{ width: '100%'}} onChange={handleChange}>
            <Option value="未知">未知</Option>
            <Option value="女会员">女会员</Option>
            <Option value=">男会员" disabled>男会员</Option>
          </Select>,
          <RangePicker />,
          <Select size="large" defaultValue="不限" style={{ width: '100%'}} onChange={handleChange}>
            <Option value="未知">未知</Option>
            <Option value="女会员">女会员</Option>
            <Option value=">男会员" disabled>男会员</Option>
          </Select>,
          <Select size="large" defaultValue="不限" style={{ width: '100%'}} onChange={handleChange}>
            <Option value="未知">未知</Option>
            <Option value="女会员">女会员</Option>
            <Option value=">男会员" disabled>男会员</Option>
          </Select>,

          <Row gutter={18}>
            <Col className="gutter-row" span={12}>
              <Input placeholder="placeholder" />
            </Col>
            <Col className="gutter-row" span={12}>
              <Input placeholder="placeholder" />
            </Col>
          </Row>,
          <Row gutter={18}>
            <Col className="gutter-row" span={12}>
              <Input placeholder="placeholder" />
            </Col>
            <Col className="gutter-row" span={12}>
              <Input placeholder="placeholder" />
            </Col>
          </Row>,
          <Row gutter={18}>
            <Col className="gutter-row" span={12}>
              <Input placeholder="placeholder" />
            </Col>
            <Col className="gutter-row" span={12}>
              <Input placeholder="placeholder" />
            </Col>
          </Row>
          ]
          let label = ["入会店铺：：",'关键字：：','会员群体：：','入会日期：：','会员等级：：','状态：：','储值累计：：','消费累计：：','积分余额：：']
          for (let i = 0; i < 9; i++) {
            children.push(
              <Col span={8} key={i}>
                <FormItem {...formItemLayout} label={label[i]} style={{lineHeight:3,textAlign:'right',paddingRight:10}}>
                  {inputs[i]}
                </FormItem>
              </Col>
            );
          }

          const expand = this.state.expand;
          const shownCount = expand ? children.length : 6;

      return(
        <Row>
          <Col span={24}>
            <Form
                horizontal
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
              >
                <Row gutter={40}>
                  {children.slice(0, shownCount)}
                </Row>
                <Row>
                  <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">查询</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                      导出
                    </Button>
                    <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                      更多查找条件 <Icon type={expand ? 'up' : 'down'} />
                    </a>
                  </Col>
                </Row>
              </Form>
          </Col>

          <Col span={24} style={{marginTop:20}}>
            <Table columns={columns} dataSource={data} pagination={pagination} />
          </Col>
        </Row>
      )
    }
  }


  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: '性别',
    dataIndex: 'gender',
  }, {
    title: '手机号(卡号)',
    dataIndex: 'tel',
  }, {
    title: '生日',
    dataIndex: 'birthday',
  }, {
    title: '等级',
    dataIndex: 'grade',
  }, {
    title: '入会日期',
    dataIndex: 'enterdate',
  }, {
    title: '现金卡值',
    dataIndex: 'cardvalue',
  }, {
    title: '现金卡值',
    dataIndex: 'cardvalue',
  }, {
    title: '赠送卡值',
    dataIndex: 'giftcard',
  }, {
    title: '挂账金额',
    dataIndex: 'billmoney',
  }, {
    title: '挂账剩余可用额度',
    dataIndex: 'billmoneys',
  }, {
    title: '积分余额',
    dataIndex: 'integral',
  }, {
    title: '累计储值总额',
    dataIndex: 'storedvalue',
  }, {
    title: '状态',
    dataIndex: 'state',
  }, {
    title: '查看',
    dataIndex: 'see',
  }];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `名字 ${i}`,
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
    });
  }

  const pagination = {
    total: data.length,
    showSizeChanger: true,
    onShowSizeChange: (current, pageSize) => {
      console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange: (current) => {
      console.log('Current: ', current);
    },
  };
