import React, { memo, useState } from 'react'
import HeaderWrapper from './style'

import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Dropdown, Space } from 'antd';

const Header = memo(() => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)
  const route = useNavigate()
  const goPath = (path) => {
    // 跳转到指定路由
    setActive(path)
    route(path)
  }
  const isActive = (value) => {
    return active === value ? 'active' : ''
  }
  const LogOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  const items = [
    {
      key: '1',
      label: (
        <Button onClick={LogOut}>
          Log out
        </Button>
      )
    },
  ];
  return (
    <HeaderWrapper>
      <div className="logo">
        <CameraOutlined style={{ fontSize: '30px', color: '#b12a5b' }} />
        <div className="logo-text">Image Share</div>
      </div>
      <div className="router">
        <Button className={isActive('/dashboard')} onClick={e => goPath('/dashboard')}>editor</Button>
        <Button className={isActive('/community')} onClick={e => goPath('/community')}>community</Button>
        <Button className={isActive('/home')} onClick={e => goPath('/home')}>my store</Button>
      </div>
      <div className="username">
        <Dropdown
          menu={{
            items,
          }}
        >
          <div>
            <span className='username-text'>username</span>
            <UserOutlined style={{ fontSize: '20px', color: 'rgb(30 128 255 / 90%)' }} />
          </div>
        </Dropdown>
      </div>
    </HeaderWrapper>
  )
})

export default Header