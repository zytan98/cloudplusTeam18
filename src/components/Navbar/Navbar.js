import {
    Avatar,
    Layout,
    Menu,
    Dropdown,
  } from 'antd'
  import './Navbar.css'
  import logo from '../../assets/logo.png'
  import {
    BellOutlined,
    LogoutOutlined
  } from '@ant-design/icons'

const Navbar = () => {
  const { Header } = Layout

  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Log Out</Menu.Item>
    </Menu>
  )

  return (
    <Header
      style={{
        background: '#26a9e0'
      }}
    >
      <img className='logo' src={logo} />
      <Avatar className='avatar' icon={<LogoutOutlined />}/>   
      <Avatar className='avatar' icon={<BellOutlined />} />
    </Header>
  )
}

export default Navbar
