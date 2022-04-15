import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "@mui/material";

const Project = ({ project }) => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0.5 } });
  return (
    <>
      <animated.div style={props}>
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
      </animated.div>
    </>
  );
};

export default Project;
