import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await axios.get(`project/${id}`);
      setProjectDetails(data);
    };
    fetchProject();
  }, [id]);
  return (
    <>
      <div>{id}</div>
    </>
  );
};

export default ProjectDetails;
