"use client"
import React, {useEffect, useState} from 'react';




function CountDown() {
    const calculateTimeLeft = () => {

        const endDate    = '2023-10-22T00:00:00+05:30';


        var currentTime = new Date();

        var currentOffset = currentTime.getTimezoneOffset();

        var ISTOffset = 330;   // IST offset UTC +5:30

        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

        const difference = +new Date("2023-10-22T00:00:00+05:30") - +ISTTime;


        let timeLeft = {days:0, hours: 0, minutes: 0, seconds: 0};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / 86400000),
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });
    return (
        <div className={'space-y-2'}>
            {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                <p>
                    <span>{timeLeft.days}</span>
                    <span>d </span>
                    <span>{timeLeft.hours}</span>
                    <span>h </span>
                    <span>{timeLeft.minutes}</span>
                    <span>m </span>
                    <span>{timeLeft.seconds}</span>
                    <span>s remaining </span>
                </p>
            ) : (
                <p>Time is up 🔥</p>
            )}
        </div>
    );
}

export default CountDown;