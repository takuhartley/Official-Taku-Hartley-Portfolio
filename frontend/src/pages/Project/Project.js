import React from "react";
import { Link } from "react-router-dom";
// Style
import "./Project.scss";

const Project = ({ project }) => {
  return (
    <>
      <div className="project_card">
        <div className="project_card_title">
          <Link to={`/project/${project._id}`}>
            <p>{project.name}</p>
          </Link>
        </div>
        <div className="project_card_description">
          <p>{project.description}</p>
        </div>

        <div className="project_card_category">
          <p>{project.category}</p>
        </div>
        <div className="project_card_likes">
          <p>{project.likes}</p>
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
