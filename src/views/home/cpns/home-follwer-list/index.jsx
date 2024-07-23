import React, { memo, useEffect, useState } from 'react'
import HomeFollowListWrapper from './style'
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from 'antd';

// api
import { followingList } from '../../../../services/modules/home'

const index = memo(() => {

  // 路由跳转
  const navigate = useNavigate()
  const location = useLocation()
  const [followingArr, setFollowingArr] = useState([])
  useEffect(() => {
    followingList().then(res => {
      console.log(res);
      // 跳转路由列表，设置布尔值隐藏关注列表和权限控制
      setFollowingArr(res.data)
    })
  }, [])
  const Jump = (target) => {
    navigate(`/home#${target}`)
    console.log('1231213');
  }
  const back = () => {
    navigate(`/home`)
    console.log('back');
  }
  return (
    <HomeFollowListWrapper>
      {
        location.hash ? <Button type='default' className='callback-btn' danger  onClick={() => back()}>Call Back</Button> : <>
          <div className="header">
            Following List
          </div>
          {
            followingArr.map(item => {
              return <div className="item" key={item.following_id} onClick={() => Jump(item.following_id)}>
                {item.following_id}
              </div>
            })
          }
        </>
      }

      {/* <button onClick={() => back()}>Call Back</button> */}
    </HomeFollowListWrapper>
  )
})

export default index