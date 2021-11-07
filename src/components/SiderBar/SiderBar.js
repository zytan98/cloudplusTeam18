import { Avatar, Layout, Menu, Row } from 'antd'
import './SiderBar.css'
import logo from '../../assets/logo.png'
import { UserOutlined } from '@ant-design/icons'

const SiderBar = () => {
  const { Sider } = Layout
  return (
    <Sider
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Row>
      <Avatar className='profile'>HARDCODED</Avatar>
      <div style={{marginTop:15}}>PROFILE NAME</div>
      </Row>
      <Menu className='ant-menu'>
        <Menu.Item className='items'>Home</Menu.Item>
        <Menu.Item className='items'>Dashboard</Menu.Item>
        <Menu.Item className='items'>TestTest1</Menu.Item>
        <Menu.Item className='items'>TestTest2</Menu.Item>
        <Menu.Item className='items'>TestTest3</Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SiderBar
