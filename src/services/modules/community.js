import chRequest from "../index";

export const getAllList = (data) => {
  return chRequest.post({
    url: "/community/list",
    data,
    // responseType: 'blob'
  })
}

export const addFriend = (data) => {
  return chRequest.post({
    url: "/community/follow",
    data,
  })
}

export const isFriend = (data) => {
  return chRequest.post({
    url: "/community/isfollow",
    data,
  })
}

export const DelFriend = (data) => {
  return chRequest.post({
    url: "/community/delfollow",
    data,
  })
}