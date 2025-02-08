import React, { useState, useEffect } from "react";

let lightSequence = [
    { color: "red", duration: 5000, text: "Stop", textColor: "white" },
    { color: "green", duration: 5000, text: "Go", textColor: "white" },
    { color: "yellow", duration: 5000, text: "Slow", textColor: "red" },
];

const TrafficLight = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % lightSequence.length);
        }, lightSequence[currentIndex].duration);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (<>
        <h1 style={{ textAlign: "center" }} >Hello Sonu!</h1>
        <div className="traffic-light-container">
            <div className="traffic-light">
                {lightSequence.map((li, index) => (
                    <div
                        key={li.color}
                        className={`light ${li.color} ${index === currentIndex ? 'active' : ""}`}
                    >
                        {index === currentIndex && <h4 style={{ color: li.textColor }}>{li.text}</h4>}
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default TrafficLight;
