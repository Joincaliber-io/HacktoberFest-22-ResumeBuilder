import React from "react";
import classes from "../../Styles/Title.module.css";

const Title = ({ fontSize, mb, text, mt }) => {
  
  return (
    <p
      className={classes.mainDiv}
      style={{
        fontSize: `${fontSize}rem`,
        marginBottom: `${mb}rem`,
        marginTop: `${mt ? mt : 0}rem`,        
      }}
    >
      {text}
    </p>
  );
};

export default Title;
