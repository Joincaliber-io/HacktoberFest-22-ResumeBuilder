import React from 'react'
import classes from '../../Styles/Info.module.css';

const Info = ({title, text, color,moreinfo, pt, mr}) => {
  return (
    <>
    <div className={classes.mainDiv} style={{color: `${color ? color : "white"}`, paddingTop: `${pt && pt}`, marginRight: `${mr && mr}`}}>
        <p>{title}</p>
        <p className={classes.text}>{text}</p>
        {moreinfo && <p className={classes.moreInfo}>{moreinfo}</p>}
    </div>

    </>
  )
}

export default Info