import React, { memo, useEffect, useState } from 'react'
import CommunityItemWrapper from './style'
import { Card, Image, Popover, Button, message } from 'antd';
import { addFriend, isFriend, DelFriend } from '../../../../services/modules/community';


const index = memo((props) => {

  const [isFollow, setIsFollow] = useState(false)
  const handleAddFriend = (e) => {
    if (isFollow) {
      DelFriend({following: props.item.key}).then(res => {
        console.log(res);
        message.success('删除好友成功');
        setIsFollow(false)
      })  
    } else {
      addFriend({following: props.item.key}).then(res => {
        console.log(res);
        message.success('好友添加成功');
        setIsFollow(true)
      })      
    }
  }
  useEffect(() => {
    console.log(props);
    isFriend({following: props.item.key}).then(res => {
      // console.log(res);
      setIsFollow(res.data)
    })
  }, [])
  const AddButton = () => {
    return (
      <Button type={isFollow ? 'default' : 'primary'} onClick={e => handleAddFriend(e)}>{isFollow ? '删除好友' : '加为好友'}</Button>
    )
  }
  const AddFriend = () => {
    return (
      <Popover className='username' placement="rightTop" content={<AddButton />}>
        {props.item.key}
      </Popover>
    )
  }
  return (
    <CommunityItemWrapper>
      <Card
        title={<AddFriend />}
        style={{
          width: '100%',
        }}
      >
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {
            props.item.value.map((item, index) => {
              return <Image width={100} src={item.img} key={item.id} />
            })
          }
          {/* <Image width={100} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <Image
              width={100}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            /> */}
        </Image.PreviewGroup>
      </Card>
    </CommunityItemWrapper>
  )
})

export default index