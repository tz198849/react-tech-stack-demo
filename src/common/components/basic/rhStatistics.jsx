import React from 'react';
import { Form, Row, Col, Input, Button, Icon,Select,DatePicker,TimePicker,Table  } from 'antd';

  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      key: i,
      name: `名字 ${i}`,
      date1: 32,
      date2: 32,
      date3: 23,
      date4: 44,
      date5: 0,
      thismonth:10,
      total:3330,
      effective:110,
    });
  }

export class MStatistics  extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      expand: false,
      filteredInfo: null,
      sortedInfo: null,
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    }

    render() {
      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [{
        title: '店铺',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: '名字3', value: '名字 3' },
          { text: '名字8', value: '名字 8' },
        ],
        filteredValue: filteredInfo.name,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      }, {
        title: '6月新增',
        dataIndex: 'date1',
        key: 'date1',
        sorter: (a, b) => a.date1 - b.date1,
        sortOrder: sortedInfo.columnKey === 'date1' && sortedInfo.order,
      }, {
        title: '7月新增',
        dataIndex: 'date2',
        key: 'date2',
        sorter: (a, b) => a.date2 - b.date2,
        sortOrder: sortedInfo.columnKey === 'date2' && sortedInfo.order,
      }, {
        title: '8月新增',
        dataIndex: 'date3',
        key: 'date3',
        sorter: (a, b) => a.date3 - b.date3,
        sortOrder: sortedInfo.columnKey === 'date3' && sortedInfo.order,
      }, {
        title: '9月新增',
        dataIndex: 'date4',
        key: 'date4',
        sorter: (a, b) => a.date4 - b.date4,
        sortOrder: sortedInfo.columnKey === 'date4' && sortedInfo.order,
      }, {
        title: '10月新增',
        dataIndex: 'date5',
        key: 'date5',
        sorter: (a, b) => a.date5 - b.date5,
        sortOrder: sortedInfo.columnKey === 'date5' && sortedInfo.order,
      }, {
        title: '本月新增',
        dataIndex: 'thismonth',
        key: 'thismonth',
        sorter: (a, b) => a.thismonth - b.thismonth,
        sortOrder: sortedInfo.columnKey === 'thismonth' && sortedInfo.order,
      }, {
        title: '当前会员总数',
        dataIndex: 'total',
        key: 'total',
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === 'total' && sortedInfo.order,
      }, {
        title: '有效会员总数',
        dataIndex: 'effective',
        key: 'effective',
        sortOrder: sortedInfo.columnKey === 'effective' && sortedInfo.order,
      }];
      return (
        <div>

          <div>
            <Table columns={columns} dataSource={data} onChange={this.handleChange} bordered />
          </div>
          <div>
            <Button>导出</Button>
          </div>

        </div>
      )
    }
}
