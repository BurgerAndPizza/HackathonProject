import React, { useState, useEffect } from 'react';
import classes from './HackathonList.module.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

const calculateTimeLeft = (startDate) => {
    const difference = +new Date(startDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
        };
    }

    return timeLeft;
};

const HackathonList = ({ hackathons = [] }) => { // Default to an empty array
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft('2024-09-20T00:00:00'));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft('2024-09-20T00:00:00'));
        }, 1000);

        return () => clearTimeout(timer);
    });

    console.log("Rendering HackathonList...");  // Debugging log to check when HackathonList is rendering
    console.log("Hackathons:", hackathons);  // Debugging log to check if hackathons are being passed correctly

    return (
        <section>
            <div className={classes.list}>
                {hackathons.map((hackathon, index) => (
                    <div key={index} className={classes.list1}>
                        {hackathon.image && (
                            <img
                                src={URL.createObjectURL(hackathon.image)}
                                alt={hackathon.challengeName}
                                className={classes.img}
                            />
                        )}
                        <div className={classes.content}>
                            <h3>{hackathon.challengeName}</h3>
                            <p>Starts on: {hackathon.startDate}</p>
                            <p>Ends on: {hackathon.endDate}</p>
                            <p>{hackathon.description}</p>
                            <p>Level: {hackathon.level}</p>
                        </div>
                    </div>
                ))}
                {/* Example static data */}
                <div className={classes.list1}>
                    <img className={classes.img1} src={img1} alt='img1 for hackathon' />
                    <div className={classes.content}>
                        <h3>Data Science Bootcamp-Graded Datathon</h3>
                        <p>Starts in</p>
                        <p>{`${timeLeft.days || 0} days ${timeLeft.hours || 0} hours ${timeLeft.minutes || 0} minutes`}</p>
                        <button className={classes.PrtBtn}>Participate Now</button>
                    </div>
                </div>
                {/* Other static data */}
                <div className={classes.list1}>
                    <img className={classes.img3} src={img2} alt='img2 for hackathon' />
                    <div className={classes.content}>
                        <h3>Data Sprint 72 - Butterfly Identification</h3>
                        <p>Starts in</p>
                        <p>{`${timeLeft.days || 0} days ${timeLeft.hours || 0} hours ${timeLeft.minutes || 0} minutes`}</p>
                        <button className={classes.PrtBtn}>Participate Now</button>
                    </div>
                </div>
                <div className={classes.list1}>
                    <img className={classes.img3} src={img3} alt='img3 for hackathon' />
                    <div className={classes.content}>
                        <h3>Data Sprint 71 - Weather Recognition</h3>
                        <p>Starts in</p>
                        <p>{`${timeLeft.days || 0} days ${timeLeft.hours || 0} hours ${timeLeft.minutes || 0} minutes`}</p>
                        <button className={classes.PrtBtn}>Participate Now</button>
                    </div>
                </div>
                <div className={classes.list1}>
                    <img className={classes.img3} src={img4} alt='img4 for hackathon' />
                    <div className={classes.content}>
                        <h3>Data Sprint 70 - Airline Passenger Satisfaction</h3>
                        <p>Starts in</p>
                        <p>{`${timeLeft.days || 0} days ${timeLeft.hours || 0} hours ${timeLeft.minutes || 0} minutes`}</p>
                        <button className={classes.PrtBtn}>Participate Now</button>
                    </div>
                </div>
                <div className={classes.list1}>
                    <img className={classes.img3} src={img5} alt='img5 for hackathon' />
                    <div className={classes.content}>
                        <h3>Engineering Graduates Employment Outcomes</h3>
                        <p>Starts in</p>
                        <p>{`${timeLeft.days || 0} days ${timeLeft.hours || 0} hours ${timeLeft.minutes || 0} minutes`}</p>
                        <button className={classes.PrtBtn}>Participate Now</button>
                    </div>
                </div>
                <div className={classes.list1}>
                    <img className={classes.img3} src={img6} alt='img6 for hackathon' />
                    <div className={classes.content}>
                        <h3>Travel Insurance Claim Prediction</h3>
                        <p>Starts in</p>
                        <p>{`${timeLeft.days || 0} days ${timeLeft.hours || 0} hours ${timeLeft.minutes || 0} minutes`}</p>
                        <button className={classes.PrtBtn}>Participate Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HackathonList;
