import React, { memo, useState } from 'react'
import { Card } from 'antd';
import { message, Popconfirm } from 'antd';
import { Image, Popover, Checkbox, Button  } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { removeImage, openChange, jump} from '../../../../services/modules/home';
import { useLocation } from "react-router-dom";


import {
  DeleteOutlined
} from '@ant-design/icons';
import HomeItemCardWrapper from './style';

const index = memo((props) => {

  const location = useLocation()

  const [shared, setShared] = useState(props.item.open == 1)
  const onChange = async (e) => {
    // 拿到 图片 的值交给后台操作
    console.log(props.item);
    // await jump()
    const result = await openChange({info: Object.assign({}, props.item, {img: ''}) })
    // console.log(result);
    // 更改share状态
    setShared(e.target.checked);
    message.success(result.msg || 'error');
  };
  const confirm = async (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    await removeImage({info: Object.assign({}, props.item, {img: ''}) })
    message.success('Yes, item deleted');
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  };
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error('No, cancel delete');
  };
  // UI
  const ShareIco = () => {
    return (
      <Checkbox onChange={onChange}  checked={shared}>shared</Checkbox> 
    )
  }
  // 删除icon
  const DeleteIco = () => {
    return (
      <Popconfirm
        title="Delete the item"
        description="Are you sure to delete this item?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
         <Button style={{width: '90%', marginTop: '4px'}}> <DeleteOutlined className='ico-delete' /> </Button>
      </Popconfirm>
    )
  }
  const EditorButton = () => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ShareIco />
        <DeleteIco />
      </div>
    )
  }
  const getImgName = () => {
    const arr = props.item.url.split('.')[0].split('\\')
    return arr[arr.length -1]
  }
  return (
    <HomeItemCardWrapper>
      <Card 
        title={getImgName()} 
        extra={location.hash ? '' : <Popover placement="rightTop" content={<EditorButton />}><div className='ico-setting'><SettingOutlined  /></div></Popover>}
        style={{ width: 280 }}>
        <div className="img-container">
          <Image
            width={200}
            src={props.item.img}
          />
        </div>
      </Card>
    </HomeItemCardWrapper>
  )
})

export default index