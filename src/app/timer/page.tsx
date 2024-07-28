'use client';
import { useState, useEffect } from 'react';

export default function RealTimeClock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Real Time Clock</h1>
            <h2>{currentTime.toLocaleTimeString()}</h2>
        </div>
    );
}
