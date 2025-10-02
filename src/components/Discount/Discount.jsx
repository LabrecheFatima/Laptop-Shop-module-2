import { useState, useEffect } from "react";

function Discount() {  
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 23,
        minutes: 59,
        seconds: 59, 
    });

    useEffect(()=> {
        const timer= setInterval(() => {
            setTimeLeft(prev => {
                let newTime= {...prev};

                if (newTime.seconds> 0) {
                    newTime.seconds --;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes --;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours --;
                        } else {
                            newTime.hours= 23;
                            if (newTime.days > 0) {
                                newTime.days --;
                            } else {
                                clearInterval(timer);
                            }
                        }
                    }

                }
                return newTime;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])


    return(
            <div className="timer-container">  
                    <p>🔥 50% OFF on ALL HP Laptops - Limited Time!</p>
                    <span>{timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds} </span>
            </div>
    );
}

export default Discount;