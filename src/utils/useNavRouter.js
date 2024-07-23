import { useLocation } from "react-router-dom"

const useNavRouter = (path) => {
  const a = useLocation()
  a(path)
}

export default useNavRouter