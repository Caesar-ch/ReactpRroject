import chRequest from "../index";

export const getList = (data) => {
  return chRequest.post({
    url: "/home/list",
    data,
    // responseType: 'blob'
  })
}

export const removeImage = (data) => {
  return chRequest.post({
    url: "/home/remove",
    data,
    // responseType: 'blob'
  })
}

export const openChange = (data) => {
  return chRequest.post({
    url: "/home/open",
    data,
  })
}
export const jump = () => {
  return chRequest.post({
    url: "/home/jump",
  })
}
export const followingList = () => {
  return chRequest.post({
    url: "/home/following",
  })
}