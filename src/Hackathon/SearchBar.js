import React from 'react';
import classes from './SearchBar.module.css';
import HackathonList from './HackathonList';

const SearchBar = () => {
  return (
    <div>
    <div className={classes.sec3}>
      <section>
        <h2 className={classes.heading2}>Explore Challenges</h2>
        <div className={classes.src}>
        <div className={classes.controls}>
          <input type="text" className={classes.search} placeholder="Search" />
          <div className={classes.filter}>
            <label htmlFor="status">Status:</label>
            <select id="status" className={classes.dropdown}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
          <div className={classes.filter}>
            <label htmlFor="level">Level:</label>
            <select id="level" className={classes.dropdown}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          </div>
        </div>
      </section>
    </div>
    <HackathonList/>
    </div>
    

  );
};

export default SearchBar;
