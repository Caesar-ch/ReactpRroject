import React, { memo, useState } from 'react'
import DashBoardLeftUploadWrapper from './style'

import { LoadingOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setImgFile } from '../../../../store/features/dashboard';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  // 小于2m
  return isJpgOrPng && isLt2M;
};
const DashBoardLeftUpload = memo(() => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch()
  const imgUrl = useSelector(state => state.dashboard.imgUrl)


  const handleChange = (info) => {
    // console.log('info', info);
    // window._ice = info.file.originFileObj
    // 读取成arrayBuffer格式
    const reader = new FileReader();
    reader.onLoad = function (e) {
      const dataArrayBuffer = e.target.result;
      console.log(dataArrayBuffer, 'data');
      // sharp(dataArrayBuffer).rotate(300).toBuffer().then(res => console.log(res,'res'))
    }
    reader.readAsArrayBuffer(info.file.originFileObj);

    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        // setImageUrl(url);
        // dispatch(setImgFile(url))
      });
    }
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      // setImageUrl(url);
      dispatch(setImgFile(url))
    });
  };
  const handleDelete = (event) => {
    // 阻止冒泡
    event.stopPropagation()
    if (imgUrl) {
      dispatch(setImgFile(''))
    }
    return false
  }
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <DashBoardLeftUploadWrapper>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imgUrl ? (
          <div className='image-container' onClick={e => handleDelete(e)}>
            <img
              src={imgUrl}
              alt="avatar"
              style={{
                width: '100%',
              }}
            />
            <div className='delete-ico' onClick={e => handleDelete(e)}>
              <CloseOutlined />  
            </div>         
          </div>
        ) : (
          uploadButton
        )}
      </Upload>
    </DashBoardLeftUploadWrapper>
  )
})

export default DashBoardLeftUpload