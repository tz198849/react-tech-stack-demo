import React from 'react';
import { Form, Row, Col, Input, Button, Icon,Select,DatePicker,TimePicker  } from 'antd';
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;


const FormItem = Form.Item;
export class AdvancedSearchForm extends React.Component {
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
    const shownCount = expand ? children.length : 3;
    return (
      <Form
        horizontal
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          {children.slice(0, shownCount)}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right',marginBottom:20 }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              导出
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              更多查询条件 <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}
