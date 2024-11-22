import { useState } from "react";

const FnClock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    setInterval(tick, 1000);

    return (
        <>
            <h1>Function Clock : {date.toLocaleTimeString()}</h1>
        </>
    )
}

export default FnClock;