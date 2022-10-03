import React from 'react';
import classes from '../../Styles/CustomImage.module.css';

const CustomImage = ({src}) => {
  return (
    <img className={classes.img} src={src} alt="Profile Image" />
  )
}

export default CustomImage;