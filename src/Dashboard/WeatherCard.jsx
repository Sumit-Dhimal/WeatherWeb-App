import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import DigitalClock from "./DigitalClock";

export default function WeatherCard() {

    const[pressure, setPressure] = useState(800);
    const[visibiltiy, setVisibility] = useState(4.3);
    const[humidity, setHumidity] = useState(8.7);

  
    return (
        <div className="squareCard bg-slate-300 px-6 py-4 text-gray-500">
            <div className="text-gray-500 flex items-center gap-2">
                <FontAwesomeIcon icon={faCloudSun} className="border-2 border-orange-600 rounded-full px-1 py-1.5" />                
                <div className="flex flex-col">
                    <span className="text-[1.2rem] text-black font-semibold">Current Weather</span>
                    <span className="text-[1rem]">
                        <DigitalClock />
                    </span>
                </div>
            </div>

            <div className="flex flex-col my-8">
                <span className="text-4xl">33&deg;C</span>
                <span>Partly Cloudy</span>
            </div>

            <div className="flex justify-between">
                <div className="cardDetails bg-teal-400">
                    <span className="detailsHeader">Pressure</span>
                    <span>{pressure}</span>
                </div>
                <div className="cardDetails bg-blue-400">
                    <span className="detailsHeader">Visibility</span>
                    <span>{visibiltiy}</span>
                </div>
                <div className="cardDetails bg-orange-400">
                    <span className="detailsHeader">Humidity</span>
                    <span>{humidity}</span>
                </div>
            </div>
        </div>
    )
}