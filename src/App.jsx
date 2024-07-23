import React, { memo, useEffect } from 'react'
import AppWrapper from './style'

// 引入相关的hook
import { useSelector, useDispatch } from 'react-redux'
// 引入相应的方法
import { setBannerAction } from './store/features/home'

import routes from './router'
import { NavLink, useRoutes } from 'react-router-dom'
import { Button } from 'antd'
import Header from './views/header/Header'
import AuthRoute from './router/authRouter'

const App = memo((props) => {
  const banner = useSelector(state => state.home.banner)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setBannerAction([{ name: '12312312' }]))
  }, [])
  return (
    <AppWrapper>
      <Header/>
      {/* <span>App:</span>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/menu'>menu</NavLink>
        <Button className='my-btn'>asdasd</Button> */}
      <div className="content">
        <AuthRoute>
          {useRoutes(routes)}
        </AuthRoute>
      </div>
    </AppWrapper>
  )
})

export default App