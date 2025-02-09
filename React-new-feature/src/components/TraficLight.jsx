import React, { useState } from "react";
import { useEffect } from "react";

let lightSequence = [
    { color: "red", duration: 5000, colortext: "white", text: "Stop" },
    { color: "yellow", duration: 5000, colortext: "green", text: "Slow" },
    { color: "green", duration: 5000, colortext: "white", text: "Go" },
]

const TraficLight = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % lightSequence.length);
        }, lightSequence[currentIndex].duration);

        return () => clearTimeout(timer)
    }, [currentIndex])

    return (
        <>
            <div className="traffic-light-container">
                <div className="traffic-light">
                    {lightSequence.map((item, index) => (
                        <div
                            key={item.color}
                            className={`light ${item.color} ${index === currentIndex ? "active" : ""}`}>
                            {index == currentIndex && <h4 style={{ color: item.colortext }} > {item.text} </h4>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TraficLight;