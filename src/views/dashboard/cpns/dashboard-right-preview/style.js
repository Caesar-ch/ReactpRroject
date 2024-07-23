import styled from "styled-components"

const DashBoardRightPreviewWrapper = styled.div`
    height: 556px;
    width:  100%;
    .tui-image-editor-canvas-container {
      border: 1px solid #ccc;
    }
    .tui-image-editor-header-logo {
      display: none;
    }
    .tui-image-editor-header-buttons {
      float: none;
      margin-left: 88px;
    }
    .tui-image-editor-container .tui-image-editor-help-menu.left {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
/* 强制压缩菜单的高度 ，减少占用屏幕的空间*/
.tui-image-editor-container .tui-image-editor-submenu {
  /* height: auto !important; */
}
.tui-image-editor-container.bottom .tui-image-editor-submenu > div {
  padding: 0 !important;
}
.tui-image-editor-container .tui-image-editor-help-menu.top {
  background-color: white;
}
/* 顶部工具栏定位 */
.tui-image-editor-container .tui-image-editor-header {
  /* top: -55px; */
}
.tui-image-editor-container .tui-image-editor-help-menu.top {
  top: -50px;
}
/* 取消超出部分隐藏，否则因为顶部工具栏已经超出去了，会显示不出来
.tui-image-editor-container {
  overflow: auto;
} */
/* 顶部工具栏定位 */
.tui-image-editor-container {
  /* overflow: visible; */
}
.tui-image-editor-container .tui-image-editor-main {
  top: 56px;
}
.tui-image-editor-header-buttons {
  background: #29292a;
    margin: 0 !important;
    padding: 8px 1.5px;
}
`

export default DashBoardRightPreviewWrapper