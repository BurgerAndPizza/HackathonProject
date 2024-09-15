import { Fragment, useState } from "react";
import rocketship from '../assets/rocketship.png';
import classes from './Header.module.css';
import Sec1 from "./Section1";
import AddHackathon from '../Hackathon/AddHackathon';
import HackathonList from '../Hackathon/HackathonList';
import Reason from "../Hackathon/Reason";
import SearchBar from "../Hackathon/SearchBar";

const Header = () => {
    const [showForm, setShowForm] = useState(false);
    const [hackathons, setHackathons] = useState([]); // Initialize as an empty array

    const toggleFormVisibility = () => {
        setShowForm(true);
    };

    const addHackathonHandler = (hackathon) => {
        setHackathons((prevHackathons) => [...prevHackathons, hackathon]);
        setShowForm(false);
    };

    console.log("Hackathons:", hackathons);  // Debugging log to check if hackathons are updated

    return (
        <Fragment>
            {showForm ? (
                <AddHackathon onAddHackathon={addHackathonHandler} />
            ) : (
                <section className={classes.sec1}>
                    <div className={classes.hd}>
                        <header className={classes.header}>
                            <h2> Accelerate Innovation With Global AI Challenges</h2>
                            <div></div>
                            <div className={classes.para}>
                                <p>AI challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions</p>
                            </div>
                            <button className={classes.crtBtn} onClick={toggleFormVisibility}>Create Challenge</button>
                        </header>
                        <div className={classes['main-img']}>
                            <img src={rocketship} alt="Icon for the AI" />
                        </div>
                    </div>
                </section>
            )}
            {!showForm && <Sec1 />}
            <Reason />
            <SearchBar />
            <HackathonList hackathons={hackathons} />
        </Fragment>
    );
};

export default Header;
