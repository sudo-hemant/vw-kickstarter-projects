import React from "react";

import Project from "../Project";

import "./projectList.css";

const ProjectList = ({ currentData: projectsList = [] }) => {
  return (
    <div className="project-list">
      {projectsList.map((item) => (
        <Project key={item["s.no"]} data={item} />
      ))}
    </div>
  );
};

export default ProjectList;
