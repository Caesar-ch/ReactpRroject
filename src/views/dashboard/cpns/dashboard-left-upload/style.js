import styled from "styled-components"

const DashBoardLeftUploadWrapper = styled.div`

  .ant-upload-select {
    width: 300px !important;
    height: 500px !important;
  }
  .image-container {
    position: relative;
    border: 1px solid red;
    .delete-ico {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: none;

      color: rgb(218 207 207 / 70%);
      &:hover {
        color: black; // 鼠标悬停时改变颜色
        background-color: rgb(218 207 207 / 30%);
      }
    }
    &:hover {
      .delete-ico {
        display: block;
      }
    }
  }
`

export default DashBoardLeftUploadWrapper