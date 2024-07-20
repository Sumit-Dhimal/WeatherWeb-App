import { useState, useEffect, useRef } from "react"

export default function DigitalClock() {

const [time, setTime] = useState(new Date());
  const intervalRef = useRef(null);
  const currentRef = useRef(time);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      currentRef.current = new Date();
      setTime(new Date(currentRef.current));
    }, 1000);

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, []);

    return (
        <span>
            {
                time.toLocaleTimeString()          
            }
        </span>
    )
}