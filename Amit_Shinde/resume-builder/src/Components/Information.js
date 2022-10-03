import React from "react";
import classes from "../Styles/Information.module.css";
import Info from "./UI/Info";
import Skill from "./UI/Skill";
import TitleInfo from "./UI/Title_Information";

const Information = ({ resumeData }) => {
  return resumeData.map((data) => {
    return (
      <div className={classes.mainDiv} key={data.name}>
        {/* PROFILE  */}
        <div>
          <div className={classes.titleDiv} style={{ marginTop: "1.4rem" }}>
            <i
              class="bx bxs-user-circle bx-sm"
              style={{ color: "#3E3F44" }}
            ></i>
            <TitleInfo text={"PROFILE"} fontSize={1} mb={0.5} />
          </div>
          <div className={classes.profileTxt}>
            <p style={{ fontSize: ".8rem" }}>{data.profile}</p>
          </div>
        </div>

        {/* PROFWORK EXP  */}
        <div className={classes.titleDiv} style={{ marginTop: "1.4rem" }}>
          <i class="bx bxs-briefcase bx-sm" style={{ color: "#3E3F44" }}></i>
          <TitleInfo text={"WORK EXPERIENCE"} fontSize={1} mb={0.5} />
        </div>
        {data.experience.map((exp) => {
          return (
            <div className={classes.expData} key={exp.title}>
              <div className={classes.date}>
                <p>
                  {exp.fromYear} - {exp.toYear} <br />{" "}
                  <span>{exp.location}</span>
                </p>
              </div>
              <Info
                title={exp.title}
                text={exp.companyName}
                color="black"
                pt=".4rem"
                moreinfo={exp.info}
              />
            </div>
          );
        })}

        {/* EDUCATION  */}
        <div className={classes.titleDiv} style={{ marginTop: "1.4rem" }}>
          <i class="bx bxs-book bx-sm" style={{ color: "#3E3F44" }}></i>
          <TitleInfo text={"EDUCATION"} fontSize={1} mb={0.5} />
        </div>
        {data.education.map((edu) => {
          return (
            <div className={classes.expData} key={edu.name}>
              <div className={classes.date}>
                <p>
                  {edu.fromYear} - {edu.toYear} <br />{" "}
                  <span>{edu.location}</span>
                </p>
              </div>
              <Info
                title={edu.name}
                text={edu.major}
                color="black"
                pt=".4rem"
              />
            </div>
          );
        })}

        {/* SKILLS AND EXPERTIZE  */}
        <div>
          <div className={classes.titleDiv} style={{ marginTop: "1.4rem" }}>
            <i class="bx bxs-shield bx-sm" style={{ color: "#3E3F44" }}></i>
            <TitleInfo text={"SKILLS AND EXPERTIZE"} fontSize={1} mb={0.5} />
          </div>

          <div className={classes.skillMainDiv}>
                {Object.entries(data.skills).map(([key, value]) => {
                  return (
                    <Skill key={key} name={`${key.charAt(0).toUpperCase()}${key.slice(1)} `} score={value} />
                  );
                })}
          </div>
        </div>

        {/* HOBBIES & INTERESTS  */}
        <div>
          <div className={classes.titleDiv} style={{ marginTop: "1.4rem" }}>
            {/* <i class="bx bxs-user-circle bx-sm" style={{ color: "#3E3F44" }}></i> */}
            <TitleInfo text={"HOBBY & INTERESTS"} fontSize={1} mb={0.5} />
          </div>
          <div className={classes.profileTxt}>
           {data.hobby.join(", ")}.
          </div>
        </div>
      </div>
    );
  });
};

export default Information;
