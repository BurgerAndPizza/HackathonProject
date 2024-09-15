import classes from './Reason.module.css';
const Reason = () =>{
    return(
        <section>
            <div className={classes.sec2}> 
            <h1 className={classes.heading}> Why Participate in AI Challenges?</h1>
            <div className={classes.rows}>
             <div className={classes.r1}>
                <h2>Prove your skills</h2>
                <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
             </div>
             <div className={classes.r2}>
                <h2>Learn from community</h2>
                <p>One can look and analyze the solutions submitted by the other Data scientists in the community and learn from them.</p>
             </div>
             <div className={classes.r3}>
                <h2>Challenge yourself</h2>
                <p>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
             </div>
             <div className={classes.r4}>
                <h2>Earn recognition</h2>
                <p>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community buut also earns rewards. </p>
             </div>
             </div>
             </div>
        </section>
       
    );
};
export default Reason;