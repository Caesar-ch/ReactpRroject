import { useLocation } from "react-router-dom"

const useTokenCheck = (res) => {
  const navigate = useLocation()
  if(res.data.status === 403) {
    navigate('/login')
  } else {
    return res.data
  }
}

export default useTokenCheck