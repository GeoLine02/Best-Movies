import navigationConfig from "../../../config/navigation.config"
import { TbLogout2 } from "react-icons/tb";

export const SideBar = () => {
  return (
    <nav className="h-screen bg-black bg-opacity-10">
    
    <div className="h-full flex flex-col justify-between">
   
    <ul>
    <h1 className="text-4xl font-bold ">Best Movies</h1>
        {navigationConfig.map((item) => <div key={item.title}>
            <li className="flex items-center gap-4 my-2">
                {item.icon}
                <p>{item.title}</p>
            </li>                
        </div>)}
        </ul>

        <div className="flex items-center gap-3">
            <TbLogout2 size={20} />
        <button>Log Out</button>
        </div>
   </div>
   
    </nav>
  )
}
