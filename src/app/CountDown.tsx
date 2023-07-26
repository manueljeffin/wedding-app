"use client"
import React, {useEffect, useState} from 'react';




function CountDown() {
    const calculateTimeLeft = () => {

        const endDate    = '2023-10-22T00:00:00+05:30';


        var currentTime = new Date();

        var currentOffset = currentTime.getTimezoneOffset();

        var ISTOffset = 330;   // IST offset UTC +5:30

        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

        const difference = +new Date("2023-10-22T00:00:00+05:30").valueOf() - +ISTTime.valueOf();


        let timeLeft = {days:0, hours: 0, minutes: 0, seconds: 0};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)) + 1,
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
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
            <div className="text-6xl text-center flex w-full items-center justify-center">
                <div className="lg:w-24 mx-1 p-2 bg-black text-green-500 rounded-lg">
                    <div className="font-mono leading-none" x-text="days">{timeLeft.days}</div>
                    <div className="font-mono uppercase text-sm leading-none">Days</div>
                </div>
                <div className="lg:w-24 mx-1 p-2 bg-black text-green-500 rounded-lg">
                    <div className="font-mono leading-none" x-text="days">{timeLeft.hours}</div>
                    <div className="font-mono uppercase text-sm leading-none">Hours</div>
                </div>
                <div className="lg:w-24 mx-1 p-2 bg-black text-green-500 rounded-lg">
                    <div className="font-mono leading-none" x-text="days">{timeLeft.minutes}</div>
                    <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                </div>
                <div className="lg:w-24 mx-1 p-2 bg-black text-green-500 rounded-lg">
                    <div className="font-mono leading-none" x-text="days">{timeLeft.seconds}</div>
                    <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                </div>
            </div>
        </div>
    );
}

export default CountDown;