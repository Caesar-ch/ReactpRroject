import React, { memo, useEffect, useState } from 'react'
import { Card, Space } from 'antd';
import HomeItemCard from './cpns/home-item-card'
import HomeFollowList from './cpns/home-follwer-list';
import { getList } from '../../services/modules/home';
import HomeWrapper from './style';
import { useLocation } from "react-router-dom";

const Home = memo((props) => {
  const [imgArr, setImgArr] = useState([])
  const location = useLocation()
  // console.log('lo',location);

  // mounted 生命周期
  useEffect(() => {
    getList({ hash: location.hash }).then(res => {
      console.log(res, res.data);
      setImgArr(res.data)
      // 创建片段【传统方式，在使用框架的条件下这些都是异步批量更新不用进行片段创建】
      // const fragment = document.createDocumentFragment();
      // for (let index = 0; index < res.data?.length; index++) {
      //   let img = document.createElement('img');
      //   img.src = res.data[index].img
      //   img.style.width = '300px';
      //   fragment.appendChild(img)
      // }
      // document.body.appendChild(fragment); // 将片段集合添加到页面上

      // let url = window.URL || window.webkitURL;
      // img.src = url.createObjectURL(res[0]);
      // img.src = res.data[0];
      // img.style.width = '300px';
      // document.body.appendChild(img); // 将图像元素添加到页面上
    })
  }, [location.hash])
  return (
    <HomeWrapper>
      <Space className='left' size={[38, 16]} wrap>
        {
          imgArr?.map(item => {
            return (
              <HomeItemCard key={item.id} item={item}></HomeItemCard>
            )
          }) ?? <div>还没有图片...</div>
        }
      </Space>
      <HomeFollowList></HomeFollowList>
     
    </HomeWrapper>
  )
})

export default Home