import chRequest from "../index";
export const toLogin = (obj) => {
  console.log('123');
  return chRequest.post({
    url: "/login/login",
    data: {
      ...obj
    }
  })
}
export const register = (obj) => {
  return chRequest.post({
    url: "/login/register",
    data: {
      ...obj
    }
  })
}

