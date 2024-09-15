import classes from './Section1.module.css';
const Sec1 = () => {
    return(
        <section>
            <div className={classes.section}>
            <div className={classes.head}>
            <h3 className={classes.Ai}>100K+</h3>
            <h3 className={classes.Dt}>50K+</h3>
            <h3 className={classes.Aic}>100+</h3>  
            </div>
            <div className={classes.p}>
            <p className={classes.p1}>AI Model submissions</p>
            <p className={classes.p2}>Data Scientists</p>
            <p className={classes.p3}>AI challenges hosted</p>
            </div>
            </div>
        </section>
    );

};
export default Sec1;
