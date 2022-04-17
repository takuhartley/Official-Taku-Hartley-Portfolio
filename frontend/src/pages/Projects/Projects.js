import React from "react";
// Data
import projects from "../../projects";
// Pages
import Project from "../Project/Project";
// MUI
import { Grid, Container } from "@mui/material";

const Projects = () => {
  return (
    <>
      <Container maxWidth="md">
        <h1>My stuff</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projects.map((project) => (
            <Project project={project} key={project._id} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
