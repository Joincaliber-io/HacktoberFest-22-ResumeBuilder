import React from 'react'
import Information from '../Components/Information'
import Personal from '../Components/Personal'
import classes from '../Styles/Resume.module.css';
import {resumeData} from '../data/dummy'

const Resume = () => {
  return (
    <div className={classes.mainDiv}>
        <div className={classes.leftDiv}>
        <Personal resumeData={resumeData}/>
        </div>

        <div className={classes.rightDiv}>
        <Information resumeData={resumeData}/>
        </div>
    </div>
  )
}

export default Resume