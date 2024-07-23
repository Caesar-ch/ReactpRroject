import React, { memo, useEffect } from 'react'
import DashBoardWrapper from './style'
import DashBoardLeftUpload from './cpns/dashboard-left-upload'
import DashBoardRightPreview from './cpns/dashboard-right-preview'

const DashBoard = memo(() => {
  const isLogin = useEffect(() => {
    // 判断是否登录
    
  }, [])
  return (
    <DashBoardWrapper>
      <div className="content-left">
        {/* <div className='upload-container'>
          <DashBoardLeftUpload />
        </div> */}
        <div className='preview-container'>
          <DashBoardRightPreview />
        </div>
      </div>
    </DashBoardWrapper>
  )
})

export default DashBoard