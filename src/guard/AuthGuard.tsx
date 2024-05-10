import { ReactNode } from "react"
import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"
import { RootState } from "../store/store"
import routes from "../constants/routes"

interface IAuthGuard {
  children: ReactNode
}

const AuthGuard = ({children}: IAuthGuard) => {

  const isLogedIn = useSelector((state : RootState) => state.userReducer.isLogedIn)

  if(!isLogedIn) {
    return (
      <div>
        <Navigate to={routes.home} />
      </div>
    )
  }

  return <>{children}</>
}

export default AuthGuard