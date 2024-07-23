import React, { memo, useEffect, useState } from 'react'
import CommunityWrapper from './style'
import { Space } from 'antd';
import CommunityItem from './cpns/community-item';
import { getAllList } from '../../services/modules/community';


const Community = memo(() => {
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    getAllList().then(res => {
      console.log('list',res.data);
      setUserArr(res.data);
    })
  }, [])

  return (
    <CommunityWrapper>
      <Space direction="vertical" size={16}>
        {
          userArr.map(item => {
            return (
              <CommunityItem key={item.key} item={item}></CommunityItem>
            )
          })
        }
        {/* <CommunityItem></CommunityItem> */}
      </Space>
    </CommunityWrapper>
  )
})

export default Community