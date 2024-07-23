import React, { memo, useEffect, useState } from 'react'
import DashBoardRightPreviewWrapper from './style'
import { createBrowserHistory, createHashHistory } from "history";
import { message } from "antd";


import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import ImageEditor from "tui-image-editor";
import img from '../../../../assets/logo512.png'
import { uploadImage } from '../../../../services/modules/dashboard';

const Hash = createHashHistory()
const locale_zh = {
  ZoomIn: "放大",
  ZoomOut: "缩小",
  Hand: "手掌",
  History: '历史',
  Resize: '调整宽高',
  Crop: "裁剪",
  DeleteAll: "全部删除",
  Delete: "删除",
  Undo: "撤销",
  Redo: "反撤销",
  Reset: "重置",
  Flip: "镜像",
  Rotate: "旋转",
  Draw: "画",
  Shape: "形状标注",
  Icon: "图标标注",
  Text: "文字标注",
  Mask: "遮罩",
  Filter: "滤镜",
  Bold: "加粗",
  Italic: "斜体",
  Underline: "下划线",
  Left: "左对齐",
  Center: "居中",
  Right: "右对齐",
  Color: "颜色",
  "Text size": "字体大小",
  Custom: "自定义",
  Square: "正方形",
  Apply: "应用",
  Cancel: "取消",
  "Flip X": "X 轴",
  "Flip Y": "Y 轴",
  Range: "区间",
  Stroke: "描边",
  Fill: "填充",
  Circle: "圆",
  Triangle: "三角",
  Rectangle: "矩形",
  Free: "曲线",
  Straight: "直线",
  Arrow: "箭头",
  "Arrow-2": "箭头2",
  "Arrow-3": "箭头3",
  "Star-1": "星星1",
  "Star-2": "星星2",
  Polygon: "多边形",
  Location: "定位",
  Heart: "心形",
  Bubble: "气泡",
  "Custom icon": "自定义图标",
  "Load Mask Image": "加载蒙层图片",
  Grayscale: "灰度",
  Blur: "模糊",
  Sharpen: "锐化",
  Emboss: "浮雕",
  "Remove White": "除去白色",
  Distance: "距离",
  Brightness: "亮度",
  Noise: "噪音",
  "Color Filter": "彩色滤镜",
  Sepia: "棕色",
  Sepia2: "棕色2",
  Invert: "负片",
  Pixelate: "像素化",
  Threshold: "阈值",
  Tint: "色调",
  Multiply: "正片叠底",
  Blend: "混合色",
  Width: "宽度",
  Height: "高度",
  "Lock Aspect Ratio": "锁定宽高比例",
  Load: '上传',
  Download: '保存'
};
const customTheme = {
  // image 坐上角度图片
  'common.bi.image': '', // 在这里换上你喜欢的logo图片
  'common.bisize.width': '0px',
  'common.bisize.height': '0px',
  'common.backgroundImage': 'none',
  'common.backgroundColor': '#f3f4f6',
  'common.border': '1px solid #444',

  // header
  // 'header.backgroundImage': 'none',
  'header.backgroundColor': '#f3f4f6',
  'header.border': '0px',

  // load button
  'loadButton.backgroundColor': '#fff',
  'loadButton.border': '1px solid #ddd',
  'loadButton.color': '#222',
  'loadButton.fontFamily': 'NotoSans, sans-serif',
  'loadButton.fontSize': '12px',
  // 'loadButton.display': 'none', // 可以直接隐藏掉

  // download button
  'downloadButton.backgroundColor': '#fdba3b',
  'downloadButton.border': '1px solid #fdba3b',
  'downloadButton.color': '#fff',
  'downloadButton.fontFamily': 'NotoSans, sans-serif',
  'downloadButton.fontSize': '12px',
  // 'downloadButton.display': 'none', // 可以直接隐藏掉

  // icons default
  'menu.normalIcon.color': '#8a8a8a',
  'menu.activeIcon.color': '#555555',
  'menu.disabledIcon.color': '#434343',
  'menu.hoverIcon.color': '#e9e9e9',
  'submenu.normalIcon.color': '#8a8a8a',
  'submenu.activeIcon.color': '#e9e9e9',

  'menu.iconSize.width': '24px',
  'menu.iconSize.height': '24px',
  'submenu.iconSize.width': '32px',
  'submenu.iconSize.height': '32px',

  // submenu primary color
  'submenu.backgroundColor': '#1e1e1e',
  'submenu.partition.color': '#858585',

  // submenu labels
  'submenu.normalLabel.color': '#858585',
  'submenu.normalLabel.fontWeight': 'lighter',
  'submenu.activeLabel.color': '#fff',
  'submenu.activeLabel.fontWeight': 'lighter',

  // checkbox style
  'checkbox.border': '1px solid #ccc',
  'checkbox.backgroundColor': '#fff',

  // rango style
  'range.pointer.color': '#fff',
  'range.bar.color': '#666',
  'range.subbar.color': '#d1d1d1',

  'range.disabledPointer.color': '#414141',
  'range.disabledBar.color': '#282828',
  'range.disabledSubbar.color': '#414141',

  'range.value.color': '#fff',
  'range.value.fontWeight': 'lighter',
  'range.value.fontSize': '11px',
  'range.value.border': '1px solid #353535',
  'range.value.backgroundColor': '#151515',
  'range.title.color': '#fff',
  'range.title.fontWeight': 'lighter',

  // colorpicker style
  'colorpicker.button.border': '1px solid #1e1e1e',
  'colorpicker.title.color': '#fff'
}


