'use client';

import React, { useState, useEffect } from 'react';

export default function Countdown() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-07-30T00:00:00');
        const currentDate = new Date();
        const difference = targetDate.getTime() - currentDate.getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>夏休みまで</h1>
            <div>
                {timeLeft.days} 日 {timeLeft.hours} 時 {timeLeft.minutes} 分 {timeLeft.seconds} 秒
            </div>
        </div>
    );
}
