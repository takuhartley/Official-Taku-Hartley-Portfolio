import React from "react";
import { Link } from "@mui/material";

const Project = ({ project }) => {
  return (
    <>
      <div className="project_card">
        <div className="project_card_title">
          <Link href={`/project/${project._id}`}>{project.name}</Link>
        </div>
        <div className="project_card_title">
          <div>{project.description}</div>
        </div>
        <div>
          <img
            className="project_card_header"
            src={project.image}
            alt={project.name}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