const DashBoardRightPreview = memo(() => {
  const [instance, setInstance] = useState(null)
  const [currentImage, setCurrentImage] = useState(null)
  const [imgSrc, setImgSrc] = useState()

  const init = async () => {
    setInstance(new ImageEditor(
      document.querySelector("#tui-image-editor"),
      {
        includeUI: {
          loadImage: {
            path: img,
            name: "3178897554",
          },
          initMenu: "draw", // 默认打开的菜单项
          menuBarPosition: "right", // 菜单所在的位置
          locale: locale_zh, // 本地化语言为中文
          // 自定义样式（隐藏默认顶部栏目、按钮颜色。。。）
          theme: customTheme,
          // 支持的菜单
          menu: [
            'crop', // 裁切
            'draw', // 添加绘画
            'text',// 添加文本
            'rotate', // 旋转
            'flip', // 翻转
            'shape', // 添加形状
            'icon', // 添加图标
            'mask', // 添加覆盖
            'filter' // 添加滤镜
          ],
        },
        cssMaxWidth: 400, // canvas 最大宽度
        cssMaxHeight: 400, // canvas 最大高度
      }
    ))
    // document.getElementsByClassName("tui-image-editor-main")[0].style.top = "45px"; // 图片距顶部工具栏的距离
    // document.querySelector('[tooltip-content="ZoomIn"]')[0].style.display = 'none' // 放大
    // document.querySelector('[tooltip-content="ZoomOut"]')[0].style.display = 'none' // 缩小
    // document.querySelector('[tooltip-content="Hand"]')[0].style.display = 'none' // 拖动界面
    // document.querySelector('[tooltip-content="History"]')[0].style.display = 'none'
    // document.querySelector('[tooltip-content="删除"]')[0].style.display = 'none' // 删除选中编辑内容
    // document.querySelector('[tooltip-content="DeleteAll"]')[0].style.display = 'none' // 清空
    // // 隐藏分割线
    // document.querySelectorAll('.tui-image-editor-icpartition').forEach(item => {
    //   // item.style.display = 'none'
    // })
    document.querySelector('[tooltip-content="放大"]').style.display = 'none'
    document.querySelector('[tooltip-content="缩小"]').style.display = 'none'

    document.querySelector('[tooltip-content="删除"]').style.display = 'none'

    return 1
  }
  // mounted生命周期
  useEffect(() => {
    init()
  }, [])
  // 在instance初始化之后再次调用
  useEffect(() => {
    if (instance?.ui?.eventHandler?.download) {
      let saveBtn = document.querySelectorAll('.tui-image-editor-download-btn')[1]
      let uploadBtn = document.querySelectorAll('.tui-image-editor-load-btn')[1]
      saveBtn.removeEventListener('click', instance?.ui?.eventHandler?.download)
      saveBtn.onclick = function(e){

        const src = instance.toDataURL();
        const file = dataURLtoFile(src)
        console.log(file, 'file');
        uploadImage(file).then(res => {
          console.log(res, 'res');
          message.success(res.msg || 'error')
        })
      }
      uploadBtn.onchange = (e) => {
        // 当上传文件时保留文件名，因为在base64转化之后不存在
        instance.originName = e.target.files[0].name
      }
    }
  }, [instance])

  // 将base64转换成file类型
  function dataURLtoFile(dataurl) {
    var arr = dataurl.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], instance.originName || 'default.png', { type: mime })
  }
  
  //test按钮
  const handle = () => {
    console.log(instance);
    // 转为base64
    // const src = instance.toDataURL();
    // setImgSrc(src)
    // const file = dataURLtoFile(src)
    // console.log(file, 'file');
    // uploadImage(currentImage)
    // 增加遮罩层
    //   instance.addImageObject('https://tse2-mm.cn.bing.net/th/id/OIP-C.C64i5Jj0CbEXYKp0h3CwJgHaE8?rs=1&pid=ImgDetMain').then(objectProps => {
    //     console.log(objectProps);
    // });
    // 设置文本
    // instance.addText('init text');
    // 替换图片
    // instance.loadImageFromURL('https://tse2-mm.cn.bing.net/th/id/OIP-C.C64i5Jj0CbEXYKp0h3CwJgHaE8?rs=1&pid=ImgDetMain', 'lena').then(result => {
    //   console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);
    //   console.log('new : ' + result.newWidth + ', ' + result.newHeight);
    // });

  }
  return (
    <DashBoardRightPreviewWrapper>
      <div id="tui-image-editor"></div>
      {/* <button onClick={e => handle()}>{currentImage}</button>
      <img src={imgSrc} alt="" /> */}
    </DashBoardRightPreviewWrapper>
  )
})

export default DashBoardRightPreview