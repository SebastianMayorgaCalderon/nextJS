import React, { useRef } from "react";
import Button from "../Button";
import classes from "./event-search.module.css";

import { withRouter } from "next/router";

const EventSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;
    onSearch(year, month);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">march</option>
            <option value="4">april</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">july</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">november</option>
            <option value="12">december</option>
          </select>
        </div>
      </div>
      <Button>FindEvents</Button>
    </form>
  );
};

export default EventSearch;
