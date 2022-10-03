import React from "react";
import CustomImage from "./UI/CustomImage";
import profileImg from "../Assets/profile.png";
import classes from "../Styles/Personal.module.css";
import Title from "./UI/Title";
import Info from "./UI/Info";

const Personal = ({ resumeData }) => {

  return resumeData.map((data) => {
    return (
      <div className={classes.mainDiv} key={data.name}>
        {/* PROFILE  */}
        <CustomImage src={profileImg} />
        <p className={classes.name}>
          {data.name.split(" ")[0]} <br />{" "}
          <span>{data.name.split(" ")[1]}</span>
        </p>
        <Title text={data.title} fontSize={0.8} mb={2} />

        {/* INFO  */}
        <Title text={"INFO"} fontSize={1} mb={0.5} />
        {Object.entries(data.info).map(([key, value]) => {
          return (
            <div className={classes.infoDiv} key={key}>
              <i
                style={{ color: "#CFCFD9" }}
                class={data.infoIcons.hasOwnProperty(key) ? data.infoIcons[key] : ""}
              ></i>
              <Info
                title={`${key.charAt(0).toUpperCase() + key.slice(1)}`}
                text={value}
              />
            </div>
          );
        })}
        
        {/* SOCIAL  */}
        <Title text={"SOCIAL"} fontSize={1} mb={0.5} mt={2.3} />
        {Object.entries(data.social).map(([key, value]) => {
          return (
            <div className={classes.infoDiv}  key={key}>
              <i
                style={{ color: "#CFCFD9" }}
                className={
                  data.socialIcons.hasOwnProperty(key) ? data.socialIcons[key] : ""
                }
              ></i>
              <Info
                title={`${key.charAt(0).toUpperCase() + key.slice(1)}`}
                text={value}
              />
            </div>
          );
        })}
        
      </div>
    );
  });
};

export default Personal;
