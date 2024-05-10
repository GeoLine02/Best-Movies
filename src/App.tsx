import AppRoutes from "./AppRoutes"
import { SideBar } from "./components/views/SideBar/SideBar"

const App = () => {

  return (
  <div className="flex gap-4 ">
    <SideBar />
   <AppRoutes />
  </div>
  )
}

export default App