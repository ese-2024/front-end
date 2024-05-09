import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/logo.png";
import HomeIcon from '../../../public/icons/sidebar/HomeIcon';
import Ranking from '../../../public/icons/sidebar/RankingIcon';
import BattleIcon from "../../../public/icons/sidebar/BattleIcon";

function Sidebar() {

    const location = useLocation();
    const currentPage = location.pathname; 
    
    return (
        <div className="bg-colorSide w-20 min-h-screen flex items-center flex-col">
            <img src={logo} className="mt-10"></img>
            <div className="flex flex-col w-full mt-16 2xl:mt-20 items-center gap-y-3">
                <Link to={"/"} className={`w-14 h-14 ${currentPage === '/' ? 'bg-hulk hover:bg-opacity-85' : 'bg-colorSide hover:bg-colorPopup'} flex items-center justify-center rounded-xl transition-all ease-in-out`}><HomeIcon fill={currentPage == "/" ? "#141D2B" : "#bbff34"}/></Link>
                <Link to={"/ranking"} className={`w-14 h-14 ${currentPage === '/ranking' ? 'bg-hulk hover:bg-opacity-85' : 'bg-colorSide hover:bg-colorPopup'} flex items-center justify-center rounded-xl transition-all ease-in-out`}><Ranking fill={currentPage == "/ranking" ? "#141D2B" : "#bbff34"}/></Link>
                <Link to={"/battle"} className={`w-14 h-14 ${currentPage === '/battle' ? 'bg-hulk hover:bg-opacity-85' : 'bg-colorSide hover:bg-colorPopup'} flex items-center justify-center rounded-xl transition-all ease-in-out`}><BattleIcon fill={currentPage == "/battle" ? "#141D2B" : "#bbff34"}/></Link>
            </div>
        </div>
    )
}

export default Sidebar;