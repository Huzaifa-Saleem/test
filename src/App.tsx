import "./App.css";
import elp1 from "./assets/Ellipse 29.png";
import elp2 from "./assets/Ellipse 29 (1).png";
import hourImage from "./assets/hour.png";
import minImage from "./assets/min.png";
import secImage from "./assets/sec.png";
import { useEffect, useState } from "react";

function App() {
  const [sec, setSec] = useState(new Date().getSeconds());
  const [min, setMin] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const int = setInterval(() => {
      const date = new Date();
      setSec(date.getSeconds());
      setMin(date.getMinutes());
      setHour(date.getHours());
    }, 1000);

    return () => {
      clearInterval(int);
    };
  });

  return (
    <div className="flex items-center justify-center h-screen">
      
        <div className="clock w-52 h-52 rounded-full bg-slate-50 shadow-lg relative">
          <img src={elp1} alt="elipse" className="absolute w-full p-3" />
          <img src={elp2} alt="elipse1" className="absolute w-full p-3" />
          <div className="w-full h-full relative flex items-center justify-center">
            <img
              src={hourImage}
              alt="hpur"
              className="absolute w-[40%] p-3 rotate "
              style={{
                rotate: `${hour * 30}deg`,
              }}
            />
            <img
              src={minImage}
              alt="min"
              className="absolute w-[50%] p-3"
              style={{
                rotate: `${min * 6}deg`,
              }}
            />
            <img
              src={secImage}
              alt="sec"
              className="absolute w-[70%] p-3"
              style={{
                rotate: `${sec * 6}deg`,
              }}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
