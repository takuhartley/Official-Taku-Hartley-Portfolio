import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState({});
  let { _id } = useParams();
  console.log(`/project/${_id}`)

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await axios.get(`project/${_id}`);
      setProjectDetails(data);
    };
    fetchProject();
  }, [_id]);
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
