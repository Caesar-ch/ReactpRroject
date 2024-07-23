import { message } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useAuthRoute = ({ children, auth }: any) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token") || "";
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === '/login') return
    if (token == "") {
      message.error("token 过期，请重新登录!");
      navigate("/login");
    }
    // 这里判断条件是：token 存在并且是匹配到路由并且是已经登录的状态
    if (token) {
      // 如果你已经登录了，但是你通过浏览器
      // 里直接访问login的话不允许直接跳转到
      // login路由，必须通过logout来控制退出
      // 登录或者是token过期返回登录界面
        return
    }
  }, [token, location.pathname]);

  return children;
};
export default useAuthRoute;
