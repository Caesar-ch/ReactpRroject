import chRequest from "../index";

export const uploadImage = (file) => {
  const formData = new FormData(); // 创建一个新的FormData对象
  formData.append('file', file); // 将文件添加到FormData对象中
  return chRequest.post({
    url: "/dashboard/upload",
    params: {
      uid: 'username'
    },
    data: formData
  })
} 