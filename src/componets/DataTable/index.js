import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Table, Input, Button, Space, DatePicker } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const DataTable = ({ dataList }) => {
  let searchInput = useRef(null)

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        {dataIndex === 'year' ? (
          <DatePicker
            style={{ width: 188, marginBottom: 8, display: 'block' }}
            onChange={(date, dateString) =>
              setSelectedKeys(dateString ? [dateString] : [])
            }
          />
        ) : (
          <Input
            ref={(node) => {
              searchInput = node
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
        )}
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => {
      const searchRecord =
        dataIndex === 'year'
          ? moment(record[dataIndex])
              .format('YYYY-MM-DD')
              .toString()
              .toLocaleLowerCase()
          : record[dataIndex].toString().toLowerCase()
      return searchRecord ? searchRecord === value.toLowerCase() : ''
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible && dataIndex !== 'year') {
        setTimeout(() => searchInput.select(), 100)
      }
    },
  })

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
  }

  const handleReset = (clearFilters) => {
    clearFilters()
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Name Type',
      dataIndex: 'nametype',
      key: 'nametype',
      sorter: (a, b) => a.nametype.localeCompare(b.nametype),
      filters: [
        { text: 'Valid', value: 'Valid' },
        { text: 'InValid', value: 'InValid' },
      ],
      onFilter: (value, record) => record.nametype.indexOf(value) === 0,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render: (item) => moment(item).format('YYYY-MM-DD'),
      sorter: (a, b) => moment(a.year).valueOf() - moment(b.year).valueOf(),
      ...getColumnSearchProps('year'),
    },
    {
      title: 'Recclass',
      dataIndex: 'recclass',
      key: 'recclass',
      sorter: (a, b) => a.recclass.localeCompare(b.recclass),
      ...getColumnSearchProps('recclass'),
    },
  ]

  return (
    <>
      <Table columns={columns} dataSource={dataList} rowKey='id' />
    </>
  )
}

DataTable.propTypes = {
  dataList: PropTypes.array,
}

export default DataTable
