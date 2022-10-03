import React from 'react'
import classes from "../../Styles/Information.module.css";


const Rating = ({score}) => {
  return (
    <div className={classes.barContainer}>
    <div className={classes.bar} style={{ maxWidth: `${score ? score : 0}%` }}></div>
  </div>
  )
}

export default Rating