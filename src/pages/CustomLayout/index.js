import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import { DatabaseOutlined } from '@ant-design/icons'

const { Sider, Header, Content, Footer } = Layout

const CustomLayout = ({ children }) => {
  const currentPath = window.location.pathname
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={currentPath.split('/')[1]}
        >
          <Menu.Item key='datalist' icon={<DatabaseOutlined />}>
            <Link to='/datalist'>DataList</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className='site-layout'>
        <Header className='site-layout__header'></Header>
        <Content className='site-layout__content'>{children}</Content>
        <Footer className='site-layout__footer'>TEST PROJECT ©2021</Footer>
      </Layout>
    </Layout>
  )
}

export default CustomLayout
