import React from 'react';
import { Form, Row, Col, Input, Button, Icon,Select  } from 'antd';


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
    const children2 = [];
    for (let i = 10; i < 36; i++) {
      children2.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    //下拉列表
    let inputs = [
      <Select tags
        style={{ width: '100%' }}
        searchPlaceholder="标签模式"
        onChange={handleChange}
        placeholder="全部选择"
      >
        {children2}
      </Select>,
    <Input placeholder="2" />,
    <Input placeholder="3" />,
    <Input placeholder="4" />,
    <Input placeholder="5" />,
    <Input placeholder="6" />,
    <Input placeholder="placeholder" />,
    <Input placeholder="placeholder" />,
    <Input placeholder="placeholder" />
    ]
    let label = ["入会店铺：：",'关键字：：','会员群体：：','入会日期：：','会员等级：：','状态：：','储值累计：：','消费累计：：','积分余额：：']
    for (let i = 0; i < 9; i++) {
      children.push(
        <Col span={8} key={i}>
          <FormItem {...formItemLayout} label={label[i]}>
            {inputs[i]}
          </FormItem>
        </Col>
      );
    }

    const expand = this.state.expand;
    const shownCount = expand ? children.length : 6;
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
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}
