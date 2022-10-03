import React from "react";
import classes from "../../Styles/Title.module.css";

const TitleInfo = ({ fontSize, mb, text, mt }) => {
  
  return (
    <p
      className={classes.mainDivInfo}
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

export default TitleInfo;
