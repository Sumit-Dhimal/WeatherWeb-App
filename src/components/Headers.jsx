import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faLocationDot, faHouse, faChartLine, faEarthAsia } from "@fortawesome/free-solid-svg-icons"


export default function Headers() {


    return(
        <div className="pt-6 pl-10 flex flex-col gap-20 h-screen">
            <h1 className="text-2xl font-medium">Logo</h1>
            
            <nav className="flex flex-col items-start gap-8">
                <FontAwesomeIcon icon={faHouse} className="navItems"/>
                <FontAwesomeIcon icon={faChartLine} className="navItems"/>
                <FontAwesomeIcon icon={faEarthAsia} className="navItems"/>
                <FontAwesomeIcon icon={faLocationDot} className="navItems"/>
                <FontAwesomeIcon icon={faGear} className="navItems"/>
            </nav>
        </div>
    )
}